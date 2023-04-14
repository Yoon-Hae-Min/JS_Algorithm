//https://www.acmicpc.net/problem/2292

let input = require("fs").readFileSync("bronze/벌집/input.txt").toString();

let endPoint = 1;
let index = 1;

while (input > endPoint) {
  endPoint += 6 * index;
  index += 1;
}
console.log(index);
