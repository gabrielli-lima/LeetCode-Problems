var createHelloWorld = function() {
    const helloWorld = "Hello World"
    return function(...args) {
        // return console.log(helloWorld)
        return helloWorld
    }
};

const f = createHelloWorld();
f(); // "Hello World"
