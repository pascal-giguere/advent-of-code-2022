export type TreesHeightMatrix = number[][];

/** @returns A matrix of numbers representing the height of each tree in the grid
 *  @param inputContents - String representing the input file's contents */
export function parseInput(inputContents: string): TreesHeightMatrix {
  const lines: string[] = inputContents.trim().split('\n');
  return lines.map((line) => [...line].map((char) => parseInt(char)));
}
