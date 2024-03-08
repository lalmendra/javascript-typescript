let num1 = 1;
let num2 = 2.5;
let num3 = 10.468976516981984;

console.log(num1.toString() + num2);
console.log(typeof(num1.toString() + num2));

console.log(num3.toFixed(2))
console.log(num3.toFixed(4))

console.log(Number.isInteger(num1))


// IEEE 757-2008
//imprecision
let a = 0.7
let b = 0.1
console.log(a + b)