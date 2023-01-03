let btn = document.getElementById("btn");
btn.addEventListener("click",clickbtn);
function clickbtn (e){

    let parent = document.getElementById("parent");
    // parent.addEventListener("input",showError);
    // function showError(e){
    // }
    let symbols = ['~',"`","!","<",">","=",",","@","#","$","%","&","/","-","_","+","^","*","(",")","|","."]
    let username = document.getElementById('name');
    console.log(username.value)
    for(let i of symbols){
        if(username.value.includes(i)){
            username.style.borderColor = 'red';
            let newp = document.createElement('span');
            newp.innerHTML = "*";
            newp.style.color = "red";
            parent.appendChild(newp);
            // alert("wrong Input")
        }
    }
    
    let parent2 = document.getElementById("parent1");
    // parent2.addEventListener('focusout',showError2)
    // function showError2(){
    // }
    let email = document.getElementById('Email');
    if (!(email.value.includes('@')) && (!(email.value.includes(".")))){
        email.style.borderColor="red";
        let newp = document.createElement('span');
        newp.innerHTML = "*";
        newp.style.color = "red";
        parent2.appendChild(newp);
    }
    let parent3 = document.getElementById("numpad");
    // parent3.addEventListener('focusout',showError3)
    // function showError3(){
    // }
    let phNo = document.getElementById("PNo");
    len = phNo.value.length;
    
    if(len != 10){
        phNo.style.borderColor = "red";
        let newp = document.createElement("span");
        newp.innerHTML = "*";
        newp.style.color = "red";
        parent3.appendChild(newp);
    }
}