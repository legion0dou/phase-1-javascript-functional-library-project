// Helper function to check if the input is an object
function isObject(input) {
    return input && typeof input === 'object' && !Array.isArray(input);
  }
  
  // myEach: Iterates over the collection of elements, passing each element in turn to the callback function.
  function myEach(collection, callback) {
    if (isObject(collection)) {
      for (const key in collection) {
        callback(collection[key], key, collection);
      }
    } else {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i], i, collection);
      }
    }
    return collection;
  }
  
  // myMap: Produces a new array of values by mapping each value in the collection through a transformation function.
  function myMap(collection, callback) {
    const result = [];
    myEach(collection, (value, key, col) => {
      result.push(callback(value, key, col));
    });
    return result;
  }
  
  // myReduce: Reduce iterates through a collection of values and boils it down into a single value.
  function myReduce(collection, callback, acc) {
    let accumulator = acc;
    myEach(collection, (value, key, col) => {
      if (accumulator === undefined) {
        accumulator = value;
      } else {
        accumulator = callback(accumulator, value, col);
      }
    });
    return accumulator;
  }
  
  // myFind: Looks through each value in the collection, returning the first one that passes a truth test.
  function myFind(collection, predicate) {
    let result;
    myEach(collection, (value, key, col) => {
      if (predicate(value, key, col)) {
        result = value;
        return false; // Stop iteration
      }
    });
    return result;
  }
  
  // myFilter: Looks through each value in the collection, returning an array of all the values that pass a truth test.
  function myFilter(collection, predicate) {
    const result = [];
    myEach(collection, (value, key, col) => {
      if (predicate(value, key, col)) {
        result.push(value);
      }
    });
    return result;
  }
  
  // mySize: Return the number of values in the collection.
  function mySize(collection) {
    let count = 0;
    myEach(collection, () => {
      count++;
    });
    return count;
  }
  