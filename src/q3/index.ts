type Rucksack = [string, string];

/** @returns The sum of the priority of each item type found in both rucksack compartments
 *  @param inputContents - String representing the encrypted strategy guide's contents */
export function commonItemTypesPriority(inputContents: string): number {
  const rucksacks: Rucksack[] = parseInput(inputContents);
  const commonItemTypes: string[] = rucksacks.map(findCommonItemType);
  return commonItemTypes.reduce((acc: number, itemType: string) => acc + itemTypePriority(itemType), 0);
}

/** @returns Parsed input file with no data transform applied
 *  @param inputContents - String representing the encrypted strategy guide's contents */
function parseInput(inputContents: string): Rucksack[] {
  const lines: string[] = inputContents.trim().split('\n');
  return lines.map(parseRucksackInput);
}

function parseRucksackInput(rucksackInput: string): Rucksack {
  const middlePosition: number = Math.floor(rucksackInput.length / 2);
  return [rucksackInput.substring(0, middlePosition), rucksackInput.substring(middlePosition)];
}

function findCommonItemType(rucksack: Rucksack): string {
  return [...rucksack[0]].find((char: string) => [...rucksack[1]].includes(char))!;
}

function itemTypePriority(itemType: string): number {
  const charCode: number = itemType.charCodeAt(0);
  if (charCode > 96) {
    // lowercase letter
    return charCode - 96;
  } else {
    // uppercase letter
    return charCode - 38;
  }
}
