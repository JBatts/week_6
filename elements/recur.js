
function grow(c) {
    console.log("C is", c)
    const limit = 9;
    if (c > limit) {
        return 0; // No Recursion
    }
    return grow(c + 1); // Call Ourselves?!?!
}

console.log(grow(1));

///////////////////

fruit = ["apple", "grapes", "cherry"]
// console.log(fruit.pop());
// console.log(fruit.pop());
// console.log(fruit.pop());
// console.log(fruit.pop());

function show(list) {
    const one = list.pop();
    if(one)
}