// https://school.programmers.co.kr/learn/courses/30/lessons/12977

function solution(nums) {
  let answer = 0;
  const primeNumbers = getPrimeNumberArr(3000);
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const sum = nums[i] + nums[j] + nums[k];
        if (primeNumbers.includes(sum)) {
          answer += 1;
        }
      }
    }
  }
  return answer;
}

function getPrimeNumberArr(n) {
  let isPrimeNumber = new Array(n + 1).fill(0).map((_, i) => i);
  isPrimeNumber[0] = false;
  isPrimeNumber[1] = false;
  for (let i = 2; i <= n; i++) {
    let index = 2;
    let j = i * index;
    while (j <= n) {
      isPrimeNumber[j] = null;
      index += 1;
      j = i * index;
    }
  }
  const answer = isPrimeNumber.filter((num, index) => num && true);
  return answer;
}
