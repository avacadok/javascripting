const camelCase = function(input) {
  return input.split(" ").map((word, index)=> {
    if (index === 0){
      return word;
    }else{
      return word[0].toUpperCase() + word.slice(1)
    }
  }).join('');
};

//The split() method divides a String into an ordered list of substrings, puts these substrings into an array, 
//and returns the array. The division is done by searching for a pattern; where the pattern is provided 
//as the first parameter in the method's call.

//The map() method creates a new array populated with 
//the results of calling a provided function on every element in the calling array.

//The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), 
//separated by commas or a specified separator string. 
//If the array has only one item, then that item will be returned without using the separator.


console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious")); 