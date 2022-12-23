//https://school.programmers.co.kr/learn/courses/30/lessons/120924

function solution(common) {
  let answer = 0;
  if (common[2] - common[1] === common[1] - common[0]) {
    answer = common[common.length - 1] + (common[2] - common[1]);
  } else if (common[2] / common[1] === common[1] / common[0]) {
    answer = common[common.length - 1] * (common[2] / common[1]);
  }

  return answer;
}
