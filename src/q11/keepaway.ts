import { Monkey, Operation, Operator, parseInput, Test } from './parsing';

/** @returns Array of Monkey objects after playing n rounds of Keep Away
 *  @param inputContents - String representing the input file's contents
 *  @param numberOfRounds - Number of rounds of Keep Away to be played by monkeys
 *  @param reliefEnabled - Whether worry level should be divided by 3 after item inspection */
export function playKeepAway(inputContents: string, numberOfRounds: number, reliefEnabled: boolean): Monkey[] {
  const monkeys: Monkey[] = parseInput(inputContents);

  for (let i = 0; i < numberOfRounds; i++) {
    for (const monkey of monkeys) {
      while (monkey.items.length) {
        let worryLevel: number = monkey.items.shift()!;
        worryLevel = applyOperation(worryLevel, monkey.operation);
        if (reliefEnabled) {
          worryLevel = applyRelief(worryLevel);
        }
        const nextMonkeyIndex: number = targetMonkeyIndex(worryLevel, monkey.test);
        monkeys[nextMonkeyIndex].items.push(worryLevel);
        monkey.numberOfInspections++;
      }
    }
  }

  return monkeys;
}

/** @returns The updated worry level after the operation has been applied */
function applyOperation(worryLevel: number, operation: Operation): number {
  switch (operation.operator) {
    case Operator.Add:
      return worryLevel + operation.operand;
    case Operator.Multiply:
      return worryLevel * operation.operand;
    case Operator.Pow:
      return Math.pow(worryLevel, operation.operand);
  }
}

/** @returns The updated worry level after relief has been applied */
function applyRelief(worryLevel: number): number {
  return Math.floor(worryLevel / 3);
}

/** @returns The zero-based index of the monkey the item should be thrown to next */
function targetMonkeyIndex(worryLevel: number, test: Test): number {
  const isDivisible: boolean = worryLevel % test.divisibleBy === 0;
  return isDivisible ? test.trueMonkeyIndex : test.falseMonkeyIndex;
}
