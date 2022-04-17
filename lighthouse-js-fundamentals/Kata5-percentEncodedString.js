const urlEncode = function(text) {
  for (let i = 0; i < text.length; i++){
    return text.trim().replaceAll(" ","%20");
  }

};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
