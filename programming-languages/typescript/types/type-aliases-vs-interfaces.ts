// Extending an interface

// interface Animal {
//   name: string;
// }

// interface Bear extends Animal {
//   honey: boolean;
// }

// const bear = getBear();
// bear.name;
// bear.honey;

// Extending a type via intersections

// type Animal = {
//   name: string;
// }

// type Bear = Animal & {
//   honey: boolean;
// }

// const bear = getBear();
// bear.name;
// bear.honey;

// Adding new fields to an existing interface

// interface Window {
//   title: string;
// }

// interface Window {
//   ts: TypeScriptAPI;
// }

// const src = 'const a = "Hello World"';
// window.ts.transpileModule(src, {});

// A type cannot be changed after being created

// type Window = {
//   title: string;
// }

// type Window = {
//   ts: TypeScriptAPI;
// }

//  // Error: Duplicate identifier 'Window'.
