// https://school.programmers.co.kr/learn/courses/30/lessons/42884

function solution(routes) {
  routes.sort((a, b) => a[1] - b[1]);
  let answer = 1;
  let current = routes[0][1];
  for (let i = 0; i < routes.length; i++) {
    if (current > routes[i][0] && current > routes[i][1]) {
      current = routes[i][1];
    }
    if (current < routes[i][0]) {
      answer += 1;
      current = routes[i][1];
    }
  }
  return answer;
}
