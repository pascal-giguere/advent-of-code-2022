export function itemTypePriority(itemType: string): number {
  const charCode: number = itemType.charCodeAt(0);
  if (charCode > 96) {
    // lowercase letter
    return charCode - 96;
  } else {
    // uppercase letter
    return charCode - 38;
  }
}
