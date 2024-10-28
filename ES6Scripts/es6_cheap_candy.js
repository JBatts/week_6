let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
    {product: "Skittles", price: 15.79},
    {product: "Life-Savers", price: 2.09},
    {product: "Candy Corn", price: 0.89},
    {product: "Bread", price: 13.09},
    {product: "Fruit Loops", price: 1.59},
    {product: "Extoic M&Ms", price: 2.89},
    ];

let cheapProduct = products.filter(productID => productID.price < 4.00);

if (cheapProduct.length > 0) {
    cheapProduct.forEach(cheapProduct => {
          console.log(`${cheapProduct.product} is $${cheapProduct.price.toFixed(2)}`);
    });
} else {
    console.log("No options under $4.00");
}

let mmProduct = products.filter(productID => productID.product.includes("M&M"));

if (mmProduct.length > 0) {
    mmProduct.forEach(mmProduct => {
        console.log(`Would you like ${mmProduct.product}?`);
    });
} else {
    console.log("Sorry no M&M's for you dummy");
};

function inStock(candy) {
    let stock = products.find(item => item.product == candy);
    if(inStock != undefined) {
        console.log(`We infact do carry ${stock.product}`);
    }else {
    console.log("Sorry we are all out at the moment");
}
} 
inStock("Swedish Fish");