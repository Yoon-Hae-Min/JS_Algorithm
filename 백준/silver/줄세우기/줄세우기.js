// https://www.acmicpc.net/problem/10431

let [num, ...testCase] = require("fs")
  .readFileSync("silver/줄세우기/input.txt")
  .toString()
  .replaceAll("\r", "")
  .split("\n");

for (let i = 0; i < Number(num); i++) {
  const [T, ...arr] = testCase[i].split(" ").map((i) => Number(i));
  let count = 0;

  arr.forEach((item, index) => {
    for (let j = 0; j < index; j++) {
      if (arr[j] > item) {
        count += 1;
      }
    }
  });
  console.log(T, count);
}

// 진짜 어이가 없네;;;; test 케이스 개수와 실제 입력하는 배열이 달라서 틀리고 있었음....
// for문으로 테스트 케이스 개수만큼 돌려야됨
