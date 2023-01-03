let marks = {
    a : 90,
    b : 80,
    c : 70
}
// Q1
// for (let i = 0; i < Object.keys(marks).length;i++){
//     console.log(`${Object.keys(marks)[i]} got ${Object.values(marks)[i]} Marks`);
// }

// Q2

// for(let i in marks){
//         console.log(`${i} got ${marks[i]} Marks`);
// }

// Q3
// function meanValue(a) {
//     let mean = 0;
//     for(let i = 1;i<a;i++){
//         mean += i;
//     }
//     mean /= a;
//     return mean;
// }
// let num = prompt("Enter a Number :")
// console.log(`mean of ${num} is : ${meanValue(num)}`);

// Q4

// function guessNumber() {
//     let num = 85;
//     while(true){
//         let gnum = prompt("Guess the number Between 50 and 100 : ");
//         if(gnum== num){
//             console.log("Correct Answer");
//             break;
//         }
//         else{
//             console.log("Try Again");
//         }
//     }
// }

// guessNumber();

let sentance = "The Quick fox jumped over the lazy dog ";
let word = "fox";
console.log(`the word ${word} is ${sentance.includes(word)?" present ": " present not "} in the sentance\n ${sentance}`);