// https://school.programmers.co.kr/learn/courses/30/lessons/43162

function solution(n, computers) {
  let isVisited = new Array(n).fill(false);
  let answer = 0;
  for (let i = 0; i < n; i++) {
    if (isVisited[i]) continue;
    DFS(isVisited, computers[i], computers);
    answer += 1;
  }
  return answer;
}

function DFS(isVisited, current, computers) {
  for (let i = 0; i < current.length; i++) {
    if (isVisited[i]) continue;
    if (current[i]) {
      isVisited[i] = true;
      DFS(isVisited, computers[i], computers);
    }
  }
}
