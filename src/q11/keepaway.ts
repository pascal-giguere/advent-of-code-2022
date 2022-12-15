import { Monkey, Operation, Operator, parseInput, Test } from './parsing';

/** @returns Array of Monkey objects after playing n rounds of Keep Away
 *  @param inputContents - String representing the input file's contents
 *  @param numberOfRounds - Number of rounds of Keep Away to be played by monkeys
 *  @param reliefEnabled - Whether worry level should be divided by 3 after item inspection */
export function playKeepAway(inputContents: string, numberOfRounds: number, reliefEnabled: boolean): Monkey[] {
  const monkeys: Monkey[] = parseInput(inputContents);
  const testsProduct: number = getTestsProduct(monkeys);

  for (let i = 0; i < numberOfRounds; i++) {
    for (const monkey of monkeys) {
      while (monkey.items.length) {
        let worryLevel: bigint = monkey.items.shift()!;
        worryLevel = applyOperation(worryLevel, monkey.operation);
        if (reliefEnabled) {
          worryLevel = applyRelief(worryLevel);
        }
        worryLevel = worryLevel % BigInt(testsProduct);
        const nextMonkeyIndex: number = targetMonkeyIndex(worryLevel, monkey.test);
        monkeys[nextMonkeyIndex].items.push(worryLevel);
        monkey.numberOfInspections++;
      }
    }
  }

  return monkeys;
}

function getTestsProduct(monkeys: Monkey[]): number {
  return monkeys.reduce((acc: number, monkey: Monkey) => acc * monkey.test.divisibleBy, 1);
}

/** @returns The updated worry level after the operation has been applied */
function applyOperation(worryLevel: bigint, operation: Operation): bigint {
  switch (operation.operator) {
    case Operator.Add:
      return worryLevel + BigInt(operation.operand);
    case Operator.Multiply:
      return worryLevel * BigInt(operation.operand);
    case Operator.Pow:
      return worryLevel ** BigInt(operation.operand);
  }
}

/** @returns The updated worry level after relief has been applied */
function applyRelief(worryLevel: bigint): bigint {
  return worryLevel / 3n;
}

/** @returns The zero-based index of the monkey the item should be thrown to next */
function targetMonkeyIndex(worryLevel: bigint, test: Test): number {
  const isDivisible: boolean = worryLevel % BigInt(test.divisibleBy) === 0n;
  return isDivisible ? test.trueMonkeyIndex : test.falseMonkeyIndex;
}
