const calculator = require('../../lib/services/taskCalculator');

test('Can calculate addition problems', () => {
  const operation = 'addition';
  const left = -1;
  const right = 10;
  const result = 9;
  expect(calculator[operation](left, right)).toBe(result);
});
test('Can calculate subtraction problems', () => {
  const operation = 'subtraction';
  const left = 200.2;
  const right = 19.6;
  const result = 180.6;
  expect(calculator[operation](left, right)).toBe(result);
});

test('Can calculate multiplication problems', () => {
  const operation = 'multiplication';
  const left = 5;
  const right =7;
  const result = 35;
  expect(calculator[operation](left, right)).toBe(result);
});
test('Can calculate division problems', () => {
  const operation = 'division';
  const left = 45;
  const right = 9;
  const result = 5;
  expect(calculator[operation](left, right)).toBe(result);
});
test('Can calculate remainder problems', () => {
  const operation = 'remainder';
  const left = 20;
  const right = 4;
  const result = 0;
  expect(calculator[operation](left, right)).toBe(result);
});
