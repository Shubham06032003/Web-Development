// Q11>
// let time = new Date().getHours();
// if (time>=6 && time<12){
//     document.body.style.backgroundColor="orange";
// }
// else if (time>=12 && time<16){
//     document.body.style.backgroundColor="darkyellow";
// }
// else if (time>=16 && time<19){
//     document.body.style.backgroundImage="linear-gradient(to bottom,yellow,orange)";
// }
// else{
//     document.body.style.backgroundImage="linear-gradient(to bottom,black,black,lightgray,black)";
// }

// Q12>
// clr = new Array("black","red","green","yellow","orange");
// var i =1;
// function run(){
//     document.body.style.backgroundColor= clr[i];
//     i = (i+1)%5  ;
// }
// r = setInterval(() => {run()}, 1000);



// Q13>

// let text = prompt("Enter text :");
// let save = text.split(" ");
// let count = 0;
// for (let i of save){
//     count +=1;
// }

// console.log(`${text} in this text ${count} words are present`)

// Q15>

let num =new Array();
for(let i=0;i<11;i++){
    num.push(i);
}

let n=23;
if(n in num){
    console.log(`${n} is present in ${num}`);
}
else{
    console.log(`${n} is not present in ${num}`);
}
