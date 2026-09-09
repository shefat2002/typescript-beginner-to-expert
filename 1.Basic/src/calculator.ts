function add(a: number, b: number): number {
  return a + b;
}
function sub(a: number, b: number): number {
  return a - b;
}
function mul(a: number, b: number): number {
  return a * b;
}
function div(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
}

let num1: number = 10;
let num2: number = 5;

let resultAdd: number = add(num1, num2);
let resultSub: number = sub(num1, num2);
let resultMul: number = mul(num1, num2);
let resultDiv: number = div(num1, num2);

console.log(`Addition: ${resultAdd}`);
console.log(`Subtraction: ${resultSub}`);
console.log(`Multiplication: ${resultMul}`);
console.log(`Division: ${resultDiv}`);
