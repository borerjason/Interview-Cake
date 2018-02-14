const tripleStep = (n, memo = []) => {
  const steps = [1, 2, 3];
  let counts = 0;

  if (n === 0) return 1;
  if (n < 0) return 0;

  for (let step of steps) {
    if (step <= n) {
      memo[n - step] = memo[n - step] || tripleStep(n - step, memo)
      counts += memo[n - step];
    }
  }
  return counts;
}

console.log(tripleStep(4));
