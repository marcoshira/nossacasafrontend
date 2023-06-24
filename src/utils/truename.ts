export function trueName(inputString: string): string {
    if (inputString.length <= 8) {
      return inputString;
    }
    
    return inputString.slice(0, -8);
  }