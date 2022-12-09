import * as fs from 'fs';
import * as path from 'path';
import { commonItemTypesPriority } from '../../src/q3/part1';
import { badgeItemTypesPriority } from '../../src/q3/part2';

const SIMPLE_INPUT = fs.readFileSync(path.join(__dirname, 'input-simple.txt'), 'utf-8');
const COMPLEX_INPUT = fs.readFileSync(path.join(__dirname, 'input-complex.txt'), 'utf-8');

describe('q3', () => {
  describe('Part 1', () => {
    it('finds the sum of the priority of each item type found in both rucksack compartments - simple input', () => {
      expect(commonItemTypesPriority(SIMPLE_INPUT)).toEqual(157);
    });

    it('finds the sum of the priority of each item type found in both rucksack compartments - complex input', () => {
      expect(commonItemTypesPriority(COMPLEX_INPUT)).toEqual(7990);
    });
  });

  describe('Part 2', () => {
    it('finds the sum of the priority of each item type found to be a badge - simple input', () => {
      expect(badgeItemTypesPriority(SIMPLE_INPUT)).toEqual(70);
    });

    it('finds the sum of the priority of each item type found to be a badge - complex input', () => {
      expect(badgeItemTypesPriority(COMPLEX_INPUT)).toEqual(2602);
    });
  });
});
