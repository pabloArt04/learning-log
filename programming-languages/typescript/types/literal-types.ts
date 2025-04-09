type Direction = "left" | "right" | "up" | "down";

function move(dir: Direction) {
  console.log(`Moving ${dir}`);
}

move("left"); // ✅
// move("back"); // ❌ Error
