const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [S, T] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .replaceAll("\r", "")
  .split("\n");

let SArray = S.split("");
let TArray = T.split("");

const DFS = (nextArray) => {
  let result1 = false;
  let result2 = false;

  if (nextArray.length === SArray.length) {
    return nextArray.join("") === SArray.join("");
  }

  if (nextArray.at(-1) === "A") {
    result1 = DFS(nextArray.slice(0, -1));
  }
  if (nextArray.at(0) === "B") {
    result2 = DFS(nextArray.reverse().slice(0, -1));
  }

  return result1 || result2;
};

console.log(DFS(TArray) ? 1 : 0);
