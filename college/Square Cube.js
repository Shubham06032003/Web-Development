let parent = document.getElementById('main');
let num = document.getElementById('numpad');
let sbtn = document.getElementById('sqr');
sbtn.addEventListener('click',clicksbtn);
let cbtn = document.getElementById('cube');
cbtn.addEventListener('click',clickcbtn);
let bbtn = document.getElementById('both');
bbtn.addEventListener('click',clickbbtn);
function clicksbtn(e){
    let n = num.value;
    console.log(n);
    let newRow = document.createElement('tr');
    newRow.className='row';
    newRow.innerHTML=`<td >${n}</td>
    <td>${n**2}</td>
    <td>Neglected <br> by user</td>`;
    parent.appendChild(newRow);
}
function clickcbtn(e){
    let n = num.value;
    console.log(n);
    let newRow = document.createElement('tr');
    newRow.className='row';
    newRow.innerHTML=`<td >${n}</td>
    <td>Neglected <br> by user</td>
    <td>${n**3}</td>`;
    parent.appendChild(newRow);
}
function clickbbtn(e){
    let n = num.value;
    console.log(n);
    let newRow = document.createElement('tr');
    newRow.className='row';
    newRow.innerHTML=`<td >${n}</td>
    <td>${n**2}</td>
    <td>${n**3}</td>`;
    parent.appendChild(newRow);
}