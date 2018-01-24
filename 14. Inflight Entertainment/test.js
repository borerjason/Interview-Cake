const flight = require('./index');

test('return true if two movies equal flight length', () => {
  const expected = flight(10, [2,8,1,7]);
  const actual = true;

  expect(expected).toEqual(actual);
});

test('return false if two moveis do not equal flight lenght', () => {
  const expected = flight(10, [1, 2, 3, 4]);
  const actual = false;

  expect(expected).toEqual(actual);
});

test('user cannon watch same movie', () => {
  const expected = flight (4, [2]);
  const actual = false;

  expect(expected).toEqual(actual);
})
