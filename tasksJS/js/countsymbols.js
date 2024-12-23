function countSymbols(str) {
    // Создаем объект для хранения количества повторений каждого символа
    const charCount = {};

    // Проходимся по каждому символу в строке
    for (let i = 0; i < str.length; i++) {
        // Если символ уже есть в объекте, увеличиваем его счетчик
        if (charCount[str[i]]) {
            charCount[str[i]]++;
        } else {
            // Иначе добавляем новый символ в объект с счетчиком 1
            charCount[str[i]] = 1;
        }
    }

    // Преобразуем объект в строку, где каждый уникальный символ повторяется соответствующее количество раз
    const result = Object.entries(charCount).map(([char, count]) => {
        return char + count;
    }).join('');

    return result;
}

console.log(countSymbols('AAAABBCCCDDD'));