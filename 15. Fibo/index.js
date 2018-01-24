const fibRecursive = (n, memo = {}) => {
 if (n === 0) return 0;
 if (n === 1) return 1;
 
 memo[n-1] = memo[n-1] || fib(n-1, memo);
 memo[n-2] = memo[n-2] || fib(n-2, memo);

 return memo[n-1] + memo[n-2];

}

const fibIterative = (n) => {
 
  if (n === 0 || n === 1) {
    return n;
  }

  let prevPrev = 0;
  let prev = 1;
  let curr;

  for (let i = 1; i < n; i += 1) {
    curr = prevPrev + prev;
    prevPrev = prev;
    prev = curr;
  }
  return curr;

}

module.exports = fibIterative;