const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:

// Write a for loop that prints out the contents of ingredients:

// Write any loop (while or for) that prints out the contents of ingredients backwards:

console.log("Ingredients for banana chocolate bread are:")
let i = 0;
while(i < ingredients.length){
  console.log(ingredients[i]);
  i++;
}

console.log("Ingredients for banana chocolate bread are:")
for(let j = 0; j < ingredients.length; j++){
  console.log(ingredients[j]);
}


ingredients.length - 1;
console.log("Ingredients for banana chocolate bread are:")
for(let k = ingredients.length -1 ; k >= 0; k--){
  console.log(ingredients[k]);
}