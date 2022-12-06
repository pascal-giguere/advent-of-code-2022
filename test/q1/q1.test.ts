import * as fs from 'fs';
import * as path from 'path';
import { elfWithMostCalories, caloriesOfElfWithMostCalories, caloriesOfElvesWithMostCalories } from '../../src/q1';

const SIMPLE_INPUT = fs.readFileSync(path.join(__dirname, 'input-simple.txt'), 'utf-8');
const COMPLEX_INPUT = fs.readFileSync(path.join(__dirname, 'input-complex.txt'), 'utf-8');

describe('q1', () => {
  describe('Part 1', () => {
    it('identifies the elf carrying the most calories - simple input', () => {
      const elfId: string = elfWithMostCalories(SIMPLE_INPUT);
      expect(elfId).toEqual('4');
    });

    it('finds the number of calories carried by the elf carrying the most calories - complex input', () => {
      const calories: number = caloriesOfElfWithMostCalories(COMPLEX_INPUT);
      expect(calories).toBe(69281);
    });
  });

  describe('Part 2', () => {
    it('finds the number of calories carried by the 3 elves carrying the most calories - simple input', () => {
      const calories: number = caloriesOfElvesWithMostCalories(SIMPLE_INPUT, 3);
      expect(calories).toBe(45000);
    });

    it('finds the number of calories carried by the 3 elves carrying the most calories - complex input', () => {
      const calories: number = caloriesOfElvesWithMostCalories(COMPLEX_INPUT, 3);
      expect(calories).toBe(201524);
    });
  });
});
