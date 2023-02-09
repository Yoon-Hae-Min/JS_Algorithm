// https://school.programmers.co.kr/learn/courses/30/lessons/92335/solution_groups?language=javascript&type=all

const isPrimeNumber = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

function solution(n, k) {
  let answer = 0;
  const convertedN = n.toString(k);
  if (!convertedN.includes("0")) {
    return isPrimeNumber(parseInt(convertedN)) ? 1 : 0;
  } else {
    let endIndex = 0,
      startIndex = 0;
    while (endIndex !== convertedN.length) {
      startIndex = endIndex;
      endIndex = convertedN.indexOf("0", startIndex + 1);
      if (endIndex === -1) {
        endIndex = convertedN.length;
      }
      if (isPrimeNumber(parseInt(convertedN.slice(startIndex, endIndex)))) {
        answer += 1;
      }
    }
  }

  return answer;
}

// split함수를 이용하면 쉽게 풀수 있었다 사실 index를 보면서 하는 방법이 split으로 쪼개는거랑 같은 로직이다.
