function Node(value) {
  this.value = value;
  this.next = null;
}

const reverseLinkedList = (linkedlist) => {
  if (linkedlist.next === null) {
    return linkedlist;
  }

  let headsNext = null;
  let currHead = linkedlist; 
  let nextHead = linkedlist;

  while (nextHead) {
    nextHead = nextHead.next;
    currHead.next = headsNext;
    headsNext = currHead;
    currHead = nextHead;
  }
  return headsNext;
  
};

// Parkers Solution
const reverseLinkedList2 = (linkedlist) => {
  let currentNode = linkedlist;
  let prevNode = null;
  let nextNode = null;

  while (currentNode) {
    nextNode = currentNode.next;
    currentNode.next = prevNode;
    prevNode = currentNode;
    currentNode = nextNode;
  }

  return prevNode;
};


const sampleInput = { value: 1, next: { value: 2, next: { value: 3, next: { value: 4, next: null } } } };
console.log(reverseLinkedList(sampleInput));

/*
Input: LL head node
Function: Reverses linked list
Output: new head of reversed linked list

sampleInput: {value: 1, next: {value: 2, next: {value: 3, next: null}}};
sampleOutput: {value: 3, next: {value: 2, next: {value: 1, next: null}}};

Strategy: pop off head, keep track of new head's next value, add new head's next to old head, repeat

Inplementation:
sampleInput: {value: 1, next: {value: 2, next: {value: 3, next: null}}};

1. 
  a. target = {value: 1, next: {value: 2, next: {value: 3, next: null}}}
  b. Next = {value: 2, next: {value: 3, next: null}};
  c. Next.Next = {value: 3, next: {value: 4, next: null}};
  d. target.next = null; {value: 1, next: null}
  e. Next.next = target; Next = {value: 2, next: {value: 1, next: null}};

  



*/
