
const reverseChars = (str) => {
  const chars = str.split('');
  let left = 0;
  let right = chars.length - 1;

  while (left < right) {
    const temp = chars[left];
    chars[left] = chars[right];
    chars[right] = temp; 

    left += 1;
    right -= 1;
  }

  return chars.join('');

};
const reverseWordsInString = (str) => {
  str = reverseChars(str);
  const words = str.split(' ');
  words.forEach((word, index) => {
    words[index] = reverseChars(word)
  });

  return words.join(' ');

};

console.log(reverseWordsInString('find you will pain only go you recordings security the into if'));
