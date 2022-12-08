type Input = { stacks: Stacks; instructions: Instructions };
type Stacks = string[][];
type Instructions = Instruction[];
type Instruction = { crateAmount: number; origin: number; destination: number };

/** @returns Parsed input file with no data transform applied
 *  @param inputContents - String representing the input file's contents */
export function parseInput(inputContents: string): Input {
  const splitInput: string[] = inputContents.split('\n\n');
  if (splitInput.length !== 2) {
    throw Error('Invalid input');
  }
  return {
    stacks: parseStacksInput(splitInput[0]),
    instructions: parseInstructionsInput(splitInput[1]),
  };
}

function parseStacksInput(stacksInput: string): Stacks {
  const numberOfStack: number = parseInt(stacksInput.match(/(\d+)(?!.*\d)/)![0]);
  const stacks: Stacks = [];
  const lines: string[] = stacksInput.split('\n').filter((l) => l.includes('['));

  for (let i = 0; i < numberOfStack; i++) {
    const stack: string[] = [];
    for (const line of lines) {
      const character: string | undefined = line[4 * i + 1];
      if (character && !!character.trim()) {
        stack.unshift(character);
      }
    }
    stacks.push(stack);
  }

  return stacks;
}

function parseInstructionsInput(instructionsInput: string): Instructions {
  const lines: string[] = instructionsInput.trim().split('\n');
  return lines.map((line: string) => {
    const [, crateAmount, origin, destination] = line.match(/^move (\d) from (\d) to (\d)$/)!;
    return {
      crateAmount: parseInt(crateAmount),
      origin: parseInt(origin),
      destination: parseInt(destination),
    };
  });
}
