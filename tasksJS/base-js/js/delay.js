

const functions = [() => console.log("first"), () => console.log("second"), () => console.log("third")];
const delays = [2000, 1000, 3000];
// ========через setTimeout=======
function runInOrder(functions, delays) {
    if (functions.length !== delays.length) {
        throw new Error("Длины массивов functions и delays должны совпадать");
    }

    let accumulatedDelay = 0;

    for (let i = 0; i < functions.length; i++) {
        accumulatedDelay += delays[i];
        setTimeout(functions[i], accumulatedDelay);
    }
}
// ========через setTimeout=======

// =====Вариант с асинхронным async/await (опционально):======  

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function runInOrder1(functions, delays) {
    if (functions.length !== delays.length) {
        throw new Error("Длины массивов functions и delays должны совпадать");
    }

    for (let i = 0; i < functions.length; i++) {
        await delay(delays[i]);
        functions[i]();
    }
}
// =====Вариант с асинхронным async/await (опционально):======  
console.log(runInOrder(functions, delays));
console.log(runInOrder1(functions, delays));