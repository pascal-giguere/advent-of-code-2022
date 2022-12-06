type CaloriesByElfId = Record<string, number[]>;
type TotalCaloriesByElfId = Record<string, number>;
type SortedTotalCaloriesByElfId = [string, number][];

/** @returns ID of elf carrying the most total calories. An elf's ID corresponds to their one-based index. */
export function elfWithMostCalories(inputContents: string): string {
  const sortedTotalCalories: SortedTotalCaloriesByElfId = processInput(inputContents);
  return sortedTotalCalories[0][0];
}

/** @returns Total calories of the elf carrying the most total calories */
export function caloriesOfElfWithMostCalories(inputContents: string): number {
  const sortedTotalCalories: SortedTotalCaloriesByElfId = processInput(inputContents);
  return sortedTotalCalories[0][1];
}

/** @returns Total calories carried by each elf, ordered by descending total calories */
function processInput(inputContents: string): SortedTotalCaloriesByElfId {
  const caloriesByElf: CaloriesByElfId = parseInput(inputContents);
  const totalCaloriesByElf: TotalCaloriesByElfId = calculateTotalCalories(caloriesByElf);
  return sortByTotalCalories(totalCaloriesByElf);
}

/** @returns Parsed input file with no data transform applied */
function parseInput(inputContents: string): CaloriesByElfId {
  const splitByElf: string[] = inputContents.split('\n\n');
  return splitByElf.reduce((acc: CaloriesByElfId, elfString: string, elfIndex: number) => {
    const elfId: string = (elfIndex + 1).toString();
    const elfCalories: number[] = elfString
      .split('\n')
      .map((str) => parseInt(str))
      .filter(isFinite);
    return { ...acc, [elfId]: elfCalories };
  }, {});
}

/** @returns Total calories carried by each elf */
function calculateTotalCalories(caloriesByElf: CaloriesByElfId): TotalCaloriesByElfId {
  return Object.entries(caloriesByElf).reduce((acc: TotalCaloriesByElfId, [elfId, elfCalories]: [string, number[]]) => {
    const elfTotalCalories: number = elfCalories.reduce((a, b) => a + b, 0);
    return { ...acc, [elfId]: elfTotalCalories };
  }, {});
}

/** @returns Total calories carried by each elf, ordered by descending total calories */
function sortByTotalCalories(totalCaloriesByElf: TotalCaloriesByElfId): SortedTotalCaloriesByElfId {
  return Object.entries(totalCaloriesByElf).sort(
    ([, totalCaloriesA], [, totalCaloriesB]) => totalCaloriesB - totalCaloriesA
  );
}
