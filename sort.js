let products = [
    { prodId: 2, item: "Notepads (12 pk)", price: 12.29 },
    { prodId: 202, item: "Pencils (6 pk)", price: 1.79 },
    { prodId: 272, item: "Airplane Lights (50 pk)", price: 120.79 },
    { prodId: 12, item: "Black Pens (12 pk)", price: 5.70 },
    { prodId: 21, item: "Stapler", price: 12.79 },
];

// let c= 0;
products.sort(function (a, b) {
    // console.log(c++)

    if (a.price < b.price) {
        return -1; // Negative
    }    
    if (a.price == b.price) {
        return 0; // Zero if even
    } 
    if (a.price > b.price){ 
        return 1; // Positive
    }
    // else return 1; // Default from example
    console.log("Unreachable?!?!")    
});

// products.sort((a, b) => a.price - b.price); // sort by price

// products.forEach(p => console.log(p.item + " $" + p.price.toFixed(2)))
products.forEach(p => console.log(`${p.item} $${p.price.toFixed(2)}`))

// let numProducts = products.length;
// for (let i = 0; i < numProducts; i++) {
//     console.log(products[i].item +
//         " $" + products[i].price.toFixed(2));
// }