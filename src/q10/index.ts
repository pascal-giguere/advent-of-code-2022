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

/** @returns historical signal strength for each CPU cycle */
function programSignalHistory(inputContents: string): number[] {
  const instructions: string[] = inputContents.trim().split('\n');
  const program = new CPUProgram(instructions);
  program.run();
  return program.signalHistory;
}

class CPUProgram {
  x: number = 1;
  cpuCycles: number = 0;
  instructions: string[];
  signalHistory: number[] = [];

  constructor(instructions: string[]) {
    this.instructions = instructions;
  }

  run = (): void => {
    this.instructions.forEach(this.executeInstruction);
  };

  signalStrength = (): number => {
    return this.cpuCycles * this.x;
  };

  private executeInstruction = (instruction: string): void => {
    const [command, arg] = instruction.split(' ');
    switch (command) {
      case 'addx':
        this.tick();
        this.tick();
        this.x += parseInt(arg);
        break;
      case 'noop':
        this.tick();
        break;
      default:
        throw Error(`Unsupported command: '${command}'`);
    }
  };

  private tick = (): void => {
    this.cpuCycles++;
    this.signalHistory.push(this.signalStrength());
  };
}
