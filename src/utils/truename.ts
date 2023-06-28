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

export function formatReadableDate(dateString: string): string {
  const date = new Date(dateString);
  const options = {
    year: 'numeric',
    month: '2-digit',
    day: 'numeric',
  } as Intl.DateTimeFormatOptions;

  return date.toLocaleDateString('pt-BR', options);
}
