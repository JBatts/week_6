
let cart = [
    { item: "Bread", price: 3.29, quantity: 2 },
    { item: "Milk", price: 4.09, quantity: 1 },
    { item: "T-Bone Steak", price: 12.99, quantity: 2 },
    { item: "Baking Potato", price: 1.89, quantity: 6 },
    { item: "Iceberg Lettuce", price: 2.06, quantity: 1 },
    { item: "Ice Cream - Vanilla", price: 6.81, quantity: 1 },
    { item: "Apples", price: 0.66, quantity: 6 }
];
// Use map() to create an array of item names
let itemList = cart.map(cartItem => cartItem.item);

// Use forEach() to display the list of item names
itemList.forEach(itemName => console.log(itemName))


let totalCost = cart.reduce((total, cartItem) => {
    return total + (cartItem.price * cartItem.quantity)
}, 0);

console.log(`Total Cost of all Items: $${totalCost.toFixed(2)}`)


