import * as fs from 'fs';
import * as path from 'path';
import { findMarkerCharacterPosition, findMessageCharacterPosition } from '../../src/q6';

const SIMPLE_INPUT_1 = fs.readFileSync(path.join(__dirname, 'input-simple1.txt'), 'utf-8');
const SIMPLE_INPUT_2 = fs.readFileSync(path.join(__dirname, 'input-simple2.txt'), 'utf-8');
const SIMPLE_INPUT_3 = fs.readFileSync(path.join(__dirname, 'input-simple3.txt'), 'utf-8');
const SIMPLE_INPUT_4 = fs.readFileSync(path.join(__dirname, 'input-simple4.txt'), 'utf-8');
const SIMPLE_INPUT_5 = fs.readFileSync(path.join(__dirname, 'input-simple5.txt'), 'utf-8');
const COMPLEX_INPUT = fs.readFileSync(path.join(__dirname, 'input-complex.txt'), 'utf-8');

describe('q6', () => {
  describe('Part 1', () => {
    it('finds the marker character position - simple inputs', () => {
      expect(findMarkerCharacterPosition(SIMPLE_INPUT_1)).toEqual(7);
      expect(findMarkerCharacterPosition(SIMPLE_INPUT_2)).toEqual(5);
      expect(findMarkerCharacterPosition(SIMPLE_INPUT_3)).toEqual(6);
      expect(findMarkerCharacterPosition(SIMPLE_INPUT_4)).toEqual(10);
      expect(findMarkerCharacterPosition(SIMPLE_INPUT_5)).toEqual(11);
    });

    it('finds the marker character position - complex input', () => {
      expect(findMarkerCharacterPosition(COMPLEX_INPUT)).toEqual(1804);
    });
  });

  describe('Part 2', () => {
    it('finds the message character position - simple inputs', () => {
      expect(findMessageCharacterPosition(SIMPLE_INPUT_1)).toEqual(19);
      expect(findMessageCharacterPosition(SIMPLE_INPUT_2)).toEqual(23);
      expect(findMessageCharacterPosition(SIMPLE_INPUT_3)).toEqual(23);
      expect(findMessageCharacterPosition(SIMPLE_INPUT_4)).toEqual(29);
      expect(findMessageCharacterPosition(SIMPLE_INPUT_5)).toEqual(26);
    });

    it('finds the message character position - complex input', () => {
      expect(findMessageCharacterPosition(COMPLEX_INPUT)).toEqual(2508);
    });
  });
});
