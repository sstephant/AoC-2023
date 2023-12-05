response = await fetch('https://adventofcode.com/2023/day/1/input');
text = await response.text();
console.time('aoc1')
ZERO = '0'.charCodeAt(0);
lines = text.replaceAll(/[^0-9\n]+/mg, '').split('\n').filter(s => s.length > 0)
sum = lines.reduce((acc, s) => {
  first = 10 * (s.charCodeAt(0));
  last = s.charCodeAt(s.length - 1);
  return acc + first + last;
	}, 0) - (11 * ZERO * lines.length);
console.timeLog('aoc1', {sum})
console.timeEnd('aoc1')
