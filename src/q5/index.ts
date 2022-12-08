import { Stacks } from './types';
import { parseInput } from './parsing';
import { applyInstructions } from './transforms';

/** @returns New Stacks object with "CrateMover 9000" crate movements applied
 *  @param inputContents - String representing the input file's contents */
export function moveCrates9000(inputContents: string): Stacks {
  const { stacks, instructions } = parseInput(inputContents);
  applyInstructions(stacks, instructions, false);
  return stacks;
}

/** @returns New Stacks object with "CrateMover 9001" crate movements applied
 *  @param inputContents - String representing the input file's contents */
export function moveCrates9001(inputContents: string): Stacks {
  const { stacks, instructions } = parseInput(inputContents);
  applyInstructions(stacks, instructions, true);
  return stacks;
}

/** @returns Message obtained by reading the crates on top of each stack */
export function getStacksMessage(stacks: Stacks): string {
  return stacks.reduce((message: string, stack: string[]) => message + stack[stack.length - 1], '');
}
