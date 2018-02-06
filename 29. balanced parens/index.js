const balancedParens = (str) => {
  const stack = [];
  const brackets = {
    '(': ')',
    '[': ']',
    '{': '}'
  };
  
  for (let char of str) {
    if (char === '(' || char === '[' || char === '{') {
      stack.push(char);
    }
    if (char === ')' || char === ']' || char === '}') {
      let opener = stack.pop();
      if (brackets[opener] !== char) return false;
    }
  }
  return stack.length === 0;
};

console.log(balancedParens("{ [ ] ( ) }" ));

/*
Strategy: loop through str, if come across an opener add it to the stack, if come across a closer, make sure it corresponds to the right opener

Implementation:

string = ([]);
stack = [];

1. Opening bracket, push to stack;  stack = ['('];
2. Opening bracket, push to stack; stack = ['(', '[']
3. closing bracket, pop off stack '[', confirm closing bracket is value for popped off element 
4. closing bracket, pop off stack '(', confirm closing bracket is value for popped off element 
5. return true

*/
