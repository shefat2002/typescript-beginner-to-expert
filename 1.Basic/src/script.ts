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

// parameterized function (void)
const myfunc2 = (a: string, b: string, c?: string, d: string = "adsad") => {
  console.log(`${a} + ${b} + ${c} + ${d}`);
};

myfunc2("abcd", "defg");

// return type

const myFunc3 = (a: number, b: number): number => {
  return a + b;
};

console.log(myFunc3(10, 30));


// Function Signatures
let funcSign: () => void;
let add: (x: number, y: number) => number;
let users: (id: number | string, userinfo:{
  name: string,
  age: number
}) => void;

users = (id: number | string, user:{
  name: string,
  age: number
}) =>{
  
};


//----- Alias -----

//Without Alias
const userDetails = (
  id: string | number,
  user: { name: string; age: number },
) => {
  console.log(`User id is ${id}, name is ${user.name} and age ${user.age}`);
};

const SayHello = (user: { name: string; age: number }) => {
  console.log(`Hello ${user.age > 50 ? "Sir" : "Mr."} ${user.name}`);
};

// With Alias
type stringOrNum = string | number;
type userType = { name: string; age: number };

const userDetails2 = (id: stringOrNum, user: userType) => {
  console.log(`User id is ${id}, name is ${user.name} and age ${user.age}`);
};

const SayHello2 = (user: userType) => {
  console.log(`Hello ${user.age > 50 ? "Sir" : "Mr."} ${user.name}`);
};


