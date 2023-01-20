

function gift(num:number) {
    return num +3
}
function displayClg(arg){
   // console.log(arg)
   return arg
}
let age: (num: number) => number; // le deuxieme number est ce que doit return la function

age = gift;

console.log('age1', age(20))
 
age = displayClg

console.log('age2', age(20)) // undefined