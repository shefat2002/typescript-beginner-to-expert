# TypeScript Basics

## Table of Contents
- [Variables](#variables)
- [Data Types](#data-types)
- [Functions](#functions)
- [Type Aliases](#type-aliases)

## Variables

TypeScript uses `let` and `const` for variable declarations:

```typescript
const countryname = "Bangladesh";  // Cannot be reassigned
let isActive: boolean;             // Can be reassigned
isActive = true;
```

## Data Types

### Boolean
```typescript
let isActive: boolean;
isActive = true;
```

### Number
```typescript
let age: number;
age = 10;

// BigInt for large numbers (2^53 - 1 and above)
const largeNumber = BigInt(9999999999999999);
```

### String
```typescript
let color: string;
let fullName = "Shefat";

// Template literals
let sentence = `Hello, This is ${fullName}.`;
```

### Object
```typescript
const user = {
  name: "Alice",
  age: 20,
  isAdmin: true,
};
```

### Any
The `any` type bypasses type checking. Use sparingly.

```typescript
let a;        // Defaults to any
let b: any;   // Explicit any

b = 10;
b = "Shefat"; // No type error
```

### Array
```typescript
// Array with specific types
let c: (string | number | boolean)[] = [];

c.push(1);
c.push("hello");
c.push(true);

c.forEach((element) => {
  console.log(element);
});
```

## Functions

### Function Type
```typescript
let myFunc: Function;

myFunc = () => {
  console.log("ok");
};

myFunc();
```

### Parameterized Function
Parameters can have optional and default values:

```typescript
const myfunc2 = (
  a: string,
  b: string,
  c?: string,        // Optional parameter
  d: string = "adsad" // Default parameter
) => {
  console.log(`${a} + ${b} + ${c} + ${d}`);
};

myfunc2("abcd", "defg");
// Output: "abcd + defg + undefined + adsad"
```

### Return Type
Explicitly declare return types:

```typescript
const myFunc3 = (a: number, b: number): number => {
  return a + b;
};

console.log(myFunc3(10, 30)); // 40
```

### Function Signatures
Define the shape of function variables:

```typescript
// No parameters, returns nothing
let funcSign: () => void;

// Two numbers, returns number
let add: (x: number, y: number) => number;

// Complex signature
let users: (
  id: number | string,
  userinfo: { name: string; age: number }
) => void;

users = (id: number | string, user: { name: string; age: number }) => {
  // implementation
};
```

## Type Aliases

Create reusable type definitions for complex types:

### Without Alias (Verbose)
```typescript
const userDetails = (
  id: string | number,
  user: { name: string; age: number },
) => {
  console.log(`User id is ${id}, name is ${user.name} and age ${user.age}`);
};

const SayHello = (user: { name: string; age: number }) => {
  console.log(`Hello ${user.age > 50 ? "Sir" : "Mr."} ${user.name}`);
};
```

### With Alias (Clean)
```typescript
type stringOrNum = string | number;
type userType = { name: string; age: number };

const userDetails2 = (id: stringOrNum, user: userType) => {
  console.log(`User id is ${id}, name is ${user.name} and age ${user.age}`);
};

const SayHello2 = (user: userType) => {
  console.log(`Hello ${user.age > 50 ? "Sir" : "Mr."} ${user.name}`);
};
```

**Benefits of Type Aliases:**
- Reusable across multiple functions
- Self-documenting code
- Easier to update types in one place
