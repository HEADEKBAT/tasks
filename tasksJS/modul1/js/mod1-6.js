console.log("one")

setTimeout(function() {
	console.log("two");
    },)

Promise.resolve().then(function() {
	console.log("three");
    })

console.log("four")


// "one" (синхронно)
// "four" (синхронно)
// "three" (микрозадача — Promise)
// "two" (макрозадача — setTimeout)



// one
// four
// three
// two