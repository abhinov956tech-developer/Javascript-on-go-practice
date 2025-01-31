//Chain these methods to first filter even numbers, then square them
const numbers = [1, 2, 3, 4, 5];
// Square each number
const squares = numbers.map(x => x * x);
// Filter even numbers
const evens = numbers.filter(n => n % 2 === 0);

const evenSquares = numbers.filter(n => n % 2 === 0).map(x => x* x);// chaining array methods make them concise
console.log(evenSquares);