// Пример с использованием арифметических операций:
// javascript

let a = 7;
let b = 13;

a = a + b;  // a = 7 + 13 = 20
b = a - b;  // b = 20 - 13 = 7
a = a - b;  // a = 20 - 7 = 13

console.log(a); // 13
console.log(b); // 7

// Пример с использованием побитовой операции XOR:

a = a ^ b;  // a = 7 ^ 13
b = a ^ b;  // b = (7 ^ 13) ^ 13 = 7
a = a ^ b;  // a = (7 ^ 13) ^ 7 = 13

console.log(a); // 13
console.log(b); // 7

// Пример с использованием деструктуризации (ES6):



[a, b] = [b, a];

console.log(a); // 13
console.log(b); // 7