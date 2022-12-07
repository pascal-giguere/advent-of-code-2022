import { CommandOutput, TerminalOutput } from './types';

export function parseTerminalOutput(inputContents: string): TerminalOutput {
  const commandOutputs: string[] = inputContents.split('$ ').filter((c: string) => !!c);
  return commandOutputs.map(parseCommandOutput);
}

function parseCommandOutput(commandOutput: string): CommandOutput {
  const lines: string[] = commandOutput.split('\n').filter((c: string) => !!c);
  const splitCommand: string[] = lines[0].split(' ');
  return {
    command: splitCommand[0],
    argument: splitCommand.length > 1 ? splitCommand[1] : undefined,
    output: lines.length > 1 ? lines.slice(1) : undefined,
  } as CommandOutput;
}
