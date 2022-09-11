

const products = [
    {name:'laptop', price: 50000, brand:'lenevo', color: "silver"},
    {name:'phone', price: 5000, brand:'iphone', color: "blue"},
    {name:'watch', price: 2000, brand:'casio', color: "black"},
    {name:'sunglass', price: 4000, brand:'ribon', color: "red"},
    {name:'camera', price: 55000, brand:'canon', color: "pink"}
];
// map
const brands = products.map(product => product.brand);
// 
// map for price

const prices = products.map(price => price.price);
// console.log(prices);
const names = products.map(name => name.name);
// console.log(names);

// forEach

// products.forEach(product => console.log(product));

// filter

const cheap = products.filter(product => product.price <= 5000);
// console.log(cheap);


const specificName = products.filter(product => product.name.includes('n'));
// console.log(specificName);

// find
const special = products.find(product => product.name.includes('n'));

console.log(special);

