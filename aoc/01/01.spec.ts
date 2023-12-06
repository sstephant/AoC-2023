/** @format */

import { expect, describe, it } from 'bun:test';
import { sumCalibrationValues, ngSumCalibrationValues } from './01';

describe('AoC 2023 - Day 1', () => {
  describe('part 1', () => {
    const data = `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`;
    const sum = 142;
    describe('sumCalibrationValues()', () => {
      it('should return the correct sum for the calibration values', () => {
        expect(sumCalibrationValues(data)).toBe(sum);
      });
    });
  });

  describe('part 2', () => {
    const data = `two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
oneighthreeight
7pqrstsixteen`;
    const sum = 299;
    describe('ngSumCalibrationValues()', () => {
      it('should return the correct sum for the calibration values', () => {
        expect(ngSumCalibrationValues(data)).toBe(sum);
      });
    });
  });
});
