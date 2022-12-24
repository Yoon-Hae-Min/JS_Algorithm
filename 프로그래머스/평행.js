//https://school.programmers.co.kr/learn/courses/30/lessons/120875

function solution(dots) {
  let answer = 0;
  let combination = [
    [0, 1, 2, 3],
    [0, 2, 1, 3],
    [0, 3, 1, 2],
  ];

  for (let i = 0; i < combination.length; i++) {
    const c = combination[i];
    const p1 = dots[c[0]]; // [x,y]
    const p2 = dots[c[1]];
    const p3 = dots[c[2]];
    const p4 = dots[c[3]];
    if (gradient(p1, p2) === gradient(p3, p4)) {
      answer = 1;
      break;
    }
  }

  return answer;
}

function gradient(p1, p2) {
  return Math.abs(p1[1] - p2[1], 2) / Math.abs(p1[0] - p2[0], 2);
}
