import * as fs from 'fs';
import * as path from 'path';
import { programInterestingSignalSum, programElvesCrtOutput } from '../../src/q10';

const SIMPLE_INPUT = fs.readFileSync(path.join(__dirname, 'input-simple.txt'), 'utf-8');
const COMPLEX_INPUT = fs.readFileSync(path.join(__dirname, 'input-complex.txt'), 'utf-8');

describe('q10', () => {
  describe('Part 1', () => {
    it('calculates the sum of interesting signal strengths after running a program - simple input', () => {
      expect(programInterestingSignalSum(SIMPLE_INPUT)).toEqual(13140);
    });

    it('calculates the sum of interesting signal strengths after running a program - complex input', () => {
      expect(programInterestingSignalSum(COMPLEX_INPUT)).toEqual(13220);
    });
  });

  describe('Part 2', () => {
    it("calculates the output of the elves' CRT after running the provided program - simple input", () => {
      expect(programElvesCrtOutput(SIMPLE_INPUT).trim()).toEqual(
        `
##..##..##..##..##..##..##..##..##..##..
###...###...###...###...###...###...###.
####....####....####....####....####....
#####.....#####.....#####.....#####.....
######......######......######......####
#######.......#######.......#######.....
`.trim()
      );
    });

    it("calculates the output of the elves' CRT after running the provided program - complex input", () => {
      // Outputs "RUAKHBEK" as ASCII art
      expect(programElvesCrtOutput(COMPLEX_INPUT).trim()).toEqual(
        `
###..#..#..##..#..#.#..#.###..####.#..#.
#..#.#..#.#..#.#.#..#..#.#..#.#....#.#..
#..#.#..#.#..#.##...####.###..###..##...
###..#..#.####.#.#..#..#.#..#.#....#.#..
#.#..#..#.#..#.#.#..#..#.#..#.#....#.#..
#..#..##..#..#.#..#.#..#.###..####.#..#.
`.trim()
      );
    });
  });
});
