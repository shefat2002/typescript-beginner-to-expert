const names: string[] = ["Alice", "Bob", "Charlie"];
const numbers: number[] = [1, 2, 3, 4, 5];

const mixed: (string | number)[] = ["Alice", 1, "Bob", 2];

names.push("David");
numbers.push(6);

console.log(names);
console.log(numbers);
console.log(mixed);

/*
Remove elements from the arrays using pop(), shift(), and splice()
pop() - removes the last element from an array
shift() - removes the first element from an array
splice() - removes elements from an array at a specific index
*/

// Remove the last element from the names array
names.pop();
console.log("Remove last element using pop():", names);

// Remove the first element from the numbers array
numbers.shift();
console.log("Remove first element using shift():", numbers);

// Remove an element at a specific index from the mixed array
const indexToRemove = 2;
mixed.splice(indexToRemove, 1);
console.log(`Remove element at index ${indexToRemove} using splice():`, mixed);
