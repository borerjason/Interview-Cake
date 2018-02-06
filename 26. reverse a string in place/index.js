const reverseString = (str) => {
  const chars = str.split('');
  const mid = Math.floor(chars.length / 2);
  let rightSwap = chars.length - 1;

  for (let i = 0; i < mid; i += 1) {
    const temp = chars[i];
    chars[i] = chars[rightSwap];
    chars[rightSwap] = temp;
    rightSwap -= 1;
  }

  return chars.join('');

};

console.log(reverseString('jason'));

/*
split string in to chars of array, reverse, then join
*/