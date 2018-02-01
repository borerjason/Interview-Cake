
const drone = (ids) => {
  let tracker = 0;

  for (let id of ids) {
    tracker = tracker ^ id;
  }
  return tracker;
}

console.log(drone([1,2,1,3,4,3,4]));