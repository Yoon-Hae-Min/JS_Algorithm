// https://school.programmers.co.kr/learn/courses/30/lessons/120907

function solution(quiz) {
  var answer = [];
  quiz.forEach((item) => {
    const arr = item.split(" ");
    const sign = arr[1] === "+" ? 1 : -1;
    +arr[0] + +arr[2] * sign === +arr[4] ? answer.push("O") : answer.push("X");
  });
  return answer;
}
