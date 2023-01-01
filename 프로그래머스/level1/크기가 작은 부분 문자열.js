// https://school.programmers.co.kr/learn/courses/30/lessons/147355?language=javascript
function solution(t, p) {
  let answer = 0;
  for (i = 0; i <= t.length - p.length; i++) {
    t.substr(i, p.length) - 0 <= p - 0 && answer++;
  }

  return answer;
}
