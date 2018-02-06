const kthToLastNode = (k, headNode) => {
  let resultPointer = headNode;
  let endPointer = headNode;
  
  for (let i = 0; i < k; i += 1) {
    endPointer = endPointer.next;
  }

  while (endPointer) {
    resultPointer = resultPointer.next;
    endPointer = endPointer.next;
  }

  return resultPointer;

};

const sampleInput = { value: 1, next: { value: 2, next: { value: 3, next: { value: 4, next: null } } } }

console.log(kthToLastNode(2, sampleInput));

/*
Input 1 --> 2 --> 3 --> 4 && 2 
return 3

Strategy: use two pointers, start with, second pointer k points away from start. Continue until second pointer is null then return first pointer

let pointer1 = 1;
let pointer2 = 3;

1. pointer2 = 3 (!== null)
  pointer 1 = 2; pointer2 = 4

2. pointer2 = 4 (!== null)
  pointer 1 = 3; pointer 2 = null

3. pointer3 = null

return pointer1 = 3
*/
