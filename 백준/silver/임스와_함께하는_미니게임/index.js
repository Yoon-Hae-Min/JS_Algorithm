// https://www.acmicpc.net/problem/25757

let [num, ...persons] = require("fs")
  .readFileSync("silver/임스와_함께하는_미니게임/input.txt")
  .toString()
  .replaceAll("\r", "")
  .split("\n");

let gameMap = {
  Y: 1,
  F: 2,
  O: 3,
};
const [N, game] = num.split(" ");
const set = new Set();
for (let i = 0; i < N; i++) {
  set.add(persons[i]);
}

console.log(Math.floor(set.size / gameMap[game]));
