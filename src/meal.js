//QUESTION: which is more dynamic? both
// function nameMenuItem(foodName) {
//   var menuItemName =  `Delicious ${foodName}`
//   return menuItemName
// }

//refactors it! simplifies it
// function nameMenuItem(foodName) {
//   return `Delicious ${foodName}`
// }
function nameMenuItem(foodName) {
  return `Delicious ${foodName}`
}

//this function accepts 3 para
function createMenuItem(menuItemName, price, type) {
  //how many parameters?
  // console.log("price value:", price)
  // console.log("type value:", type)
//create a variable and assign it the value of an object
//has 3 attributes (= 3 key:value)
  var menuItem = {
    name: menuItemName,//menuItemName = "Delicious French Toast" bc in test file menuItemName invokes nameMenuItem("French Toast") which has a return value of "Delicious French Toast"
    //console.log(menuItemName)
    price: price, //can be "10.99" but to make more dynamic just 10.99
    //we can test it:
    type: type //can be "breakfast" but to make more dynamic, just type
  }
  return menuItem //return object which contains 3 attributes
}

function addIngredients(food,ingredients) {
  //ingredients = [] when you console.log it
  //food is "cheese"when you console.log(food)
  //what you want function to do is create an array named ingredients that contains cheese
   //bc ingredients value is already an empty array in test file
   if (ingredients.includes(food)) {
    return ingredients 
  } else {
    return ingredients.push(food)
  }
}
//next test: you want to push ["cheese", "peppers", "onion"] into ingredients to make ingredients === to that array.
//next is only add unique ingredients
//researched prevent adding duplicates in array: use includes()
//if ing array does not include(food) then return ingredients.push (push value to string)
//
// if (!ingredients.includes(food)) {
//   return ingredients.puch(food)
// }
//if (ingredients.include(food)) return ingredients array without pushing

function formatPrice(price) {
  //output: should add a dollar sign in front of the price"
  //price needs to be defined
 return `$${price}`
}

function decreasePrice(price) {
  // console.log("test:",menuItem.price) //can't because out of scope
  // console.log(price) //=> 6.0
  return (price -(price * .10))
  //output we want, is price to decrease by 10%
}

//think simplicity!

function createRecipe(title, ingredients, type) {
  
  var recipe = {
    title: title, // console.log(title) = delicious eggs & bacon
    ingredients: ingredients, //  console.log(ingredients) = ["eggs","bacon"]
    type: type, //console.log(type) = breakfast. Should be same in parameter
  }
  return recipe
}


module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}


