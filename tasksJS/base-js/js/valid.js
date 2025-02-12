function isValid(s) {
    const stack = []; // Стек для хранения открывающих скобок
    const pairs = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) {
        if (char === '(' || char === '{' || char === '[') {
            // Если символ — открывающая скобка, добавляем в стек
            stack.push(char);
        } else {
            // Если символ — закрывающая скобка
            if (stack.length === 0 || stack.pop() !== pairs[char]) {
                return false; // Скобки не соответствуют или стек пуст
            }
        }
    }

    return stack.length === 0; // Если стек пуст, все скобки корректно закрыты
}


const s1 = "()";
console.log(isValid(s1)); // true

const s2 = "(]";
console.log(isValid(s2)); // false