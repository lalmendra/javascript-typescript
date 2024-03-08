let string1 = 'Um \texto';
let string2 = 'Um texto';

console.log(string1);
console.log(string2);

console.log(`${string2} de 1000 linhas`);


console.log(string2.indexOf('o', 3));
console.log(string2.indexOf('t'));

console.log(string2.search('x'));
console.log(string2.search(/[a-z]/));
console.log(string2.search(/[t]/));

console.log(string2.slice(3,6));

console.log(string2.toUpperCase());