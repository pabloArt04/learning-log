// Sometimes you will have information about the type of a value that TypeScript can’t know about.

// For example, if you’re using document.getElementById, TypeScript only knows that this will return some kind of HTMLElement, but you might know that your page will always have an HTMLCanvasElement with a given ID.

// In this situation, you can use a type assertion to specify a more specific type:

const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;

// You can also use the angle-bracket syntax (except if the code is in a .tsx file), which is equivalent:

const myCanvas2 = <HTMLCanvasElement>document.getElementById("main_canvas");
