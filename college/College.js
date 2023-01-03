// Q1>
// let val = document.getElementById(first);
// let wel = "Welcome to JavaScript";

// function clickbtn(){
//     first.innerHTML = `<b>${wel.italics()}</b>`;
// }

// // Q2>


// function add(){
//     let a = parseInt(document.getElementById("text").value);
//     let b = parseInt(document.getElementById("text2").value);
//     // let save = document.getElementById("btn").value = a +b;
//     document.getElementById("first").innerHTML = `Answer :- ${a+b}`;

// }
// function sub(){
//     let a = parseInt(document.getElementById("text").value);
//     let b = parseInt(document.getElementById("text2").value);
//     // let save = document.getElementById("btn").value = a- b;
//     document.getElementById("first").innerHTML = `Answer :- ${a-b}`;

// }
// function multi(){
//     let a = parseInt(document.getElementById("text").value);
//     let b = parseInt(document.getElementById("text2").value);
//     // let save = document.getElementById("btn").value = a *b;
//     document.getElementById("first").innerHTML = `Answer :- ${a*b}`;

// }
// function div(){
//     let a = parseInt(document.getElementById("text").value);
//     let b = parseInt(document.getElementById("text2").value);
//     // let save = document.getElementById("btn").value = a /b;
//     document.getElementById("first").innerHTML = `Answer :- ${a/b}`;

// }
// function modulo(){
//     let a = parseInt(document.getElementById("text").value);
//     let b = parseInt(document.getElementById("text2").value);
//     // let save = document.getElementById("btn").value = a %b;
//     document.getElementById("first").innerHTML = `Answer :- ${a%b}`;
    
// }
// function power(){
//     let a = parseInt(document.getElementById("text").value);
//     let b = parseInt(document.getElementById("text2").value);
//     // let save = document.getElementById("btn").value = a**b;
//     document.getElementById("first").innerHTML = `Answer :- ${a**b}`;
// }

// // Q3>
// let time=new Date().getHours();

// if(time<12){
//     document.write("Good Morning <br>");
// }
// else if(time>=12 && time<16){
//     document.write("Good Afternoon <br>");
// }
// else if(time>=16 && time<20){
//     document.write("Good evening <br>");
// }
// else{
//     document.write("Good Night <br>");
// }

// Q4 & Q5 are in College2.html

// // Q6>
// let num = 234;
// let revnum = 0;
// let sum = 0;
// while(num!= 0){
//   let lastdig = num % 10;
//     revnum = (revnum*10)+lastdig;
//     sum += lastdig;
//     num = parseInt(num/10)
// }
// document.write(revnum,"<br>t")
// document.write(sum)

// Q7>
// function clickbtn(){
//     alert("Welcome to the JavaScript!")
//     document.getElementById("first").innerHTML="Welcome to the JavaScript!"
// }

// Q8>

// function ferh(){
//     let cel = document.getElementById("text").value;
//     document.getElementById("first").innerHTML=`${cel} celsius :- ${cel*1.8+32} ferhanite`
// }
// function cel(){
//     let ferh = document.getElementById("text").value;
//     document.getElementById("first").innerHTML=`${ferh} ferhanite : ${(ferh-32)*(5/9)} celsius`
// }

// // Q9>
// let ask = confirm("are you sure")

// if(ask){
//     alert("You press OK")
// }
// else{
//     alert("You press Cancel")
// }

// Q10>
// function clickbtn(){
//     let txt = parseInt(document.getElementById("text").value);
//     document.getElementById("first").innerHTML = fact(txt);
//     // console.log(txt);
// }

// function fact(num){
//     if (num<=0){
//         return 1;
//     }

//     let factnum = fact(num-1);
//     return factnum*num;
// }
// console.log(fact(4));

// Q16
let num = [2,1,5,3,6,4];
num.sort();
console.log(num);
if(8 in num){
    console.log("is present");
}
else{
    console.log("is not present");
}
