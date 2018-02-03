// array, each index is a person, each person is object (name, phone #)
// [ name:  ,
// array: names, people that need to be removed from phonebook

// output: new array

// Two inputs: [{name: 'jason', phone: 123, momsIndex: 2 }, {name: 'dave', phone: 333, momsIndex: null}, {name: 'Sally', phone: 333, momsIndex: null]}, ['dave']
// output:  [{name: 'dave', phone: 333}] 


const updatePhoneBook = (phonebook, names) => {
  const nameObj = {};

  for (let name of names) {
    nameObj[name] = name;
  }

  const newArray = phonebook.filter((entry) => {
    return !nameObj.hasOwnProperty(entry.name);
  });

  
  
  return newArray
}


const book = [{ name: 'chad', phone: 123, momsIndex: 2 }, { name: 'dave', phone: 333, momsIndex: null }, { name: 'Sally', phone: 444, momsIndex: null}];
const names = ['dave'];

const output = [{ name: 'chad', phone: 123, momsIndex: 1 }, { name: 'Sally', phone: 444, momsIndex: null }]
console.log(updatePhoneBook(book, names));

// Remove dave from first array
// Update moms Index for Jason because Sally is at a different place

// need reference to what has changed 

