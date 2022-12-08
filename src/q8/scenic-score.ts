import { TreesHeightMatrix } from './parsing';

export type TreesScenicScoreMatrix = number[][];

/** @returns A matrix of booleans representing whether each tree in the grid is visible
 *  @param treesHeight - A matrix representing the height of each tree in the grid */
export function calculateScenicScores(treesHeight: TreesHeightMatrix): TreesScenicScoreMatrix {
  const scenicScores: TreesScenicScoreMatrix = [];

  for (let j = 0; j < treesHeight.length; j++) {
    scenicScores[j] = [];
    for (let i = 0; i < treesHeight[j].length; i++) {
      const treeHeight: number = treesHeight[j][i];

      if (i === 2 && j === 1) {
        console.log('l');
      }

      // Look up
      let viewDistanceUp: number = 0;
      for (let y = j - 1; y >= 0; y--) {
        const neighborTreeHeight: number = treesHeight[y][i];
        viewDistanceUp++;
        if (treeHeight <= neighborTreeHeight) {
          break;
        }
      }
      // Look right
      let viewDistanceRight: number = 0;
      for (let x = i + 1; x < treesHeight[j].length; x++) {
        const neighborTreeHeight: number = treesHeight[j][x];
        viewDistanceRight++;
        if (treeHeight <= neighborTreeHeight) {
          break;
        }
      }
      // Look down
      let viewDistanceDown: number = 0;
      for (let y = j + 1; y < treesHeight.length; y++) {
        const neighborTreeHeight: number = treesHeight[y][i];
        viewDistanceDown++;
        if (treeHeight <= neighborTreeHeight) {
          break;
        }
      }
      // Look left
      let viewDistanceLeft: number = 0;
      for (let x = i - 1; x >= 0; x--) {
        const neighborTreeHeight: number = treesHeight[j][x];
        viewDistanceLeft++;
        if (treeHeight <= neighborTreeHeight) {
          break;
        }
      }

      scenicScores[j][i] = viewDistanceUp * viewDistanceRight * viewDistanceDown * viewDistanceLeft;
    }
  }

  return scenicScores;
}

export function findMaxScenicScore(scenicScores: TreesScenicScoreMatrix): number {
  let max = 0;
  for (let i = 0; i < scenicScores.length; i++) {
    for (let j = 0; j < scenicScores[i].length; j++) {
      max = Math.max(max, scenicScores[i][j]);
    }
  }
  return max;
}
