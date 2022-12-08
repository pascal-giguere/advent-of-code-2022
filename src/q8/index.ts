type TreesHeightMatrix = number[][];
type TreesVisibleMatrix = boolean[][];

export function numberOfVisibleTrees(inputContents: string): number {
  const treesHeight: TreesHeightMatrix = parseInput(inputContents);
  const treesVisible: TreesVisibleMatrix = identifyVisibleTrees(treesHeight);
  return countVisibleTrees(treesVisible);
}

function parseInput(inputContents: string): TreesHeightMatrix {
  const lines: string[] = inputContents.trim().split('\n');
  return lines.map((line) => [...line].map((char) => parseInt(char)));
}

function identifyVisibleTrees(treesHeight: TreesHeightMatrix): TreesVisibleMatrix {
  const treesVisible: TreesVisibleMatrix = [];

  for (let j = 0; j < treesHeight.length; j++) {
    treesVisible[j] = [];
    for (let i = 0; i < treesHeight[j].length; i++) {
      const treeHeight: number = treesHeight[j][i];

      // Look up
      let isVisibleUp: boolean = true;
      for (let y = j - 1; y >= 0; y--) {
        const neighborTreeHeight: number = treesHeight[y][i];
        if (treeHeight <= neighborTreeHeight) {
          isVisibleUp = false;
          break;
        }
      }
      // Look right
      let isVisibleRight: boolean = true;
      for (let x = i + 1; x < treesHeight[j].length; x++) {
        const neighborTreeHeight: number = treesHeight[j][x];
        if (treeHeight <= neighborTreeHeight) {
          isVisibleRight = false;
          break;
        }
      }
      // Look down
      let isVisibleDown: boolean = true;
      for (let y = j + 1; y < treesHeight.length; y++) {
        const neighborTreeHeight: number = treesHeight[y][i];
        if (treeHeight <= neighborTreeHeight) {
          isVisibleDown = false;
          break;
        }
      }
      // Look left
      let isVisibleLeft: boolean = true;
      for (let x = i - 1; x >= 0; x--) {
        const neighborTreeHeight: number = treesHeight[j][x];
        if (treeHeight <= neighborTreeHeight) {
          isVisibleLeft = false;
          break;
        }
      }

      treesVisible[j][i] = isVisibleUp || isVisibleRight || isVisibleDown || isVisibleLeft;
    }
  }

  return treesVisible;
}

function countVisibleTrees(treesVisible: TreesVisibleMatrix): number {
  let count = 0;
  for (let i = 0; i < treesVisible.length; i++) {
    for (let j = 0; j < treesVisible[i].length; j++) {
      count += treesVisible[i][j] ? 1 : 0;
    }
  }
  return count;
}
