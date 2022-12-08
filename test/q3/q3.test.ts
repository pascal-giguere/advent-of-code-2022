import * as fs from 'fs';
import * as path from 'path';
import { commonItemTypesPriority } from '../../src/q3';

const SIMPLE_INPUT = fs.readFileSync(path.join(__dirname, 'input-simple.txt'), 'utf-8');
const COMPLEX_INPUT = fs.readFileSync(path.join(__dirname, 'input-complex.txt'), 'utf-8');

describe('q3', () => {
  describe('Part 1', () => {
    it('calculates the total number of points when playing a strategy guide - v1 decryption - simple input', () => {
      expect(commonItemTypesPriority(SIMPLE_INPUT)).toEqual(157);
    });

    it('calculates the total number of points when playing a strategy guide - v1 decryption - complex input', () => {
      expect(commonItemTypesPriority(COMPLEX_INPUT)).toEqual(7990);
    });
  });

  // describe('Part 2', () => {});
});
