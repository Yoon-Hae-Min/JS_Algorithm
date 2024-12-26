let [_, ...input] = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .replaceAll("\r", "")
  .split("\n")
  .map((e) => parseInt(e));

const MAXIMUM_NUMBER = 10000;

// 1,2,3에 대한 초기값 설정
// 1: 1이상의 합으로 만들 수 있는 경우의 수
// 2: 2이상의 합으로 만들 수 있는 경우의 수
// 3: 3이상의 합으로 만들 수 있는 경우의 수
// total: 경우의 수 총합
const ResultDp = new Array(MAXIMUM_NUMBER + 1).fill({
  1: 0,
  2: 0,
  3: 0,
  total: 0,
});

ResultDp[1] = {
  1: 1,
  2: 0,
  3: 0,
  total: 1,
};
ResultDp[2] = {
  1: 1,
  2: 1,
  3: 0,
  total: 2,
};
ResultDp[3] = {
  1: 2,
  2: 0,
  3: 1,
  total: 3,
};

for (let i = 4; i <= MAXIMUM_NUMBER; i++) {
  const newResult = {
    1: ResultDp[i - 1].total,
    2: ResultDp[i - 2][2] + ResultDp[i - 2][3],
    3: ResultDp[i - 3][3],
  };
  newResult.total = newResult[1] + newResult[2] + newResult[3];

  ResultDp[i] = newResult;
}

input.forEach((n) => {
  console.log(ResultDp[n].total);
});
