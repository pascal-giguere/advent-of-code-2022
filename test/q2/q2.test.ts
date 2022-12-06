import * as fs from 'fs';
import * as path from 'path';
import { calculateEncryptedStrategyGuidePoints } from '../../src/q2';

const SIMPLE_INPUT = fs.readFileSync(path.join(__dirname, 'input-simple.txt'), 'utf-8');
const COMPLEX_INPUT = fs.readFileSync(path.join(__dirname, 'input-complex.txt'), 'utf-8');

describe('q2', () => {
  describe('Part 1', () => {
    it('calculates the total number of points when playing an encrypted strategy guide - simple input', () => {
      const points: number = calculateEncryptedStrategyGuidePoints(SIMPLE_INPUT);
      expect(points).toEqual(15);
    });

    it('calculates the total number of points when playing an encrypted strategy guide - complex input', () => {
      const points: number = calculateEncryptedStrategyGuidePoints(COMPLEX_INPUT);
      expect(points).toEqual(13009);
    });
  });

  // describe('Part 2', () => {});
});
