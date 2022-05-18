const squareCode = function(message) {
  message = message.replace(/\s/g,"");
  let num = message.length;
  let sqr = Math.ceil(Math.sqrt(num));
  let msg = "";
  //outer loop used to shift 1 character at a time horizontally;
  for(let i = 0; i < sqr; i++){
    //inner loop grabs each character vertically by following the sqr amount
    for(let j = i; j < num; j += sqr){
      msg += message[j];
    }
    msg += " ";
  }
  return msg;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));