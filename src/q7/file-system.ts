import { CommandOutput, isCd, isLs } from './types';

export abstract class FileSystemNode {
  name: string;
  parent?: DirectoryNode;
  abstract size(): number;

  protected constructor(name: string, parent?: DirectoryNode) {
    this.name = name;
    this.parent = parent;
  }

  path(): string {
    let node: FileSystemNode = this;
    let path = this.name;
    while (node.parent) {
      node = node.parent;
      path = `${node.name}/${path}`;
    }
    return path;
  }
}

export class DirectoryNode extends FileSystemNode {
  children: FileSystemNode[];

  constructor(name: string, parent?: DirectoryNode, children: FileSystemNode[] = []) {
    super(name, parent);
    this.children = children;
  }

  override size(): number {
    return this.children.reduce((acc: number, node: FileSystemNode) => acc + node.size(), 0);
  }

  static isDirectory(node: FileSystemNode): node is DirectoryNode {
    return 'children' in node;
  }

  findChildNode(name: string): FileSystemNode | undefined {
    return this.children.find((c) => c.name === name);
  }

  findChildNodeRecursive(name: string): FileSystemNode | undefined {
    for (const child of this.children) {
      if (child.name === name) {
        return child;
      }
      if (DirectoryNode.isDirectory(child)) {
        const matchedNode: FileSystemNode | undefined = child.findChildNodeRecursive(name);
        if (matchedNode) {
          return matchedNode;
        }
      }
    }
  }

  childrenDirectorySizes(): Record<string, number> {
    const sizes: Record<string, number> = {};
    this.childrenDirectorySizesRecursive(sizes);
    return sizes;
  }

  private childrenDirectorySizesRecursive(sizes: Record<string, number>): void {
    for (const child of this.children) {
      if (DirectoryNode.isDirectory(child)) {
        sizes[child.path()] = child.size();
        child.childrenDirectorySizesRecursive(sizes);
      }
    }
  }
}

export class FileNode extends FileSystemNode {
  parent: DirectoryNode;
  private readonly fileSize: number;

  constructor(name: string, parent: DirectoryNode, fileSize: number) {
    super(name, parent);
    this.parent = parent;
    this.fileSize = fileSize;
  }

  override size(): number {
    return this.fileSize;
  }
}

export class FileSystemExplorer {
  private discoveredRoot = new DirectoryNode('');
  private cwd: DirectoryNode = this.discoveredRoot;

  explore(commandOutput: CommandOutput): void {
    if (isCd(commandOutput)) {
      this.cd(commandOutput.argument);
    } else if (isLs(commandOutput)) {
      this.ls(commandOutput.output);
    }
  }

  getDiscoveredFileSystem(): DirectoryNode {
    return this.discoveredRoot;
  }

  private cd(arg: string): void {
    switch (arg) {
      case '/': {
        // Navigate to the root directory, which we had already discovered.
        this.cwd = this.discoveredRoot;
        break;
      }
      case '..': {
        // We're moving up one level to a directory we had already discovered.
        if (!this.cwd.parent) {
          throw Error('Cannot move up from root folder');
        }
        this.cwd = this.cwd.parent;
        break;
      }
      default: {
        // We're entering a potentially undiscovered directory. Discover it if it's not already.
        let targetDirectory: DirectoryNode | undefined = this.cwd.findChildNode(arg) as DirectoryNode;
        if (!targetDirectory) {
          targetDirectory = new DirectoryNode(arg, this.cwd);
          this.cwd.children.push(targetDirectory);
        }
        this.cwd = targetDirectory;
        break;
      }
    }
  }

  private ls(output: string[]): void {
    // All children elements are potentially undiscovered
    for (const line of output) {
      const splitLine: string[] = line.split(' ');
      if (splitLine.length !== 2) {
        throw Error(`Invalid ls command output: '${line}'`);
      }
      const name: string = splitLine[1];
      let targetNode: FileSystemNode | undefined = this.cwd.findChildNode(name);
      if (targetNode) {
        // Node was already discovered previously
        continue;
      }
      if (splitLine[0] === 'dir') {
        targetNode = new DirectoryNode(name, this.cwd);
      } else {
        const fileSize: number = parseInt(splitLine[0]);
        targetNode = new FileNode(name, this.cwd, fileSize);
      }
      this.cwd.children.push(targetNode);
    }
  }
}
