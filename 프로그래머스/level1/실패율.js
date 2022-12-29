//https://school.programmers.co.kr/learn/courses/30/lessons/42889

function solution(N, stages) {
  let answer = [];
  let numOfPeople = stages.length;

  for (let i = 1; i <= N; i++) {
    let notCleared = 0;
    stages.forEach((stage) => {
      if (stage === i) {
        notCleared++;
      }
    });
    answer.push([i, notCleared / numOfPeople]);
    numOfPeople -= notCleared;
  }

  answer = answer.sort((a, b) => b[1] - a[1]);
  return answer.map((a) => a[0]);
}
