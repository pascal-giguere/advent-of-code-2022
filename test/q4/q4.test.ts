import * as fs from 'fs';
import * as path from 'path';
import { countFullyOverlappingPairs, countOverlappingPairs } from '../../src/q4';

const SIMPLE_INPUT = fs.readFileSync(path.join(__dirname, 'input-simple.txt'), 'utf-8');
const COMPLEX_INPUT = fs.readFileSync(path.join(__dirname, 'input-complex.txt'), 'utf-8');

describe('q4', () => {
  describe('Part 1', () => {
    it('finds the number of assignment pairs that fully overlap with each other - simple input', () => {
      const overlappingPairCount: number = countFullyOverlappingPairs(SIMPLE_INPUT);
      expect(overlappingPairCount).toEqual(2);
    });

    it('finds the number of assignment pairs that fully overlap with each other - complex input', () => {
      const overlappingPairCount: number = countFullyOverlappingPairs(COMPLEX_INPUT);
      expect(overlappingPairCount).toEqual(496);
    });
  });

  describe('Part 2', () => {
    it('finds the number of assignment pairs that partially or fully overlap with each other - simple input', () => {
      const overlappingPairCount: number = countOverlappingPairs(SIMPLE_INPUT);
      expect(overlappingPairCount).toEqual(2);
    });

    it('finds the number of assignment pairs that partially or fully overlap with each other - complex input', () => {
      const overlappingPairCount: number = countOverlappingPairs(COMPLEX_INPUT);
      expect(overlappingPairCount).toEqual(496);
    });
  });
});
