
// JSON

const student = {
    name: "Full Mia",
    age: 25,
    Job: "teacher"
}

const studentJSON = JSON.stringify(student);
// console.log(studentJSON);

const studentParse = JSON.parse(studentJSON);
// console.log(studentParse);

// fetch
// fetch structure



// fetch("url")
//     .then(res => res.json())
//     .then(data => console.log(data));




//Here the most important thing is to understand what kind of data we are fetching
// is it an Object? or an Array?
// or an Array inside of an object..etc etc....


// keys and values
// const student = {
//     name: "Full Mia",
//     age: 25,
//     Job: "teacher"
// }

const keys = Object.keys(student);
const values = Object.values(student);
console.log(keys, values);


// And from now on we will use forEach for an array,,,if we dont want a return,,,,,


const num = [ 23, 67, 34, 78];
// this is for forEach loop
num.forEach(num => console.log(num));
// this is for map

num.map(num => num * 2);

// we will use for of for an array like object

// and we will use for in for an object property



// remove a key value from an object

const products = [
    {name:'laptop', price: 50000, brand:'lenevo', color: "silver"},
    {name:'phone', price: 5000, brand:'iphone', color: "blue"},
    {name:'watch', price: 2000, brand:'casio', color: "black"},
    {name:'sunglass', price: 4000, brand:'ribon', color: "red"},
    {name:'camera', price: 55000, brand:'canon', color: "pink"}
];

const remaining = products.filter(product => product.name !== "phone");
console.log(remaining);











