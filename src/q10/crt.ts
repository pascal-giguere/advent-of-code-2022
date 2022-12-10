/* A generic display with variable resolution */
class CRTDisplay {
  private readonly pixels: boolean[][];

  constructor(pixels: boolean[][]) {
    this.pixels = pixels;
  }

  getOutput = (): string => {
    let output: string = '';
    for (const row of this.pixels) {
      for (const value of row) {
        output += value ? '#' : '.';
      }
      output += '\n';
    }
    return output;
  };
}

/* The elves' particular display with a fixed 40x6 resolution */
export class ElvesCRTDisplay extends CRTDisplay {
  static RESOLUTION_X = 40;
  static RESOLUTION_Y = 6;
  constructor(pixels: boolean[]) {
    if (pixels.length !== ElvesCRTDisplay.RESOLUTION_X * ElvesCRTDisplay.RESOLUTION_Y) {
      throw Error('Incorrect pixel buffer length');
    }
    const pixels2D: boolean[][] = new Array(ElvesCRTDisplay.RESOLUTION_Y)
      .fill(new Array(ElvesCRTDisplay.RESOLUTION_X).fill(null))
      .reduce((pixels2D: boolean[][], row: boolean[], i: number) => {
        pixels2D[i] = pixels.slice(
          ElvesCRTDisplay.RESOLUTION_X * i,
          ElvesCRTDisplay.RESOLUTION_X * i + ElvesCRTDisplay.RESOLUTION_X
        );
        return pixels2D;
      }, []);

    super(pixels2D);
  }
}
