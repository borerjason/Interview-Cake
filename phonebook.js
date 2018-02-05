// array, each index is a person, each person is object (name, phone #)
// [ name:  ,
// array: names, people that need to be removed from phonebook

// output: new array

// Two inputs: [{name: 'jason', phone: 123, momsIndex: 2 }, {name: 'dave', phone: 333, momsIndex: null}, {name: 'Sally', phone: 333, momsIndex: null]}, ['dave']
// output:  [{name: 'dave', phone: 333}] 


const updatePhoneBook = (phonebook, names) => {
  const namesToRemove = {};

  for (let name of names) {
    namesToRemove[name] = name;
  }
  const indices = [];
  const updatedPhonebook = phonebook.filter((entry, index) => {
    if (!namesToRemove.hasOwnProperty(entry.name)) {
      return true;
    }
    indices.push(index);
    return false;
  });

  for (let i of indices) {
    for (let j = 0; j < updatedPhonebook.length; j += 1) {
      if (updatedPhonebook[j].momsIndex >= i) {
        updatedPhonebook[j].momsIndex -= 1;
      }
    }
  }
  return updatedPhonebook;
};


const book = [{ name: 'chad', phone: 123, momsIndex: 3 }, { name: 'jason', phone: 333, momsIndex: null }, { name: 'dave', phone: 333, momsIndex: null }, { name: 'Sally', phone: 444, momsIndex: 4 }, { name: 'mary', phone: 333, momsIndex: null }, ];
const names = ['dave', 'jason'];

const output = [{ name: 'chad', phone: 123, momsIndex: 1 }, { name: 'Sally', phone: 444, momsIndex: 2 }, { name: 'mary', phone: 333, momsIndex: null }]
console.log(updatePhoneBook(book, names));

/*
Strategy: Keep track of all indices removed. If somebody's momIndex was greater than the index removed then decrement their momIndex by 1.

*/
