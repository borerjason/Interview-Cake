const fibo = require('./index');

test('returns correct fib', () => {
  const expected = fibo(4);
  const actual = 3;

  expect(expected).toEqual(actual);
});

test('returns correct fib for 0', () => {
  const expected = fibo(0);
  const actual = 0;

  expect(expected).toEqual(actual);
});

test('returns correct fib for 1', () => {
  const expected = fibo(1);
  const actual = 1;

  expect(expected).toEqual(actual);
});

test('returns correct fib for 2', () => {
  const expected = fibo(2);
  const actual = 1;

  expect(expected).toEqual(actual);
});

test('returns correct fib for 6', () => {
  const expected = fibo(6);
  const actual = 8;

  expect(expected).toEqual(actual);
});
