import * as fs from 'fs';
import * as path from 'path';
import { calculateEncryptedStrategyGuidePointsV1, calculateEncryptedStrategyGuidePointsV2 } from '../../src/q2';

const SIMPLE_INPUT = fs.readFileSync(path.join(__dirname, 'input-simple.txt'), 'utf-8');
const COMPLEX_INPUT = fs.readFileSync(path.join(__dirname, 'input-complex.txt'), 'utf-8');

describe('q2', () => {
  describe('Part 1', () => {
    it('calculates the total number of points when playing a strategy guide - v1 decryption - simple input', () => {
      const points: number = calculateEncryptedStrategyGuidePointsV1(SIMPLE_INPUT);
      expect(points).toEqual(15);
    });

    it('calculates the total number of points when playing a strategy guide - v1 decryption - complex input', () => {
      const points: number = calculateEncryptedStrategyGuidePointsV1(COMPLEX_INPUT);
      expect(points).toEqual(13009);
    });
  });

  describe('Part 2', () => {
    it('calculates the total number of points when playing a strategy guide - v2 decryption - simple input', () => {
      const points: number = calculateEncryptedStrategyGuidePointsV2(SIMPLE_INPUT);
      expect(points).toEqual(12);
    });

    it('calculates the total number of points when playing a strategy guide - v2 decryption - complex input', () => {
      const points: number = calculateEncryptedStrategyGuidePointsV2(COMPLEX_INPUT);
      expect(points).toEqual(10398);
    });
  });
});
