let snake = document.getElementById('sbtn');
let water = document.getElementById('wbtn');
let gun = document.getElementById('gbtn');
let user;
const char = ["Snake","Water","Gun"];
let a ;
let characters;
for (let i = 1;i<=20;i++){
    a = (Math.random(i));
    a*=10;
    if(a<=3){
        a=parseInt(a);
        comp=char[a];
        console.log(`Computer : ${comp}`);
        break;
    }
}
function choice(){
    for (let i = 1;i<=20;i++){
        a = (Math.random(i));
        a*=10;
        if(a<=3){
            a=parseInt(a);
            comp=char[a];
            console.log(`Computer : ${comp}`);
            break;
        }
    }
}

function clicksbtn(){
    user = snake.textContent;
    if (user == "Snake" && comp=="Snake"){
        alert("Match Draw");
    }
    else if (user == "Snake" && comp=="Water"){
        alert("You Won!");
    }
    else if (user == "Snake" && comp=="Gun"){
        alert("You lose!");
    }    
    console.log(`User : ${user}`)    // console.log(snake.textContent);
    choice();
}
function clickwbtn(){
    user = water.textContent;
    if (user == "Water" && comp=="Water"){
        alert("Match Draw")
    }
    else if (user == "Water" && comp=="Gun"){
        alert("You Won!")
    }
    else if (user == "Water" && comp=="Snake"){
        alert("You Lose!")
    }
    console.log(`User : ${user}`)    // console.log(snake.textContent);
    choice();
}
function clickgbtn(){
    user = gun.textContent;
    if (user == "Gun" && comp=="Gun"){
        alert("Match Draw")
    }
    else if (user == "Gun" && comp=="Snake"){
        alert("You Won!")
    }
    else if (user == "Gun" && comp=="Water"){
        alert("you Lose!")
    }
    console.log(`User : ${user}`);    // console.log(snake.textContent);
    choice();
}