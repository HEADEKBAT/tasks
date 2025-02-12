setTimeout(() => console.log("apple"), 100);
setTimeout(() => console.log("oragne"));

new Promise((res, rej) => {
    setTimeout(() => res("carrot"), 300);
}).then(data => console.log("Тут дата: " + data))

new Promise((res, rej) => {
    res();
    console.log("melon");
}).then(() => console.log("peach"))

console.log("mango");