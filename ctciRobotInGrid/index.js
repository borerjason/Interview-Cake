const makeGrid = (row, col) => {
  const grid = [];
  while (row > 0) {
    grid.push(Array(col));
    row--;
  }
  return grid;
}


const getRobotPath = (row, col, path = []) => {
  const grid = makeGrid(row, col);
  const r = row - 1; // 1
  const c = col - 1; // 2

  if (row === 0 && col === 0) return;
  if (row < 0 || col < 0) {
    path.pop();
    return;
  }
  // go left
  path.push([r, c - 1]);
  console.log(path)
  getRobotPath(r, c - 1, path)
  // go up
  path.push([r - 1, c ]);
  getRobotPath(r - 1, c, path)
   
  return path;
}

console.log(getRobotPath(2, 3))