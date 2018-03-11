class Trie {
  constructor(){
    this.root = {};
  }

  add(word) {
    let currentNode = this.root;
    let isNewWord = false;
    
    for (let i = 0; i < word.length; i += 1) {
      const char = word[i];

      if (!currentNode.hasOwnProperty(char)) {
        currentNode[char] = {};
        isNewWord = true;
      }

      currentNode = currentNode[char];
    }

    if (!currentNode.hasOwnProperty('*')) {
      isNewWord = true;
      currentNode['*'] = {};
    }

    return isNewWord;
  }

}

const visited = new Trie;
visited.add('test');
console.log(visited.add('test'))

console.log(visited);

/*
Strategy:

By utilizing a Trie we can have nested chars in order to minimize duplicated urls.

1. Loop through chars in word.
2. Check if char is nested, if not add char to current node. 
3. When reach end of word, add 'end of word' char to know we have reached end


*/
