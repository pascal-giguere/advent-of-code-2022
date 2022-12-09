import { itemTypePriority } from './shared';

type RucksackGroup = [string, string, string];

/** @returns The sum of the priority of each item type found in both rucksack compartments
 *  @param inputContents - String representing the encrypted strategy guide's contents */
export function badgeItemTypesPriority(inputContents: string): number {
  const rucksackGroups: RucksackGroup[] = parseInput(inputContents);
  const commonItemTypes: string[] = rucksackGroups.map(findCommonItemType);
  return commonItemTypes.reduce((acc: number, itemType: string) => acc + itemTypePriority(itemType), 0);
}

/** @returns Parsed input file with no data transform applied
 *  @param inputContents - String representing the encrypted strategy guide's contents */
function parseInput(inputContents: string): RucksackGroup[] {
  const lines: string[] = inputContents.trim().split('\n');
  return lines.reduce((groups: RucksackGroup[], line: string, i: number) => {
    const groupIndex: number = Math.trunc(i / 3);
    const groupPosition: number = i % 3;
    if (groupPosition === 0) {
      groups[groupIndex] = ['', '', ''];
    }
    groups[groupIndex][groupPosition] = line;
    return groups;
  }, []);
}

function findCommonItemType(rucksacks: RucksackGroup): string {
  return [...rucksacks[0]].find(
    (char: string) => [...rucksacks[1]].includes(char) && [...rucksacks[2]].includes(char)
  )!;
}
