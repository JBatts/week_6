
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
console.log(monsters.map(getMonster).join('\n'))