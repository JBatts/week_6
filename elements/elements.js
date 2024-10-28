
const monsters = [
    {name: "Frankenstein's Evil Creation"},
    {name: "Thanos the Time Master"},
    {name: "Alucard Ruler of Vampires"},
];

function getMonster(m, i) {
    // `<div id = "1">Thanos the Time Master</div>`
    return `<div id = "${i}">${m.name}</div>`
}

// .map() transforms input array into output array 
console.log(monsters.map(getMonster).join('\n'));

const numbers = [1, 2, 3, 4];
console.log(numbers);

// Separator
const separator = "."; // Glue
console.log(numbers.join(separator)); // Turns the list/array into a string
const text = "255.255.0.1";

const delimiter_AKA_splitter = ".";
const parsed = text.split(delimiter_AKA_splitter); // Turns the string into a list/array
console.log(parsed);
console.log(parsed.join("-"));