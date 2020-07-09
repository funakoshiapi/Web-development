let map = "";
const height = 8;

let xSize = Math.floor(height / 2);

for (let i = 0; i < xSize; i += 1) {
  map += "# ";
}

for (let i = 0; i <= height; i += 1) {
  if (i % 2 === 1) {
    console.log(" " + map);
  } else {
    console.log(map);
  }
}
