import { Instruction, Instructions, Stacks } from './types';

export function applyInstructions(stacks: Stacks, instructions: Instructions): void {
  instructions.forEach((i: Instruction) => applyInstruction(stacks, i));
}

export function applyInstruction(stacks: Stacks, instruction: Instruction): void {
  for (let i = 0; i < instruction.crateAmount; i++) {
    const crate: string = stacks[instruction.origin - 1].pop()!;
    stacks[instruction.destination - 1].push(crate);
  }
}
