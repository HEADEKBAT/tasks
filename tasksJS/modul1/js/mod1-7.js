const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
    setTimeout(function () {
        console.log("index:" + i + ", element:" + arr[i]);
    }, 1000)
}

// ответ:
// index:4, element:undefined
// index:4, element:undefined
// index:4, element:undefined
// index:4, element:undefined

// так просходит изза объявления переменной var, в js по умолчанию var объявляет глобальную переменную, а не локальную.
// что делает её функцией или глобальной, а не блочной. Это означает, что у всех функций, создаваемых внутри цикла, будет одна и та же переменная i, а не копия для каждой итерации.
// i равна 4
// arr[i] равна arr[4], а в массиве arr элементы имеют индексы 0, 1, 2 и 3, поэтому arr[4] будет undefined.