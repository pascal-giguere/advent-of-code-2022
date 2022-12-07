import {
  calculateOutcomePoints,
  calculateRoundShapePoints,
  decryptOpponentsShape,
  EncryptedRound,
  EncryptedStrategyGuide,
  Outcome,
  Shape,
} from './shared';

type RoundV2 = { opponentsShape: Shape; outcome: Outcome };
export type StrategyGuideV2 = RoundV2[];

/** @returns New strategy guide object with decrypted shape values using "V2" decryption */
export function decryptStrategyGuideV2(encryptedGuide: EncryptedStrategyGuide): StrategyGuideV2 {
  return encryptedGuide.map((round: EncryptedRound) => ({
    opponentsShape: decryptOpponentsShape(round[0]),
    outcome: decryptOutcome(round[1]),
  }));
}

/** @returns Decrypted shape value */
function decryptOutcome(encryptedOutcome: string): Outcome {
  switch (encryptedOutcome) {
    case 'X':
      return Outcome.Loss;
    case 'Y':
      return Outcome.Draw;
    case 'Z':
      return Outcome.Win;
    default:
      throw Error(`Invalid encrypted outcome: '${encryptedOutcome}'`);
  }
}

/** @returns Number of points generated by playing an entire strategy guide using "V2" decryption */
export function calculateStrategyGuidePointsV2(guide: StrategyGuideV2): number {
  return guide.reduce((points: number, round: RoundV2) => points + calculateRoundPointsV2(round), 0);
}

/** @returns Number of points generated by playing a single round using "V2" decryption */
function calculateRoundPointsV2(round: RoundV2): number {
  const responseShape: Shape = responseShapeForOutcome(round.opponentsShape, round.outcome);
  return calculateOutcomePoints(round.outcome) + calculateRoundShapePoints(responseShape);
}

/** @returns The shape to respond with in order to get the provided outcome */
function responseShapeForOutcome(opponentsShape: Shape, outcome: Outcome): Shape {
  switch (outcome) {
    case Outcome.Draw:
      return opponentsShape;
    case Outcome.Win:
      switch (opponentsShape) {
        case Shape.Rock:
          return Shape.Paper;
        case Shape.Paper:
          return Shape.Scissors;
        case Shape.Scissors:
          return Shape.Rock;
      }
    case Outcome.Loss:
      switch (opponentsShape) {
        case Shape.Rock:
          return Shape.Scissors;
        case Shape.Paper:
          return Shape.Rock;
        case Shape.Scissors:
          return Shape.Paper;
      }
  }
}
