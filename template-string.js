// this is a simple practice template string

const name = "Khan";
const age = 48;
const country = "Bangladesh";

const student = {
    name: "Modoris Mia",
    age: 60,
    profession: "Aduvai"
}

const result = `My name is ${name}. I am ${age} years old. I am from ${country}. Its a pleasure to meeting you in person.`;
// console.log(result);

const result2 = `Hi! I am ${student.name}. I am ${student.age} years old. I am professionaly an ${student.profession}. Nice to meeting you in person.`;
console.log(result2);