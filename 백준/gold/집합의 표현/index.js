let [[n, m], ...row] = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .split("\n")
  .map((e) => e.split(" ").map((e) => parseInt(e)));

const SetArrays = Array.from({ length: n + 1 }, (_, i) => i);

const getParent = (num) => {
  if (SetArrays[num] !== num) {
    SetArrays[num] = getParent(SetArrays[num]);
  }
  return SetArrays[num];
};

const union = (a, b) => {
  const rootA = getParent(a);
  const rootB = getParent(b);

  if (rootA !== rootB) {
    SetArrays[rootB] = rootA;
  }
};

row.forEach(([flag, a, b]) => {
  if (flag === 0) {
    union(a, b);
  } else if (flag === 1) {
    console.log(getParent(a) === getParent(b) ? "YES" : "NO");
  }
});
