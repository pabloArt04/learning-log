// A union type is a type formed from two or more other types

function printId(id: number | string) {
  if (typeof id === "string") {
    console.log("Your ID is: " + id.toUpperCase());
  }
  console.log("Your ID is: " + id);
}

// Return type is inferred as number[] | string
function getFirstThree(x: number[] | string) {
  return x.slice(0, 3);
}

printId(1);
printId("1a");
