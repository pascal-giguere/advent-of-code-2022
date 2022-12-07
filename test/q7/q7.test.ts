import * as fs from 'fs';
import * as path from 'path';
import { getNodeSize, getSizeOfSmallerDirectories, getSizeOfSmallestDirectoryToDelete } from '../../src/q7';

const SIMPLE_INPUT = fs.readFileSync(path.join(__dirname, 'input-simple.txt'), 'utf-8');
const COMPLEX_INPUT = fs.readFileSync(path.join(__dirname, 'input-complex.txt'), 'utf-8');

describe('q7', () => {
  describe('Part 1', () => {
    it('finds the size of specific directories - simple input', () => {
      expect(getNodeSize(SIMPLE_INPUT, 'e')).toEqual(584);
      expect(getNodeSize(SIMPLE_INPUT, 'a')).toEqual(94853);
      expect(getNodeSize(SIMPLE_INPUT, 'd')).toEqual(24933642);
      expect(getNodeSize(SIMPLE_INPUT, '/')).toEqual(48381165);
    });

    it('finds cumulative size of all directories smaller than 100k - simple input', () => {
      expect(getSizeOfSmallerDirectories(SIMPLE_INPUT, 100_000)).toEqual(95437);
    });

    it('finds cumulative size of all directories smaller than 100k - complex input', () => {
      expect(getSizeOfSmallerDirectories(COMPLEX_INPUT, 100_000)).toEqual(1325919);
    });
  });

  describe('Part 2', () => {
    it('finds the size of the smallest directory to delete to have requested free space - simple input', () => {
      expect(getSizeOfSmallestDirectoryToDelete(SIMPLE_INPUT, 70_000_000, 30_000_000)).toEqual(24933642);
    });

    it('finds the size of the smallest directory to delete to have requested free space - complex input', () => {
      expect(getSizeOfSmallestDirectoryToDelete(COMPLEX_INPUT, 70_000_000, 30_000_000)).toEqual(2050735);
    });
  });
});
