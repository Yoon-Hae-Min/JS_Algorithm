// https://www.acmicpc.net/problem/23971

let input = require("fs")
  .readFileSync("bronze/ZOAC_4/input.txt")
  .toString()
  .split(" ");

console.log(
  Math.ceil(Number(input[0]) / (Number(input[2]) + 1)) *
    Math.ceil(Number(input[1]) / (Number(input[3]) + 1))
);
