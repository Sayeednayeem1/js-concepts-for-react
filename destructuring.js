

// array destructuring

// simply but we wont use this method
const numbers = [20, 30];

const a = numbers[0];
const b= numbers[1];
// console.log(a, b);
// we will use this method

const [x, y] = [50, 60];
const [c, d] = numbers;
// console.log(x,y);
// using function

function boxify(num1, num2){
    const nums = [num1, num2];
    return nums;
}


const result = boxify(20, 50);
const [g, f] = result;

// console.log(g, f);
// object destructuring

const {name, age} ={
    name: "Kochu Mia",
    age: 25
};

console.log(name, age);

const students  = {
    names:{
        std1: 'Kochu Mia',
        std2: "Full Mia",
        std3: "Modhumoti Begum"
    },
    class: 6
};
const {std2, std3} = students.names;
console.log(std2, std3);

// optional Chaining

const players = {
    names: {
        players1: "Herrera",
        players2: "hextor",
        players3: "lucas",
        specialPlayers: {
            spPlayers1: "Ronaldo",
            spPlayers2: "Messi",
            spPlayers3: "Salah",
            spPlayers4: "Benzema"
        }
    }
};

const {spPlayers1, spPlayers4} = players?.names?.specialPlayers;
console.log(spPlayers1, spPlayers4);