const tempTracker = require('./index');

let tracker = new tempTracker();

test('temp tracker produces an object', () => {
  expect(typeof tracker).toBe('object');
});

test('tracker can insert temps', () => {
  tracker.insert(100);
  expect(Object.keys(tracker.counts).length).toBeGreaterThan(0);
});

test('getMax() returns largest temp', () => {
  tracker.insert(102)
  let largest = tracker.getMax();
  expect(largest).toEqual(102);
});

test('getMin() returns smallest temp', () => {
  let smallest = tracker.getMin();
  expect(smallest).toEqual(100);
});

test('getMode() returns Mode temp', () => {
  tracker.insert(102);
  let mode = tracker.getMode();
  expect(mode).toEqual(102);
});

test('getMean() returns mean temp', () => {
  tracker.insert(110);
  let mean = tracker.getMean();
  expect(mean).toEqual(103);
});

