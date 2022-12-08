export type Input = { stacks: Stacks; instructions: Instructions };
export type Stacks = string[][];
export type Instructions = Instruction[];
export type Instruction = { crateAmount: number; origin: number; destination: number };
