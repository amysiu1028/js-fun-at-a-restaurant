function createRestaurant(name) {
var pizzaRestaurant = {
    name : name,
    menus : {
      breakfast : [],
      lunch : [],
      dinner : []
    }
  }
  return pizzaRestaurant
  //return this variable so in test, you can call on it.name!
}
//in test file will give you "Sexy Pizza" = name bc createRestaurant on line 18 calls that as a test argument  
//menus = undefined


function addMenuItem(pizzaRestaurant,bbqPizza) {
  var lunchArray = pizzaRestaurant.menus.lunch
  var breakfastArray = pizzaRestaurant.menus.breakfast
  var dinnerArray = pizzaRestaurant.menus.dinner
  if (bbqPizza.type === "lunch" && !lunchArray.includes(bbqPizza)) {
    lunchArray.push(bbqPizza)
  } else if (bbqPizza.type === "breakfast" && !breakfastArray.includes(bbqPizza)) {
    breakfastArray.push(bbqPizza)
  } else if (bbqPizza.type === "dinner" && !dinnerArray.includes(bbqPizza)) {
    dinnerArray.push(bbqPizza)
  }
  return pizzaRestaurant.menus
}
//!lunchArray.includes(bbqPizza) - condition is AND if lunch array does NOT include bbqPizza object, then that bbqPizza object into array
//push returns the new length of the array not the {breakfast: [baconEggsPizza], lunch: [bbqPizza], dinner: []}
//so you should return that outside of the conditionals!
  // console.log(pizzaRestaurant)
  //bbqPizza = { name: "BBQ Chicken", price: "12.49",type: "lunch"}
  //you want to push bbqPizza object into the position 0 in lunch value which is an empty array
  //hasOwnProperty() boolean method of object. returns a boolean indicating whether this object has the specified property 
  //I want to see if pizzaRest array atbbqPizza.type

  // ADVICE: look at should statement and assert! focus on those
  function removeMenuItem(pizzaRestaurant,menuName,menuType) {
 //function                pizzaRest object, Bacon and eggs, breakfast
    var newArray = pizzaRestaurant.menus[menuType]
    //aka pizzaRestaurant.menus[breakfast] - 
    //access array of objects: arrayName[arrayIndex]
  for (i=0; i< newArray.length; i++)
  if (newArray[i].name === menuName && newArray[i].name.includes(menuName)) { 
  //remove that item
    newArray.splice(i,1); //splice the array!
    return  `No one is eating our ${menuName} - it has been removed from the ${menuType} menu!`
  } //and if this is all false above, where menuName (Specific to that) - that's why you can't use menuName (not specific)
 //then return the following if menuName is not in array.
 return `Sorry, we don't sell ${menuName}, try adding a new recipe!`
}

//hard code 
//then refactor and how do we make it dynamic?
    //remove by name and type
    //splice out object that has name, and type
//What will give this:{name: "Bacon and Eggs Pizza", price: "13.49", type: "breakfast"}
//  var newArray = pizzaRestaurant.menus[breakfast]
//since typeVale
  












function checkForFood(pizzaRestaurant,foodItemObject) {
// as of now we don't know how to loop in an object. Only arrays and strings
//so first set variable that access array.
  var foodArray = pizzaRestaurant.menus[foodItemObject.type]
//then check every index of the array with for loop to see if it has foodItemObject in it
    for (var i=0; i < foodArray.length; i++) {
//if it does then return 
      if (foodArray.includes(foodItemObject))
        return `Yes, we're serving ${foodItemObject.name} today!`
    } //if this entire thing is false: so item is not in foodItemObject
  return `Sorry, we aren't serving ${foodItemObject.name} today.`
  }
//should confirm if a requested item is on the menu
//just check if {name: "Cinnamon Rolls", price: "4.49",type: "breakfast" } is in object
//includes if array includes a certain value
//create a value = to {name: "Cinnamon Rolls", price: "4.49",type: "breakfast" }
//see if array includes that value

//should confirm if requested item is not on the menu

//hard code helpful then do it again with dynamic code
module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem,
  checkForFood
}