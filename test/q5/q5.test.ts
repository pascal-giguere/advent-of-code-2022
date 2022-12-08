import * as fs from 'fs';
import * as path from 'path';
import { getStacksMessage, moveCrates9000, moveCrates9001 } from '../../src/q5';
import { Stacks } from '../../src/q5/types';

const SIMPLE_INPUT = fs.readFileSync(path.join(__dirname, 'input-simple.txt'), 'utf-8');
const COMPLEX_INPUT = fs.readFileSync(path.join(__dirname, 'input-complex.txt'), 'utf-8');

describe('q7', () => {
  describe('Part 1', () => {
    it('moves crates according to the "CrateMover 9000" movement - simple input', () => {
      const stacks: Stacks = moveCrates9000(SIMPLE_INPUT);
      expect(getStacksMessage(stacks)).toEqual('CMZ');
    });

    it('moves crates according to the "CrateMover 9000" movement - complex input', () => {
      const stacks: Stacks = moveCrates9000(COMPLEX_INPUT);
      expect(getStacksMessage(stacks)).toEqual('CFFHVVHNC');
    });
  });

  describe('Part 2', () => {
    it('moves crates according to the "CrateMover 9001" movement - simple input', () => {
      const stacks: Stacks = moveCrates9001(SIMPLE_INPUT);
      expect(getStacksMessage(stacks)).toEqual('MCD');
    });

    it('moves crates according to the "CrateMover 9001" movement - complex input', () => {
      const stacks: Stacks = moveCrates9001(COMPLEX_INPUT);
      expect(getStacksMessage(stacks)).toEqual('FSZWBPTBG');
    });
  });
});
