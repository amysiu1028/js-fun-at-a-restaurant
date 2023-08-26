var chai = require("chai"); //using/RQ chai
var assert = chai.assert;//test chai in the fx

//imports, what we have as imports reflects exports
var { //to create these fx, we RQ the meal.js file in src (where code is implemented)
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
} = require("../src/meal");
//.. up a level in directory
//go to src directory
//then meal file

//the meal,js file, will have a fx called nameMenuItem
//should be a function that 
describe("meal.js", function() {
  describe("nameMenuItem", function() {
    it("should be a function", function() {
     assert.isFunction(nameMenuItem);
     //asser that it is the function nameMenuItem()
    });//it is a function, it passes already!

    it("should take in a name and make a delicious name", function () {
      var menuItemName = nameMenuItem("Pizza");
      //I have a variable declared menuItemName that is assigned to function nameMenuItem('Pizza')
      //create a variable... or can just return the statement
      assert.equal(menuItemName, "Delicious Pizza");
    });  //assert, it wants you to test 2 arguments and see if they are equal
    //make menuItemName === Delicious Pizza

    it("should be able to create many delicious titles", function () {
      var burritoItem = nameMenuItem("Burrito");
      var sushiItem = nameMenuItem("Pizza");
      var tacoItem = nameMenuItem("Taco");

      assert.equal(burritoItem, "Delicious Burrito");
    //should be able to make burritoItem === delicious Burrito
    // code is already dynamic
      assert.equal(sushiItem, "Delicious Pizza");
      assert.equal(tacoItem, "Delicious Taco");
    });
  });

  describe("createMenuItem", function() {
    it("should be a function", function () {
      assert.isFunction(createMenuItem);
    }); //make a function create Menu Item

    it("should create a menu item object", function() {
      var menuItemName = nameMenuItem("French Toast");
      //logging it tells us input and output
      // console.log("menu item name:",menuItemName)
      var menuItem = createMenuItem(menuItemName, 10.99, "breakfast");
      
      assert.equal(menuItem.name, "Delicious French Toast");
      //make an object of menuItem calling on name (key): to the
      //returned value of invoking nameMenuItem: "Delicious French toast" 
      assert.equal(menuItem.price, 10.99);

      //object menuItem already made
      //create key: value of price with value of 10.99
      assert.equal(menuItem.type, "breakfast");
      //object menuItem already made
      //create key:value of type: breakfast
      //
    });
  });

  describe("addIngredients", function() {
    it("should be a function", function () {
      assert.isFunction(addIngredients);
    });

    it("should be able to add ingredients to an array", function() {
      var ingredients = []; // empty array

      addIngredients("cheese", ingredients);
      //uses two arguments 
      //function should add cheese into ingredients
     
      assert.equal(ingredients.length, 1);
      //array length should be 1
      assert.deepEqual(ingredients, ["cheese"]);
      //create ingredients with an array that contains cheese
    });

    it("should be able to add ingredients to an array that already contains ingredients", function() {
      var ingredients = [];

      addIngredients("cheese", ingredients);
      addIngredients("peppers", ingredients);
      addIngredients("onion", ingredients);

      assert.equal(ingredients.length, 3);
      assert.deepEqual(ingredients, ["cheese", "peppers", "onion"]);
    });

    it("should only add unique ingredients", function() {
      var ingredients = [];

      addIngredients("cheese", ingredients);
      addIngredients("peppers", ingredients);
      addIngredients("peppers", ingredients);

      assert.equal(ingredients.length, 2);
      assert.deepEqual(ingredients, ["cheese", "peppers"]);
    })
  })

  describe("formatPrice", function() {
    it("should be a function", function () {
      assert.isFunction(formatPrice);
    });

    it("should add a dollar sign in front of the price", function () {
      var menuItemName = nameMenuItem("French Toast");
      //using return value "Delicious French Toast" to store in menuItemName variable
      var menuItem = createMenuItem(menuItemName, 10.99, "breakfast");
      var initialPrice = menuItem.price;
      //console.log(initialPrice) => 10.99
//accessing/getting/setting value of price from menuItem variable and assigning it to initialprice
    
      var formattedPrice = formatPrice(initialPrice);
      assert.equal(formattedPrice, "$10.99")
    }); //the stored return value in the variable: formattedPrice is the same as string "$10.99"

    it("should add a dollar sign in front of a different price", function () {
      var menuItemName = nameMenuItem("Carrot Cake");
      var menuItem = createMenuItem(menuItemName, 5.99, "dessert");
      //know menuItem's return value is an object
      var initialPrice = menuItem.price;
      
      //retrieve value of price attribute

      var formattedPrice = formatPrice(initialPrice);
      assert.equal(formattedPrice, "$5.99")
    });
  });

  describe("decreasePrice", function() {
    it("should be a function", function () {
      assert.isFunction(decreasePrice);
    });

    it("should decrease the price by 10%", function() {
      var menuItemName = nameMenuItem("Fajitas");
      var menuItem = createMenuItem(menuItemName, 6.00, "dessert");
      var decreasedPrice = decreasePrice(menuItem.price);
//accessing/getting/setting value of price from menuItem variable and assigning it to variable decreasedPrice
//so decreasedPrice = the assigned value/attribute 6.00
//can check this by:
// console.log(menuItem.price) //6.00
// console.log(decreasedPrice); //undefined bc the decreasePrice fx has nothing in it yet

      assert.equal(decreasedPrice, 5.40);
    })
  })

  describe("createRecipe", function() {
    it("should be a function", function () {
      assert.isFunction(createRecipe);
    });

    it("should return a recipe object", function() {
      var ingredients = [];
      addIngredients("eggs", ingredients);//invokes addIng fx to add "eggs" in array
      addIngredients("bacon", ingredients);//invokes addIng fx to add "bacon" in array

      var title = nameMenuItem("Eggs & Bacon");
      // title variable assigned to returned value string Delicious Eggs & Bacon
      var price = formatPrice("10.85")
      //price variable assigned to returned value of fx (above) string $10.85
      var menuItem = createMenuItem(title, price, "breakfast");
      //this above same as createMenuItem("Delicious Eggs & Bacon", '$10.85', "breakfast")
      //menuItem variable assigned to returned value of fx which is an object 
      var menuItemType = menuItem.type;
      //menuItemType assigned to the type attribute/value 'breakfast' from object menuItem

      var recipe = createRecipe(title, ingredients, menuItemType);
      //aka createRecipe("Delicious Eggs & Bacon", [], 'breakfast')
      assert.equal(recipe.title, "Delicious Eggs & Bacon");
      //create object var recipe with title(key) === "Delicious Eggs & Bacon"(value)
      assert.deepEqual(recipe.ingredients, ["eggs", "bacon"]);
      //within object var, make key ingredients same as ["eggs", "bacon"]- done on line 169-170
      assert.equal(recipe.type, "breakfast");
    });


    it("should return a different recipe object", function () {
      var ingredients = [];
      addIngredients("bread", ingredients);
      addIngredients("cheese", ingredients);
      addIngredients("butter", ingredients);

      var title = nameMenuItem("Grilled Cheese");
      var price = formatPrice("4.99")
      var menuItem = createMenuItem(title, price, "lunch");
      var menuItemType = menuItem.type;

      var recipe = createRecipe(title, ingredients, menuItemType);
      assert.equal(recipe.title, "Delicious Grilled Cheese");
      assert.deepEqual(recipe.ingredients, ["bread", "cheese", "butter"]);
      assert.equal(recipe.type, "lunch");
    });
  });
});