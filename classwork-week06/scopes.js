// Global Scope
// console.log(x);


const x = 10;

console.log(x);
// console.log('All good there?');

const personName = "Bob";

function sayHello(personName1) {
    personName1 = '+' + personName1;
    // Scope A

    const y = 10;
    console.log(`Hello, ${personName}!`);

    // function innerPeace(personName_2) {
    //     // Scope B
    //     console.log(`Hi, ${personName}, the awesome panda wishes you inner peace.`);
    // }

    // innerPeace(personName1);

    const numbers = [1, 2, 3, 4];
    for (let x of numbers) {
        x = x + 1;

        console.log(x);
    }

}

sayHello("Murphy");


console.log(personName);
