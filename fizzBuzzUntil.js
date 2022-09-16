// function fizzBuzzUntil(i) {
//     for  (let i = 0; i <= 10; i ++) {
//         if (i % 2 === 0) {
//             console.log(i + " is even");
//         }
//         else {
//             console.log(i + " is odd");
//         }
//     }
// }

function fizzBuzzUntil(num) {
    for (let i = 1; i <= num; i++) {
        if (i % 5 === 0 && i % 3 === 0) {
            console.log("FizzBuzz");
        }
        else if (i % 5 === 0) {
            console.log("Buzz");
        }
        else if (i % 3 === 0) {
            console.log("Fizz");
        }
        else {
            console.log(i);
        }
    }
}

fizzBuzzUntil(20);



// module.exports = fizzBuzzUntil;
// module.exports = fizzbuzz2;