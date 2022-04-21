/*
    ES6
        + let, const 
        + map, filter, reduce, some, every
        + array destructering , object destructering
        + template literals,
        + arrow function
        + yield
        + getter, setter
        + class
*/

// Object destructering
const player = {
  name: "Cristian Ronaldo",
  age: 38,
  club: "HAGL",
  address: {
    street: "Pham Ngu Lao",
    no: 123,
    age: 12,
  },
};

const playerClub = player.club;
// const key = "club";
// const playerClub = player[key];
// const playerClub = player['club'];
// console.log("playerClub-", playerClub);

const {
  name,
  age,
  club,
  address: { street, no, age: addressAge },
} = player;
// const { street, no } = address;
console.log("age-", age);
console.log("addressAge-", addressAge);
console.log(street);

const students = ["Hung", "Khanh", "Tri"];
const [a, b] = students;
console.log("a-", a);
console.log("b-", b);

// String template/ template literals
const studentName = "Alex";
const studentClass = "Basic programing";
//backtick
const letter = `
    Hi ${studentName},
    Class: ${studentClass}
`;

console.log(letter);

// naming function
function hello() {
  console.log("Hello world");
}

// expresion function
const hello_1 = function () {
  console.log("Hello Viet Nam");
};

hello();
hello_1();

// Arrow function
const helloArrowFunction = (str) => {
  console.log(str);
};

helloArrowFunction("hello mindx");

// Get sum: a and b
const sum = function (a, b) {
  return a + b;
};

const sum_1 = (a, b) => {
  return a + b;
};

const sum_2 = (a, b) => a + b;
console.log(sum_1(4, 5));
console.log(sum_2(14, 5));


// CLI - Command line interface
// CRA - create-react-app
