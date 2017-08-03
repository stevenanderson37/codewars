// Pete, the baker

// Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

// Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

function cakes(recipe, available) {
  let amount = 0;
  let recipeProps = [];
  let availableProps = new Set();

  for (let prop in recipe) {
    recipeProps.push(prop);
  }
  for (let prop in available) {
    availableProps.add(prop);
  }
  for (let k = 0; k < recipeProps.length-1; k++) {
    if (!availableProps.has(recipeProps[k])) {
      return 0;
    }
  }

  for (let i in recipe) {
    for (let j in available) {
      if (i === j && amount === 0) {
        amount = parseInt(available[j]/recipe[i]);
      } else if (i === j && parseInt(available[j]/recipe[i]) < amount) {
        amount = parseInt(available[j]/recipe[i]);
      }
    }
  }
  return amount;
}

console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200})); // must return 2
console.log(cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000})); // must return 0
