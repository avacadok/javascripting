
const sumLargestNumbers = function(data) {
 
  let maxNum = Math.max(...data);
  
  let newArr = data.filter(number => number !== maxNum);
  let maxNum2 = Math.max(...newArr);
  return maxNum + maxNum2;

};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));``