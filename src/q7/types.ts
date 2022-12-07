export type TerminalOutput = CommandOutput[];
export type CommandOutput = CdCommandOutput | LsCommandOutput;
export type CdCommandOutput = { command: 'cd'; argument: string; output: undefined };
export type LsCommandOutput = { command: 'ls'; argument: undefined; output: string[] };

export const isCd = (cmd: CommandOutput): cmd is CdCommandOutput => cmd.command === 'cd';
export const isLs = (cmd: CommandOutput): cmd is LsCommandOutput => cmd.command === 'ls';
