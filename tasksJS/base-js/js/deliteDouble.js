



// ====Использование Set для удаления дубликатов====
function getUniqueValues(arr) {
    return [...new Set(arr)];
}
// ====Использование Set для удаления дубликатов====



// ====Использование метода filter и indexOf для удаления дубликатов====
function getUniqueValues1(arr) {
    return arr.filter((value, index) => arr.indexOf(value) === index);
}
// ====Использование метода filter и indexOf для удаления дубликатов====




// ====через цикл====
function getUniqueValues2(arr) {
    const seen = {};
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        if (!seen[arr[i]]) {
            result.push(arr[i]);
            seen[arr[i]] = true;
        }
    }

    return result;
}
// ====через цикл====

console.log(getUniqueValues([1, 2, 3, 3, 4, 5, 4, 6])); 
console.log(getUniqueValues1([1, 2, 3, 3, 4, 5, 4, 6])); 
console.log(getUniqueValues2([1, 2, 3, 3, 4, 5, 4, 6])); 