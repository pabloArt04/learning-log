// type annotation is a way to explicitly specify the type of a variable
function greet(name: string) {
  console.log("Hello, " + name.toUpperCase() + "!!");
}

greet("TypeScript");
greet("JavaScript");

// TypeScript also allows you to define the return type of a function.
function add(x: number, y: number): number {
  return x + y;
}

const sum = add(5, 10);
console.log("Sum:", sum);
