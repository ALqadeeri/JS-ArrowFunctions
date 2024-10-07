const greet = (name) => `Hello, ${name}!`;

console.log(greet("waleed"));

const sum = (x, y) => x + y;
console.log(sum(3, 9));

const squares = (number) => number * number;
console.log(squares(3));

const squareArray = (numbers) => numbers.map((num) => num * num);
const Array = squareArray([1, 2, 3, 4, 5]);
console.log(Array);
