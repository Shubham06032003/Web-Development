let num;
for(let i = 1;i<=100;i++){
    num = parseInt(Math.random(i)*100);
        break;
}
let guess=0;
let user;
do{
    user = parseInt(prompt("Enter a number:"));
    if(user >100){
        console.error(`${user} must be smaller ther 100`);
    }
    else if(user < num){
        console.log(`${user} is smaller then the hidden number`);
        guess +=1;
    }
    else if(user >num){
        console.log(`${user} is greater then the hidden number`);
        guess +=1;
    }
    else if (user == num){
        console.log("Match found");
        guess +=1;
        break;
    }
}while(user != num);

let score = 100-guess;
console.log(`Your score: ${score}`);
document.write(`Your Score : ${score}`);
