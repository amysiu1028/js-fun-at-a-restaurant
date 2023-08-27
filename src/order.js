function takeOrder(order,deliveryOrders) {
  //should add new orders to an order type list
  //add new orders, order 1, and order 2 to an empty array
  // console.log(order) 
  if (deliveryOrders.length < 3) {
    return deliveryOrders.push(order)
  }
  //push object into array but only returns the length of the array.
  //append method inserts set of node objects or strnig objects after last child of elemnt 
}

function refundOrder(num,deliveryOrders) {
  //console.log(deliveryOrders) => = [order1, order2, order3];
  for (i=0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].orderNumber === num) {
      return deliveryOrders.splice([i],1);
      //splice out starting at that index position at, delete 1
      //splice(start, deletecount, add item?)
    }
  }
}

function listItems(deliveryOrders) {
  //list out all orders by name
  var items = []
  for (var i = 0; i < deliveryOrders.length; i++){
    items.push(deliveryOrders[i].item)
    //don't use return here bc you'll only have one item pushed then it will stop here
    //put it outside
  // console.log(items) => array of items
  }
  //want to create a string of the array.
  // console.log(items.join(", "))
  return items.join(", ")
}

function searchOrder(deliveryOrders,itemName) {
  //item and includes is undefined
for (var i=0; i < deliveryOrders.length; i++) {
  if (deliveryOrders[i].item === itemName) 
  return true 
  }
  return false
}

// why is this different???? Literally spent way too long on this!
// function searchOrder(deliveryOrders,itemName) {
//   //item and includes is undefined
// for (var i=0; i < deliveryOrders.length; i++) {
//   if (deliveryOrders[i].item === itemName) 
//   return true 
//   } else {
//   return false
//   }
// }

function searchOrder(deliveryOrders,itemName) {
  //item and includes is undefined
for (var i=0; i < deliveryOrders.length; i++) {
  if (deliveryOrders[i].item === itemName) 
  return true 
  }
return false 
}

//else is superlative

//should tell if order is in the list
//tells us if object value element is in an array

//includes() - find out whether the expected value exists in the given array
//some() - 
//do we need to go through every array indices, no
//line311-313 calls on fx for each item. 
//

//why this doesn't work??



module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}