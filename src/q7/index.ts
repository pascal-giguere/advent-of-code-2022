import { parseTerminalOutput } from './parsing';
import { DirectoryNode, FileSystemExplorer, FileSystemNode } from './file-system';
import { TerminalOutput } from './types';

export function getNodeSize(inputContents: string, nodeName: string): number {
  const matchedNode: FileSystemNode = findNode(inputContents, nodeName);
  return matchedNode.size();
}

function findNode(inputContents: string, nodeName: string): FileSystemNode {
  const fileSystem: DirectoryNode = discoverFileSystem(inputContents);
  if (nodeName === '/') {
    return fileSystem;
  }
  const matchedNode: FileSystemNode | undefined = fileSystem.findChildNodeRecursive(nodeName);
  if (!matchedNode) {
    throw Error(`Could not find file system node with name '${nodeName}'`);
  }
  return matchedNode;
}

function discoverFileSystem(inputContents: string): DirectoryNode {
  const terminalOutput: TerminalOutput = parseTerminalOutput(inputContents);
  const fsExplorer = new FileSystemExplorer();
  for (const commandOutput of terminalOutput) {
    fsExplorer.explore(commandOutput);
  }
  return fsExplorer.getDiscoveredFileSystem();
}
