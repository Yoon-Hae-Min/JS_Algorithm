// https://school.programmers.co.kr/learn/courses/30/lessons/12911

function solution(n) {
  const originalOneCount = n.toString(2).split("1").length - 1;
  do {
    ++n;
  } while (n.toString(2).split("1").length - 1 !== originalOneCount);
  return n;
}
