// https://school.programmers.co.kr/learn/courses/30/lessons/12921

function solution(n) {
  let isPrimeNumber = new Array(n + 1).fill(true);
  isPrimeNumber[0] = false;
  isPrimeNumber[1] = false;
  for (let i = 2; i <= n; i++) {
    let index = 2;
    let j = i * index;
    while (j <= n) {
      isPrimeNumber[j] = false;
      index += 1;
      j = i * index;
    }
  }
  const answer = isPrimeNumber.reduce((acc, cur) => {
    return cur ? (acc += 1) : acc;
  }, 0);
  return answer;
}
