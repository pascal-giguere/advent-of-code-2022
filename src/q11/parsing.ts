export type Monkey = {
  items: number[];
  operation: Operation;
  test: Test;
  numberOfInspections: number;
};

export type Operation = {
  operator: Operator;
  operand: number;
};

export type Test = {
  divisibleBy: number;
  trueMonkeyIndex: number;
  falseMonkeyIndex: number;
};

export enum Operator {
  Add = 'add',
  Multiply = 'multiply',
  Pow = 'pow',
}

/** @returns Array of Monkey objects before playing Keep Away
 *  @param inputContents - String representing the input file's contents */
export function parseInput(inputContents: string): Monkey[] {
  const monkeyInputs: string[] = inputContents.trim().split('\n\n');
  return monkeyInputs.map(parseMonkeyInput);
}

function parseMonkeyInput(monkeyInput: string): Monkey {
  const [, itemsString] = monkeyInput.match(/Starting items: (.*)/)!;
  const items: number[] = itemsString.split(',').map((n) => parseInt(n));

  let operand: number | undefined;
  const [, operatorString, operandString] = monkeyInput.match(/Operation: new = old (.) (.*)/)!;
  const operator: Operator = (() => {
    switch (operatorString) {
      case '+':
        return Operator.Add;
      case '*':
        if (operandString === 'old') {
          operand = 2;
          return Operator.Pow;
        }
        return Operator.Multiply;
      default:
        throw Error(`Unsupported operator '${operatorString}'`);
    }
  })();

  const [, divisibleByString] = monkeyInput.match(/Test: divisible by (\d+)/)!;
  const [, trueMonkeyIndexString] = monkeyInput.match(/If true: throw to monkey (\d+)/)!;
  const [, falseMonkeyIndexString] = monkeyInput.match(/If false: throw to monkey (\d+)/)!;

  return {
    items,
    operation: {
      operator,
      operand: operand ?? parseInt(operandString),
    },
    test: {
      divisibleBy: parseInt(divisibleByString),
      trueMonkeyIndex: parseInt(trueMonkeyIndexString),
      falseMonkeyIndex: parseInt(falseMonkeyIndexString),
    },
    numberOfInspections: 0,
  };
}
