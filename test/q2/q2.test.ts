import * as fs from 'fs';
import * as path from 'path';
import { calculateEncryptedStrategyGuidePointsV1 } from '../../src/q2/v1';

const SIMPLE_INPUT = fs.readFileSync(path.join(__dirname, 'input-simple.txt'), 'utf-8');
const COMPLEX_INPUT = fs.readFileSync(path.join(__dirname, 'input-complex.txt'), 'utf-8');

describe('q2', () => {
  describe('Part 1', () => {
    it('calculates the total number of points when playing an encrypted strategy guide - simple input', () => {
      const points: number = calculateEncryptedStrategyGuidePointsV1(SIMPLE_INPUT);
      expect(points).toEqual(15);
    });

    it('calculates the total number of points when playing an encrypted strategy guide - complex input', () => {
      const points: number = calculateEncryptedStrategyGuidePointsV1(COMPLEX_INPUT);
      expect(points).toEqual(13009);
    });
  });

  // describe('Part 2', () => {});
});
