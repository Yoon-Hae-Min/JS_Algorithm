// https://www.acmicpc.net/problem/20125

let [num, ...testCase] = require("fs")
  .readFileSync("silver/쿠키의_신체_측정/input.txt")
  .toString()
  .replaceAll("\r", "")
  .split("\n");
testCase = testCase.map((str) => str.split(""));

const getLeftStarLength = (heart) => {
  let idx = 0;
  while (
    heart[1] - idx - 1 >= 0 &&
    testCase[heart[0]][heart[1] - idx - 1] === "*"
  ) {
    idx++;
  }
  return idx;
};

const getRightStarLength = (heart) => {
  let idx = 0;
  while (
    heart[1] + idx < num &&
    testCase[heart[0]][heart[1] + idx + 1] === "*"
  ) {
    idx++;
  }
  return idx;
};

const getBottomStarLength = (heart) => {
  let idx = 0;
  while (
    heart[0] + idx + 1 < num &&
    testCase[heart[0] + idx + 1][heart[1]] === "*"
  ) {
    idx++;
  }
  return idx;
};

// 로직 시작 지점
let heartIdx;
let tailboneIdx;

// 머리 찾기
for (let i = 0; i < num; i++) {
  for (let j = 0; j < num; j++) {
    if (testCase[i][j] === "*") {
      heartIdx = [i + 1, j];
      break;
    }
  }
  if (heartIdx) break;
}
tailboneIdx = [heartIdx[0] + getBottomStarLength(heartIdx), heartIdx[1]];
// 꼬리뼈 찾기

console.log(heartIdx[0] + 1, heartIdx[1] + 1);
console.log(
  getLeftStarLength(heartIdx),
  getRightStarLength(heartIdx),
  getBottomStarLength(heartIdx),
  getBottomStarLength([tailboneIdx[0], tailboneIdx[1] - 1]),
  getBottomStarLength([tailboneIdx[0], tailboneIdx[1] + 1])
);
