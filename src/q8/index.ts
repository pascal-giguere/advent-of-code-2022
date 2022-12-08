import { parseInput, TreesHeightMatrix } from './parsing';
import { countVisibleTrees, identifyVisibleTrees, TreesVisibleMatrix } from './visibility';
import { calculateScenicScores, findMaxScenicScore, TreesScenicScoreMatrix } from './scenic-score';

/** @returns The number of trees visible from outside the grid
 *  @param inputContents - String representing the input file's contents */
export function numberOfVisibleTrees(inputContents: string): number {
  const treesHeight: TreesHeightMatrix = parseInput(inputContents);
  const treesVisible: TreesVisibleMatrix = identifyVisibleTrees(treesHeight);
  return countVisibleTrees(treesVisible);
}

/** @returns The scenic score of the tree with the highest scenic score in the grid
 *  @param inputContents - String representing the input file's contents */
export function maxScenicScore(inputContents: string): number {
  const treesHeight: TreesHeightMatrix = parseInput(inputContents);
  const scenicScores: TreesScenicScoreMatrix = calculateScenicScores(treesHeight);
  return findMaxScenicScore(scenicScores);
}
