// https://school.programmers.co.kr/learn/courses/30/lessons/120956?language=javascript

function solution(babbling) {
  let answer = 0;
  const speeches = ["aya", "ye", "woo", "ma"];
  babbling.forEach((item) => {
    let left = item;
    speeches.forEach((speech) => {
      left = left.replace(speech, " ");
    });
    if (left.trim() === "") answer++;
  });
  return answer;
}
