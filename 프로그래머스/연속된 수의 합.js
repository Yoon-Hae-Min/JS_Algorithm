// https://school.programmers.co.kr/learn/courses/30/lessons/120923

function solution(num, total) {
  let startNum = Math.trunc(total / num) - Math.trunc(num / 2);
  total % num !== 0 && startNum++;
  return new Array(num).fill(0).map((_) => startNum++);
}
