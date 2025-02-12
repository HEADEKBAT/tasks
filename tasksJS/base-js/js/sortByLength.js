function sortByLength(strings) {
    return strings.sort((a, b) => a.length - b.length);
}

// Тестовые случаи
console.log(sortByLength(["apple", "banana", "orange", "kiwi", "grape"])); 
// ["kiwi", "grape", "apple", "orange", "banana"]

console.log(sortByLength(["a", "bc", "def", "ghij", "klmno"])); 
// ["a", "bc", "def", "ghij", "klmno"]

console.log(sortByLength([])); 
// []

console.log(sortByLength(["xyz", "pq", "rs", "tuvw"])); 
// ["pq", "rs", "xyz", "tuvw"]










// Решение с использованием алгоритма пузырьковой сортировки:
// Вместо встроенного метода .sort() реализуем свою сортировку для массива.


function sortByLength(strings) {
    const arr = [...strings]; // Создаем копию массива, чтобы не изменять исходный
    const n = arr.length;

    // Алгоритм пузырьковой сортировки
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j].length > arr[j + 1].length) {
                // Меняем элементы местами
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }

    return arr; // Возвращаем отсортированный массив
}