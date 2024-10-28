
const fruit = ["apple", "banana", "cherrry"];

fruit.forEach(f => console.log(f));

function print(item){
    console.log(item)
}

fruit.forEach(print); // Note lack of parenthese after function name

// No Variable
[111, 222, 333].forEach(c => console.log(c));

["apple", "banana", "cherry"].forEach((f,i,a) => console.log(i+1, f, a));


// Extra Credit - show diff between current value and previous value
[11, 14, 16, 25].forEach((n, i, a) => i ? console.log(n - a[i - 1]) : 0); 