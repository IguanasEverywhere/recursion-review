// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  // I - any kind of object (array, string object literal etc)
  // O - a string representing the object formatted according to specific rules
  // C - do not use JSON.stringify
  // E - undefined, functions = null

  // initialize empty string variable to accumulate to
  // determine what type of object we have
  // handle stringification based on type of object

  // if object literal, needs curly brace at beginning and end of string
  // each key will have to be in double quotes
  // colon, followed by the value

  // TODO: consider joining elements to an array or other collection
};
