import { countVisibleTrees, identifyVisibleTrees, TreesVisibleMatrix } from './visibility';
import { parseInput, TreesHeightMatrix } from './parsing';

/** @returns The number of trees visible from outside the grid
 *  @param inputContents - String representing the input file's contents */
export function numberOfVisibleTrees(inputContents: string): number {
  const treesHeight: TreesHeightMatrix = parseInput(inputContents);
  const treesVisible: TreesVisibleMatrix = identifyVisibleTrees(treesHeight);
  return countVisibleTrees(treesVisible);
}
