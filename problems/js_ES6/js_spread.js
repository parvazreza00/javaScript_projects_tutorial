const q1 = ["jan","Feb","Mar"];
const q2 = ["Apr","May","Jun"];
const q3 = ["Jul","Aug","Sep"];
const q4 = ["Oct","Nov","Dec"];

const year = [...q1, ...q2, ...q3, ...q4];
// console.log(year);

const numbers = [23, 55, 21, 87, 56];
let maxValue = Math.max(...numbers);
console.log(maxValue);