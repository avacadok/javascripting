const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  let result = '';

//for loop for recipes to see if the bakeryA and bakeryB has the ingredients that match with
//the recipe
  for(let recipe of recipes){
    if((bakeryA.includes(recipe.ingredients[0]) || bakeryA.includes(recipe.ingredients[1]))&& 
    (bakeryB.includes(recipe.ingredients[0]) || bakeryB.includes(recipe.ingredients[1]))){
      result = recipe.name;
    }
  }return result;
}
//I use the includes () method because it can determine if an array includes the value that we need; 


let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));