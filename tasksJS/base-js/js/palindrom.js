const s = "A man, a plan, a canal: Panama";



// =========решение с помощью регулярных выражений==============
function isPalindrome1(s) {
    // приводим к нижнему регистру и оставляем только буквы
    let s1 = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    // убираем пробелы, разворачиваем строчку, соедняем в строку
    let s2 = s1.split("").reverse().join("");
    if (s1 === s2) {
        return true;
    } else {
        return false;
    }
}
// =========решение с помощью регулярных выражений==============





// =========решение с помощью перебора каждого значение в строке==============
function isPalindrome2(s) {
    // Приводим строку к нижнему регистру и оставляем только буквы и цифры
    let s1 = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    const lengthS = s1.length;

    for (let i = 0; i < Math.floor(lengthS / 2); i++) {
        // Сравниваем символы с начала и конца строки
        if (s1[i] !== s1[lengthS - 1 - i]) {
            return false; // Если символы не совпадают, строка не палиндром
        }
    }

    return true; // Если цикл завершился, строка — палиндром
}
// =========решение с помощью перебора и сравнения каждого значение в строке==============


// =========решение с использованием wile==============
function isPalindrome3(s) {
    // Приводим строку к нижнему регистру
    s = s.toLowerCase();

    // Инициализируем два указателя
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        // Пропускаем не буквенно-цифровые символы
        while (left < right && !isAlphanumeric(s[left])) {
            left++;
        }
        while (left < right && !isAlphanumeric(s[right])) {
            right--;
        }

        // Сравниваем символы
        if (s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}

// Функция для проверки, является ли символ буквенно-цифровым
function isAlphanumeric(char) {
    return /^[a-z0-9]$/i.test(char);
}
// =========решение с использованием wile==============




console.log("1 решение " + isPalindrome1(s)); 
console.log("2 решение " + isPalindrome2(s)); 
console.log("3 решение " + isPalindrome3(s)); 










