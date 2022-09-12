

// truthy
let myTest = 5;
if(myTest){
    console.log(myTest * 5);
}
else{
    console.log("falsy Values");
}

// ternary
// shortcut version of if else

const money = 200;

let food = money > 100 ? "Biryani" : "Parata, Vaji";
console.log(food);

// number to string

const num = 20;
const numStr = num + '';


// console.log(numStr);

// shortcut of truthy

const isTrue = true;

const showUser = () => console.log('Display User');
const hideUser = () => console.log('hide user');

isTrue ? showUser() : hideUser();