let menu = [
    [
        { item: "Pancakes", price: 4.99 },
        { item: "Eggs", price: 2.99 },
        { item: "Waffles", price: 1.19 },
        { item: "Coffees", price: 0.99 },
    ],
    [ 
        { item: "Sandwiches", price: 3.79 },
        { item: "Chicken & Rice", price: 9.13 },
        { item: "Tacos", price: 0.49 },
        { item: "Sodas", price: 1.99 },
    ],
    [
        { item: "Burritos", price: 7.67 },
        { item: "Burgers", price: 3.95 },
        { item: "Steaks", price: 5.99 },
        { item: "Wines", price: 14.79 },
    ],
];



function getMenu(num) {
const mealNames = ["Breakfast Menu", "Lunch Menu", "Dinner Menu"];
console.log(mealNames[num])
menu[num].forEach(dish => {
    console.log(`${dish.item}: $${dish.price}`)
})
}

getMenu(0)
getMenu(1)
getMenu(2)