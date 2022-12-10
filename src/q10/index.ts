import { programSignalHistory, programDisplayOutput } from './program';
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

/** @returns the output of the elves' CRT after running the provided program
 *  @param inputContents - String representing the input file's contents */
export function programElvesCrtOutput(inputContents: string): string {
  const pixels: boolean[] = programDisplayOutput(inputContents, ElvesCRTDisplay.RESOLUTION_X);
  return new ElvesCRTDisplay(pixels).getOutput();
}
