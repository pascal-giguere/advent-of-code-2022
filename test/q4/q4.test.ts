import * as fs from 'fs';
import * as path from 'path';
import { parseInput } from '../../src/q4';

const SIMPLE_INPUT = fs.readFileSync(path.join(__dirname, 'input-simple.txt'), 'utf-8');
const COMPLEX_INPUT = fs.readFileSync(path.join(__dirname, 'input-complex.txt'), 'utf-8');

describe('q4', () => {
  describe('Part 1', () => {
    const parsed = parseInput(SIMPLE_INPUT);
    expect(parsed).toEqual('');
  });

  // describe('Part 2', () => {});
});
