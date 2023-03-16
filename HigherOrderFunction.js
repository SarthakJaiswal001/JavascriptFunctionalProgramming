const divide = (x, y) => x / y;
const secondArgisnotZero = func =>
    (...args) => {
        if (args[1] === 0) {
            console.log("there is error");
            return null;
        }
        return func(...args);
    }

const output = secondArgisnotZero(divide);
console.log(output(4, 2));