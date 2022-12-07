/** @returns The number of characters to process before finding a marker */
export function findMarkerCharacterPosition(str: string): number {
  for (let i = 0; i < str.length - 4; i++) {
    const substring: string = str.substring(i, i + 4);
    if (isUniqueCharacterString(substring)) {
      return i + 4;
    }
  }
  return -1;
}

/** @returns Whether the provided string only comprises unique characters */
export function isUniqueCharacterString(str: string): boolean {
  const characterSet = new Set(str);
  return characterSet.size === str.length;
}
