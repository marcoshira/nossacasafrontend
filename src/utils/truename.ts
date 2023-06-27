export function trueName(inputString: string): string {
  if (inputString.length <= 8) {
    return inputString;
  }

  return inputString.slice(0, -8);
}

export function firstName(inputString: string): string {
  const index = inputString.indexOf(' ');

  if (index === -1) {
    return inputString;
  }

  const firstPart = inputString.substring(0, index);

  return firstPart;
}
