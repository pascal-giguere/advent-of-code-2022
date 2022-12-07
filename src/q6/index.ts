/** @returns The number of characters to process before finding a marker */
export function findMarkerCharacterPosition(str: string): number {
  return findUniqueCharacterSequencePosition(str, 4);
}

/** @returns The number of characters to process before finding a message */
export function findMessageCharacterPosition(str: string): number {
  return findUniqueCharacterSequencePosition(str, 14);
}

/** @returns The number of characters to process before finding a sequence of n unique characters */
function findUniqueCharacterSequencePosition(str: string, sequenceLength: number): number {
  for (let i = 0; i < str.length - sequenceLength; i++) {
    const substring: string = str.substring(i, i + sequenceLength);
    if (isUniqueCharacterString(substring)) {
      return i + sequenceLength;
    }
  }
  return -1;
}

/** @returns Whether the provided string only comprises unique characters */
export function isUniqueCharacterString(str: string): boolean {
  const characterSet = new Set(str);
  return characterSet.size === str.length;
}
