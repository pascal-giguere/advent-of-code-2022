import { Instruction, Instructions, Stacks } from './types';

export function applyInstructions(stacks: Stacks, instructions: Instructions, multiCrate: boolean): void {
  instructions.forEach((i: Instruction) => applyInstruction(stacks, i, multiCrate));
}

export function applyInstruction(stacks: Stacks, instruction: Instruction, multiCrate: boolean): void {
  if (multiCrate) {
    const stack: string[] = stacks[instruction.origin - 1];
    const movedCrates: string[] = stack.splice(stack.length - instruction.crateAmount, instruction.crateAmount);
    stacks[instruction.destination - 1].push(...movedCrates);
  } else {
    for (let i = 0; i < instruction.crateAmount; i++) {
      const crate: string = stacks[instruction.origin - 1].pop()!;
      stacks[instruction.destination - 1].push(crate);
    }
  }
}
