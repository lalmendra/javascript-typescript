let n1 = 9.54578;
// let n2 = Math.floor(n1);
// let n2 = Math.ceil(n1);
// let n2 = Math.round(n1);
let n2 = n1.toFixed(3);

console.log(n2);

console.log(Math.max(1,2,3,4,5,6,7,-50,-1));
console.log(Math.min(1,2,3,4,5,6,7,-50,-1));

console.log(Math.random());
console.log((Math.random() * 5) + 5); //aleatorio entre 5 e 10

console.log(Math.pow(2,5));
console.log(2 ** 5);

console.log(9 ** (1/2)); //raiz
console.log(Math.sqrt(9));

console.log(100 / 0); // javascript permite dividir por 0, e devolve infinity
console.log(Boolean(100 / 0)); // e essa divisão é validada como true

// isso também acontece ao dividir por um número muito pequeno
console.log(100 / 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001)