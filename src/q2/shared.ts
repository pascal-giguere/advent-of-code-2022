export type EncryptedRound = [string, string];
export type EncryptedStrategyGuide = EncryptedRound[];

export enum Shape {
  Rock = 'rock',
  Paper = 'paper',
  Scissors = 'scissors',
}

export enum Outcome {
  Win = 'win',
  Loss = 'loss',
  Draw = 'draw',
}

/** @returns Parsed input file with no data transform applied */
export function parseInput(inputContents: string): EncryptedStrategyGuide {
  const inputLines: string[] = inputContents.split('\n').filter((l) => !!l);
  return inputLines.map(parseInputLine);
}

/** @returns Parsed line from input file with no data transform applied */
function parseInputLine(line: string): EncryptedRound {
  const splitLine = line.split(' ');
  if (splitLine.length !== 2) {
    throw Error(`Invalid input line: '${line}'`);
  }
  return splitLine as [string, string];
}

/** @returns Decrypted shape value */
export function decryptOpponentsShape(encryptedShape: string): Shape {
  switch (encryptedShape) {
    case 'A':
      return Shape.Rock;
    case 'B':
      return Shape.Paper;
    case 'C':
      return Shape.Scissors;
    default:
      throw Error(`Invalid encrypted opponent's shape: '${encryptedShape}'`);
  }
}

/** @returns Number of points generated for the "outcome" portion of a round */
export function calculateOutcomePoints(outcome: Outcome): number {
  switch (outcome) {
    case Outcome.Win:
      return 6;
    case Outcome.Loss:
      return 0;
    case Outcome.Draw:
      return 3;
  }
}

/** @returns Number of points generated for the "shape" portion of a round */
export function calculateRoundShapePoints(shape: Shape): number {
  switch (shape) {
    case Shape.Rock:
      return 1;
    case Shape.Paper:
      return 2;
    case Shape.Scissors:
      return 3;
  }
}
