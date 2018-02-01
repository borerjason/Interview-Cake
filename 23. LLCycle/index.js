const containsCycle = (node) => {
  let pointer1 = node;
  let pointer2 = node;
  
  while (pointer2.next && pointer2.next.next) {
    pointer1 = pointer1.next;
    pointer2 = pointer2.next.next;
    
    if (pointer1.val === pointer2.val) {
      return true;
    }
  }
  return false;

};

module.exports = containsCycle;

/*

Strategy: Take two pointers walk through the list, if the second pointers .next or .next.next === null then false, if pointer 1 === pointer 2 then we have a cycle;

*/


