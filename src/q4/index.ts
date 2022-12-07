type Assignment = { start: number; end: number };
type AssignmentsPair = [Assignment, Assignment];
type AssignmentsPairList = AssignmentsPair[];

/** @returns Parsed input file with no data transform applied */
export function parseInput(inputContents: string): AssignmentsPairList {
  const inputLines: string[] = inputContents.split('\n').filter((l) => !!l);
  return inputLines.map(parseInputLine);
}

/** @returns Parsed line from input file with no data transform applied */
function parseInputLine(line: string): AssignmentsPair {
  const splitLine = line.split(',');
  if (splitLine.length !== 2) {
    throw Error(`Invalid input line: '${line}'`);
  }
  return [parseAssignment(splitLine[0]), parseAssignment(splitLine[1])];
}

/** @returns Parsed line from input file with no data transform applied */
function parseAssignment(str: string): Assignment {
  const splitStr = str.split('-');
  if (splitStr.length !== 2) {
    throw Error(`Invalid assignment string: '${str}'`);
  }
  return {
    start: parseInt(splitStr[0]),
    end: parseInt(splitStr[1]),
  };
}
