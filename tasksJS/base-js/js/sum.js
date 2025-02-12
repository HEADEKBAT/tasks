
const array = [1, 2, 3, 4, 5];





// ==========решение через for=========
function sumArray(numbers) {
    let sum = 0; // Переменная для накопления суммы
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]; // Добавляем текущий элемент к сумме
    }
    return sum; // Возвращаем итоговую сумму
}
// ==========решение через for=========


// ============решение через reduce=========

function sumArray1(numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
// ============решение через reduce=========

console.log(sumArray(array)); 
console.log(sumArray1(array)); 