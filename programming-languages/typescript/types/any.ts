// TypeScript also has a special type, any, that you can use whenever you don’t want a particular value to cause typechecking errors.

function log(value: any) {
  console.time("log");
  console.log(value);
  console.timeEnd("log");
}

const values: any = [14, 22, 3.4, "hello", true, { name: "John" }];
values.forEach((value: any) => {
  log(value);
});
