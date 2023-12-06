/** @format */


// Day 1

const ZERO = '0'.charCodeAt(0);

// Part 1
export const sumCalibrationValues = (data: string): number => {
  const lines = data
    .replaceAll(/[^0-9\n]+/gm, '')
    .split('\n')
    .filter((s) => s.length > 0);
  return (
    lines.reduce((acc, s) => {
      const first = 10 * s.charCodeAt(0);
      const last = s.charCodeAt(s.length - 1);
      return acc + first + last;
    }, 0) -
    11 * ZERO * lines.length
  );
};

// Part 2
function* range(min: number, max: number, step: number = 1) {
  for (let value = min; value <= max; value += step) {
    yield value;
  }
}
function reverse(s: string): string {
  return s.split('').reverse().join('');
}

const DIGITS = [...range(1, 9)];
const DIGITS_AS_STRINGS = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const DIGITS_AS_REVERSED_STRINGS = DIGITS_AS_STRINGS.map(reverse);
const DIGIT_TO_NUMBER = DIGITS.reduce((acc, digit) => ({ ...acc, [`${digit}`]: digit }), {});
const STRING_TO_NUMBER: Record<string, number> = {
  ...DIGIT_TO_NUMBER,
  ...DIGITS.reduce((acc, digit) => ({ ...acc, [DIGITS_AS_STRINGS[digit - 1]]: digit }), {}),
};
const REVERSED_STRING_TO_NUMBER: Record<string, number> = {
  ...DIGIT_TO_NUMBER,
  ...DIGITS.reduce((acc, digit) => ({ ...acc, [DIGITS_AS_REVERSED_STRINGS[digit - 1]]: digit }), {}),
};

const numberRegEx = new RegExp(`(${DIGITS_AS_STRINGS.join('|')}|\\d)`);
const reverseNumberRegEx = new RegExp(`(${DIGITS_AS_REVERSED_STRINGS.join('|')}|\\d)`);

export const ngSumCalibrationValues = (data: string): number => {
  return data.split('\n').reduce((acc, line) => {
    const firstMatch = line.match(numberRegEx);
    if (firstMatch === null) {
      return acc;
    }
    const lastMatch = reverse(line).match(reverseNumberRegEx);
    const first = STRING_TO_NUMBER[firstMatch[0]];
    const last = lastMatch === null ? first : REVERSED_STRING_TO_NUMBER[lastMatch[0]];
    return acc + last + 10 * first;
  }, 0);
};
