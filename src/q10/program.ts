/** @returns historical signal strength for each CPU cycle */
export function programSignalHistory(inputContents: string): number[] {
  const program: CPUProgram = runProgram(inputContents);
  return program.signalHistory;
}

/** @returns historical X register value for each CPU cycle */
export function programXHistory(inputContents: string): number[] {
  const program: CPUProgram = runProgram(inputContents);
  return program.xHistory;
}

function runProgram(inputContents: string): CPUProgram {
  const instructions: string[] = inputContents.trim().split('\n');
  const program = new CPUProgram(instructions);
  program.run();
  return program;
}

export class CPUProgram {
  x: number = 1;
  cpuCycles: number = 0;
  instructions: string[];
  xHistory: number[] = [];
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
    this.xHistory.push(this.x);
    this.signalHistory.push(this.signalStrength());
  };
}
