function countSumbols(string) {



    if (string.length === 0) return "";


    let result = "";
    let count = "";


    for (let i = 0; i < string.length; i++) {

        if (string[i] === string[i + 1]) {
            count++;
        } else {
            result += string[i] + count
            count = 1
        }

    }
    return result;
}


console.log(countSumbols("aaaaabbbcdddd"))




// если подразумевается отсутсвие еденички после символа в еденичном экземпляре допишем функцию:

function countSumbols1(string) {



    if (string.length === 0) return "";


    let result = "";
    let count = "";


    for (let i = 0; i < string.length; i++) {

        if (string[i] === string[i + 1]) {
            count++;
        } else {
            if (count === 1) {
                result += string[i]
            } else {

                result += string[i] + count
                count = 1
            }
        }

    }
    return result;
}

console.log(countSumbols1("aaaaabbbcdddd"))