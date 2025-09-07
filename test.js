const [a, b] = [1, 2, 3, 4, 45, 5];
console.log(a + b);


const { x, y, z } = { x: 1, y: 2, z: 3 };
console.log(y)

const numbers = [1, 2, 3, 4, 5];
let output = numbers.filter(n => n % 2);
console.log(output);



const product = { name: 'Laptop', model: 'Yoga 3', price: 49000, dusk: '512SSD' }
const {price} = product;
console.log(price);

const test = NaN;
if (test) {
    console.log('truthy');
} else {
    console.log('falsy')
}