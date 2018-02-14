function flattenDictionary(dict) {
  let flatDict = {};

  let flat = (key, value) => {
    if (typeof value !== 'object') {
      flatDict[key] = value;
    } else {
      for (let nextKey in value) {
        let newKey;
        if (key !== '') {
          if (nextKey === '') {
            newKey = key;
          } else {
            newKey = `${key}.${nextKey}`;
          }
        } else {
          newKey = nextKey;
        }
        flat(newKey, value[nextKey]);
      }
    } 
  }
  for (let key in dict) {
    flat(key, dict[key]);
  }
  return flatDict;
}


const dict = { "a": { "": "pramp" } }

console.log(flattenDictionary(dict));

/*
Input: dictionary with nested dictionaries
Output: Return a flattened dictionary where new keys are concatenated versions of all nested keys;

dict = { 
  "key1": 1,
  "key2": {
    "a":"2"
  }
}

newDict = {
  "key1": 1,
  "key2.a": 2,
}

item = key1 
value = 1


*/