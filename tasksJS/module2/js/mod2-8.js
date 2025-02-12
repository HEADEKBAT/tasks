const animal = "snake";

function makeShout() {
    let animal = "cat";

    const shout = function () {
        console.log(animal)
    };

    animal = "dog";
    return shout;
}

shout = makeShout();

shout();

shout = function () {
    console.log(animal)
};

shout();

dog
snake