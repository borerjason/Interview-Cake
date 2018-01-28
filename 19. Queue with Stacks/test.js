const Queue = require('./index');

let queue = new Queue();

test('Queue is a class ', () => {
  const actual = typeof queue;
  const expected = 'object';
  
  expect(actual).toEqual(expected);
});

queue.enqueue(5);

test('Queue can add elements via enqueue', () => {
  const actual = queue.size;
  const expected = 1;

  expect(actual).toEqual(expected);
});

test('Returns the first item in', () => {
  queue.enqueue(3);
  queue.enqueue(7);
  const actual = queue.dequeue();
  const expected = 5;
  
  expect(actual).toEqual(expected);
})



