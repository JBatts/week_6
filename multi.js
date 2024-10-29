let teamMembers = [
    ["Dana", "Brenda", "Happy"],
    ["Laura", "Patti"],
    ["Leslye", "Randy", "Mollye", "Ranse"],
    ["Eloise", "Robert"]
];

// teamMembers.forEach((teamList, index) => teamList.forEach(member => console.log(index+1, member)));
// Simple - one liner
teamMembers.forEach((t, i) => console.log(i + 1, t.sort().join(", ")))
// These all are the same!!!
teamMembers.map((team) => team.join(", ")).forEach((person, index) => console.log(index + 1, person));


// Generic for re-use in itils.js
const commas = a => a.join(", ");
const print = s => console.log(s)

// Special only one purpose in teams.js
const team = (r, i) => `Team ${i + 1} - (${r})`

// Put it all together in app.js
teamMembers.map(a=> a.sort()).map(commas).map(team).forEach(print)

// 2 dimensional matrix
// 3 dimensional cube
// N > 3 dimensional tensor