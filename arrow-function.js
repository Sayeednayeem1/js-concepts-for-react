

// arrow function self test

// even

const isEven = number =>{
    if(number % 2 === 0){
        return ("is an even number")
    }
    else{
        return ("is an Odd number")
    }
}
const result = isEven(57);
// console.log(result);

const sum = num => num + num;
const result1 = sum(50);
console.log(result1);