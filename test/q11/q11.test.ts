import * as fs from 'fs';
import * as path from 'path';
import { getMonkeyBusinessLevel } from '../../src/q11';

const SIMPLE_INPUT = fs.readFileSync(path.join(__dirname, 'input-simple.txt'), 'utf-8');
const COMPLEX_INPUT = fs.readFileSync(path.join(__dirname, 'input-complex.txt'), 'utf-8');

describe('q11', () => {
  describe('Part 1', () => {
    it('finds the level of monkey business after 20 rounds of Keep Away - simple input', () => {
      expect(getMonkeyBusinessLevel(SIMPLE_INPUT, 20)).toEqual(10605);
    });

    it('finds the level of monkey business after 20 rounds of Keep Away - complex input', () => {
      expect(getMonkeyBusinessLevel(COMPLEX_INPUT, 20)).toEqual(119715);
    });
  });

  // describe('Part 2', () => {});
});
