// ====Используем методы .trim() и .split()====
function lengthOfLastWord(s) {
    // Убираем лишние пробелы в начале и конце, затем разбиваем строку на слова
    const words = s.trim().split(' ');
    // Возвращаем длину последнего слова
    return words[words.length - 1].length;
}
// ====Используем методы .trim() и .split()====


//====без разделения строки на слова====
function lengthOfLastWord1(s) {
    let length = 0;
    let i = s.length - 1;

    // Пропускаем пробелы с конца строки
    while (i >= 0 && s[i] === ' ') {
        i--;
    }

    // Считаем длину последнего слова
    while (i >= 0 && s[i] !== ' ') {
        length++;
        i--;
    }

    return length;
}
//====без разделения строки на слова====

console.log(lengthOfLastWord("Hello World")); 

console.log(lengthOfLastWord1("Hello World")); 


