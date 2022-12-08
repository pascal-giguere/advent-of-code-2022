import * as fs from 'fs';
import * as path from 'path';
import { getStacksMessage, moveCrates } from '../../src/q5';
import { Stacks } from '../../src/q5/types';

const SIMPLE_INPUT = fs.readFileSync(path.join(__dirname, 'input-simple.txt'), 'utf-8');
const COMPLEX_INPUT = fs.readFileSync(path.join(__dirname, 'input-complex.txt'), 'utf-8');

describe('q7', () => {
  describe('Part 1', () => {
    it('parses - simple input', () => {
      const stacks: Stacks = moveCrates(SIMPLE_INPUT);
      expect(getStacksMessage(stacks)).toEqual('CMZ');
    });

    it('parses - complex input', () => {
      const stacks: Stacks = moveCrates(COMPLEX_INPUT);
      expect(getStacksMessage(stacks)).toEqual('CFFHVVHNC');
    });
  });

  describe('Part 2', () => {});
});
