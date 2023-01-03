let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let save;
let before = "";
function clickbtn7(){
    before = save;
    save = seven.textContent;
    save = save.concat(before);
    console.log(save);
}
function clickbtn8(){
    before = save;
    save = eight.textContent;
    save = save.concat(before);
    console.log(save);
}