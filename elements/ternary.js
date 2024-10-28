

// ? ternary operator - make if/else value into 

let input = false;

let option = undefined; // Empty/Nothing, unset, (null)

if(input) {
    option = "yes we can";
} else {
    option = "no we will not";
}

console.log("OPTION: ", option)
////////////////////////////////

const lightColor = "GREEN";
// Experssion ? IF_TRUE : IF_FALSE
const action = lightColor === "GREEN" ? "GO GO GO AND WIN!!!" : "STOPPPPP RED LIGHT!!!!"
console.log(action)