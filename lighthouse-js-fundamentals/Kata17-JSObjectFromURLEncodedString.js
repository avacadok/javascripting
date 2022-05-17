const urlDecode = function(letters) {
  let output = {};
  letters = letters.replace(/%20/g," ").replace(/&/g,"=");
  const arr = letters.split("=");
//loop through each pair of value
  for(let i = 0; i < arr.length; i += 2){
   output[arr[i]] = arr[i+1];
//arr[i] which is duck with index [0] and arr[i+1] = rubber(second index of the arr)
//if we put arr[i][1] which means its the second letter of the first word
  }return output;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);