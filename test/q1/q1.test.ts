import * as fs from 'fs';
import * as path from 'path';
import { elfWithMostCalories, caloriesOfElfWithMostCalories } from '../../src/q1';

const SIMPLE_INPUT = fs.readFileSync(path.join(__dirname, 'input-simple.txt'), 'utf-8');
const COMPLEX_INPUT = fs.readFileSync(path.join(__dirname, 'input-complex.txt'), 'utf-8');

describe('q1', () => {
  it('identifies the elf carrying the most calories', () => {
    const elfId: string = elfWithMostCalories(SIMPLE_INPUT);
    expect(elfId).toEqual('4');
  });

  it('finds the number of calories carried by the elf carrying the most calories', () => {
    const calories: number = caloriesOfElfWithMostCalories(COMPLEX_INPUT);
    expect(calories).toBe(69281);
  });
});
