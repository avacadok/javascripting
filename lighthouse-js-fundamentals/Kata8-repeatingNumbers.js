const repeatNumbers = function(data) {
  let resultArray = []    
  for (let i=0; i < data.length; i++) {
    let num = data[i][0]
    let times = data[i][1]
    let newString = ""
    //use string"" because we do not want them to add tgt
    for (let j=0; j < times; j++) {
      newString += num
    }
    resultArray.push(newString)
  }
  return resultArray.join(", ")
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
