// let arr = [2,3,5];
// console.log(arr);
// // map() method is use to create a new array 
// let save = arr.map((value,index,array)=>{
//     console.log(value,index,array);
//     return value+index;
// })
// console.log(save);

// // Filter() method in array
// let arr2 = [2,45,75,2,1,33]
// let a2 = arr2.filter((value)=>{
//     return value>10;
// })
// console.log(a2);

let arr3 =[1,2,4,5,2,3,5,1];
// let a3 = arr3.reduce((a,b)=>{
//     return a+b;
// })
// or 
const reduce_func= (a,b)=>{
    return a+b;
}

let a3 = arr3.reduce(reduce_func);
console.log(a3)