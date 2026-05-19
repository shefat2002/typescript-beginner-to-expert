const countryname = "Bangladesh";
console.log(countryname);

//----- Data Types -----
// let, const

// boolean
let isActive: boolean;
isActive = true;

// number
let age: number;
age = 10;
const largeNumber = BigInt(9999999999999999); // 2^53 - 1

// string
let color: string;
let fullName = "Shefat";
let sentence = `Hello, This is ${fullName}.`;

// object
const user = {
  name: "Alice",
  age: 20,
  isAdmin: true,
};

// any
let a; // by default any Type
let b: any;

b = 10;
b = "Shefat";

let c: (string | number | boolean)[] = []; // any type of array
c.push(1);
c.push("hello");
c.push(true);

c.forEach((element) => {
  console.log(element);
});

// ----- function -----

// function type
let myFunc: Function;

myFunc = () => {
  console.log("ok");
};

myFunc();

// parameterized function
const myfunc2 = (a: string, b: string) => {
  console.log(`${a} + ${b}`);
};

myfunc2("abcd", "defg");
