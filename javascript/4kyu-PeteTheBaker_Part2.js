// Pete, the baker (part 2)

// Pete is now mixing the cake mixture. He has the recipe, containing the required ingredients for one cake. He also might have added some of the ingredients already, but something is missing. Can you help him to find out, what he has to add to the mixture?

// Requirements:
// • Pete only wants to bake whole cakes. And ingredients, that were added once to the mixture, can't be removed from that. That means: if he already added the amount of flour for 2.8 cakes, he needs to add at least the amount of flour for 0.2 cakes, in order to have enough flour for 3 cakes.
// • If Pete already added all ingredients for an integer amount of cakes, you don't need to add anything, just return an empty hash then.
// • If Pete didn't add any ingredients at all, you need to add all ingredients for exactly one cake.
// • For simplicity we ignore all units and just concentrate on the numbers. E.g. 250g of flour is simply 250 (units) of flour and 1 lb of sugar is also simply 1 (unit) of sugar.
// • Ingredients, which don't have to be added to the mixture (missing amount = 0), must not be present in the result.

function getMissingIngredients(recipe, added) {
  let needs = {};
  let amount = 0;

  for (let i in recipe) {
    for (let j in added) {
      let num = parseFloat(added[j]/recipe[i]);
      let numStr = num.toString();
      if (i === j && num > amount && /\W/.test(numStr)) {
        amount = parseInt(added[j]/recipe[i]) + 1;
      } else if (i === j && num > amount) {
        amount = parseInt(added[j]/recipe[i]);
      }
    }
  }
  console.log(amount);
  for (var key in recipe) {
    if (key in added && added[key] / recipe[key] === amount) {
      needs[key] = 0;
    } else if (amount === 0 && recipe[key] > added[key]) {
      needs[key] = recipe[key] - added[key];
    } else if (amount === 0) {
      needs[key] = recipe[key];
    } else if (key in added && amount === 1) {
      needs[key] = recipe[key] - added[key];
    } else if (key in added && amount > 1 && added[key] > recipe[key]) {
      needs[key] = (recipe[key] * amount) - added[key];
    } else if (key in added && amount > 1 && added[key] <= recipe[key]) {
      needs[key] = (recipe[key] * amount) - added[key];
    } else if (amount > 1) {
      needs[key] = recipe[key] * amount;
    } else {
      needs[key] = recipe[key] * amount;
    }

    if (needs[key] === 0) {
      delete needs[key];
    }
  }

  return needs;
}

var recipe = {flour: 200, eggs: 1, sugar: 100};
console.log(getMissingIngredients(recipe, {flour: 50, eggs: 1})); // must return {flour: 150, sugar: 100}
console.log(getMissingIngredients(recipe, {})); // must return {flour: 200, eggs: 1, sugar: 100}
console.log(getMissingIngredients(recipe, {flour: 500, sugar: 100})); // must return {flour: 100, eggs: 3, sugar: 200}
console.log(getMissingIngredients({flour: 200, eggs: 1, sugar: 100}, {flour: 100})); // must return {eggs: 1, flour: 100, sugar: 100}
console.log(getMissingIngredients({flour: 200, eggs: 1, sugar: 100}, {flour: 400, eggs: 2, sugar: 200})); // must return {}
console.log(getMissingIngredients({flour: 200, eggs: 1, sugar: 100}, {flour: 1000, eggs: 5, sugar: 500})); // must return {}

console.log(getMissingIngredients(recipe, {flour: 500, sugar: 200})); // must return {flour: 100, eggs: 3, sugar: 100}
console.log(getMissingIngredients({flour: 200, eggs: 1, sugar: 100}, {flour: 1, eggs: 2, sugar: 200})); // must return {flour: 399}
console.log(getMissingIngredients({flour: 200, eggs: 1, sugar: 100}, {flour: 123, eggs: 70})); // must return {flour: 13877, sugar: 7000}
