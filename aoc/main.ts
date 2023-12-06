/** @format */

import { sumCalibrationValues, ngSumCalibrationValues } from './01/01';

// const response = await fetch('https://adventofcode.com/2023/day/1/input');
// const text = await response.text();
const DATA_01 = Bun.file(import.meta.dir + '/01/01.data');
const text = await DATA_01.text();
console.time('aoc1-1');
let sum = sumCalibrationValues(text);
console.timeLog('aoc1-1', { sum });
console.timeEnd('aoc1-1');
console.time('aoc1-2');
sum = ngSumCalibrationValues(text);
console.timeLog('aoc1-2', { sum });
console.timeEnd('aoc1-2');
