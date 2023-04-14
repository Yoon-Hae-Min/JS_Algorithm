//https:/ / www.acmicpc.net / problem / 5073;

let sideArr = require("fs")
  .readFileSync("bronze/삼각형과_세_변/input.txt")
  .toString()
  .replaceAll("\r", "")
  .split("\n")
  .map((e) => e.split(" ").map((e) => Number(e)));

sideArr.forEach((lines) => {
  lines = lines.sort((a, b) => a - b);
  if (lines[0] !== 0 && lines[1] !== 0 && lines[2] !== 0) {
    if (lines[0] + lines[1] <= lines[2]) {
      console.log("Invalid");
    } else if (lines[0] === lines[2]) {
      console.log("Equilateral");
    } else if (lines[0] === lines[1] || lines[1] === lines[2]) {
      console.log("Isosceles");
    } else {
      console.log("Scalene");
    }
  }
});
