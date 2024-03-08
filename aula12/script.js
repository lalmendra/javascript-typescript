let varA = 'A'; // receber varB
let varB = 'B'; // receber varC
let varC = 'C'; // receber varA

// varA = varB
// varB = varC
// varC = varA

// criar variável temp
let temp = varA
varA = varB
varB = varC
varC = temp

// using array
[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC)