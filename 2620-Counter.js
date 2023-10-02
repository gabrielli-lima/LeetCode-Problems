var createCounter = function(n) {
    // using arrow function
    return count => n++;
};

let counter = createCounter(10)

console.log(counter()) // 10
console.log(counter()) // 11
console.log(counter()) // 12