import * as fs from 'fs';
import * as path from 'path';
import { parseInput } from '../../src/q9';

const SIMPLE_INPUT = fs.readFileSync(path.join(__dirname, 'input-simple.txt'), 'utf-8');
const COMPLEX_INPUT = fs.readFileSync(path.join(__dirname, 'input-complex.txt'), 'utf-8');

describe('q8', () => {
  describe('Part 1', () => {
    it('parses - simple input', () => {
      expect(parseInput(SIMPLE_INPUT)).toEqual(21);
    });

    it('parses - complex input', () => {
      expect(parseInput(COMPLEX_INPUT)).toEqual(21);
    });
  });

  describe('Part 2', () => {});
});
