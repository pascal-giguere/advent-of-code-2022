import { parseTerminalOutput } from './parsing';
import { DirectoryNode, FileSystemExplorer, FileSystemNode } from './file-system';
import { TerminalOutput } from './types';

/** @returns The size of the requested node
 *  @param inputContents - String representing the input file's contents */
export function getNodeSize(inputContents: string, nodeName: string): number {
  const matchedNode: FileSystemNode = findNode(inputContents, nodeName);
  return matchedNode.size();
}

/** @returns The cumulative size of all directories smaller than `maxDirectorySize`
 *  @param inputContents - String representing the input file's contents
 *  @param maxDirectorySize - Maximum size of directories to be included in the cumulative size */
export function getSizeOfSmallerDirectories(inputContents: string, maxDirectorySize: number): number {
  const directorySizes: Record<string, number> = getAllDirectorySizes(inputContents);
  const smallerDirectorySizes: number[] = Object.values(directorySizes).filter((s) => s <= maxDirectorySize);
  return smallerDirectorySizes.reduce((acc, s) => acc + s, 0);
}

/** @returns The size of the smallest directory to delete in order to have at least `requestedFreeSpace` of free space
 *  @param inputContents - String representing the input file's contents
 *  @param fileSystemMaxSize - Maximum storage space of the file system
 *  @param requestedFreeSpace - The minimum free space our system should have */
export function getSizeOfSmallestDirectoryToDelete(
  inputContents: string,
  fileSystemMaxSize: number,
  requestedFreeSpace: number
): number {
  const currentFileSystemSize: number = discoverFileSystem(inputContents).size();
  const currentFreeSpace: number = fileSystemMaxSize - currentFileSystemSize;
  const spaceToFree: number = Math.max(0, requestedFreeSpace - currentFreeSpace);
  const directorySizes: Record<string, number> = getAllDirectorySizes(inputContents);
  return Object.values(directorySizes)
    .sort((a, b) => a - b)
    .find((s) => s >= spaceToFree)!;
}

/** @returns The size of all directories in a file system, keyed by path
 *  @param inputContents - String representing the input file's contents */
function getAllDirectorySizes(inputContents: string): Record<string, number> {
  const fileSystem: DirectoryNode = discoverFileSystem(inputContents);
  return fileSystem.childrenDirectorySizes();
}

/** @returns A file or directory matching the provided nodeName
 *  @param inputContents - String representing the input file's contents
 *  @param nodeName - Name of the file or directory we're searching */
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

/** @returns The root node of a tree representation of the file system
 *  @param inputContents - String representing the input file's contents */
function discoverFileSystem(inputContents: string): DirectoryNode {
  const terminalOutput: TerminalOutput = parseTerminalOutput(inputContents);
  const fsExplorer = new FileSystemExplorer();
  for (const commandOutput of terminalOutput) {
    fsExplorer.explore(commandOutput);
  }
  return fsExplorer.getDiscoveredFileSystem();
}
