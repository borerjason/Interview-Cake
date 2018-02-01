const hasCycle = require('./index');

test('Detects cycle', () => {
  let cycle = { val: 4, next: { val: 3, next: null}};
  let LL = {val: 1, next: {val:2, next: cycle }};
  cycle.next.next = cycle;
  
  expect(hasCycle(LL)).toBeTruthy();
});
