function gift(num) {
    return num + 3;
}
function displayClg(arg) {
    // console.log(arg)
    return arg;
}
var age; // le deuxieme number est ce que doit return la function
age = gift;
console.log('age1', age(20));
age = displayClg;
console.log('age2', age(20)); // undefined
