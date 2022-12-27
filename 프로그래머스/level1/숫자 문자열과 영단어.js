// https://school.programmers.co.kr/learn/courses/30/lessons/81301

function solution(s) {
  let answer = s;
  const numberMap = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  numberMap.forEach((englishNumber, index) => {
    answer = answer.replaceAll(englishNumber, index);
  });
  return answer - 0;
}
