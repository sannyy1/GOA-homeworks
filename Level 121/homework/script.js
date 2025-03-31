//1
const sum = (a, b = 0) => a + b;

console.log(sum(5, 3));
console.log(sum(5)); 

// 2
const fullName = ({ firstName, lastName = "Doe" }) => `${firstName} ${lastName}`;

console.log(fullName({ firstName: "John", lastName: "Smith" }));
console.log(fullName({ firstName: "Jane" }));

//3
const sumArray = (arr = [1, 2, 3]) => arr.reduce((acc, num) => acc + num, 0);

console.log(sumArray([4, 5, 6]));
console.log(sumArray([]));