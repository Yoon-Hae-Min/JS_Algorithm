//https://school.programmers.co.kr/learn/courses/30/lessons/120876

function solution(lines) {
  let answer = 0;
  let arr = new Array(201);
  arr.fill(0);
  for (let i = 0; i < lines.length; i++) {
    for (let j = lines[i][0] + 100; j < lines[i][1] + 100; j++) {
      arr[j]++;
      if (arr[j] === 2) {
        answer++;
      }
    }
  }

  return answer;
}
