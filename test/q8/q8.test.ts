import * as fs from 'fs';
import * as path from 'path';
import { numberOfVisibleTrees, maxScenicScore } from '../../src/q8';

const SIMPLE_INPUT = fs.readFileSync(path.join(__dirname, 'input-simple.txt'), 'utf-8');
const COMPLEX_INPUT = fs.readFileSync(path.join(__dirname, 'input-complex.txt'), 'utf-8');

describe('q8', () => {
  describe('Part 1', () => {
    it('counts trees visible from outside the grid - simple input', () => {
      expect(numberOfVisibleTrees(SIMPLE_INPUT)).toEqual(21);
    });

    it('counts trees visible from outside the grid - complex input', () => {
      expect(numberOfVisibleTrees(COMPLEX_INPUT)).toEqual(1684);
    });
  });

  describe('Part 2', () => {
    it('finds the highest scenic score - simple input', () => {
      expect(maxScenicScore(SIMPLE_INPUT)).toEqual(8);
    });

    it('finds the highest scenic score - complex input', () => {
      expect(maxScenicScore(COMPLEX_INPUT)).toEqual(486540);
    });
  });
});
