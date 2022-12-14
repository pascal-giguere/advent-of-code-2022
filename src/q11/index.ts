import { Monkey } from './parsing';
import { playKeepAway } from './keepaway';

/** @returns The level of monkey business after n rounds of Keep Away
 *  @param inputContents - String representing the input file's contents
 *  @param numberOfRounds - Number of rounds of Keep Away to be played by monkeys */
export function getMonkeyBusinessLevel(inputContents: string, numberOfRounds: number): number {
  const monkeys: Monkey[] = playKeepAway(inputContents, numberOfRounds);
  const mostActiveMonkeys: Monkey[] = monkeys.sort((a, b) => b.numberOfInspections - a.numberOfInspections);
  return mostActiveMonkeys[0].numberOfInspections * mostActiveMonkeys[1].numberOfInspections;
}
