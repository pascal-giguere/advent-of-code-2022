import { programSignalHistory, programXHistory } from './program';
import { ElvesCRTDisplay } from './crt';

/** @returns the sum of interesting signal strengths after running a CPU program
 *  @param inputContents - String representing the input file's contents */
export function programInterestingSignalSum(inputContents: string): number {
  const signalHistory: number[] = programSignalHistory(inputContents);
  if (signalHistory.length < 220) {
    throw Error('Program too short. Instructions must take at least 220 cycles to execute.');
  }
  return (
    signalHistory[19] +
    signalHistory[59] +
    signalHistory[99] +
    signalHistory[139] +
    signalHistory[179] +
    signalHistory[219]
  );
}

/** @returns the output of the CRT after running the program
 *  @param inputContents - String representing the input file's contents */
export function programCrtOutput(inputContents: string): string {
  const xHistory: number[] = programXHistory(inputContents);
  if (xHistory.length < 220) {
    throw Error('Program too short. Instructions must take at least 220 cycles to execute.');
  }
  const pixels: boolean[] = xHistory.map((x: number, cycle: number) => x === cycle);
  return new ElvesCRTDisplay(pixels).getOutput();
}
