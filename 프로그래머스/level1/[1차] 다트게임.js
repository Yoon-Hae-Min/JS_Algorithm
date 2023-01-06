// https://school.programmers.co.kr/learn/courses/30/lessons/17682

function solution(dartResult) {
  let index = -1;
  let scores = dartResult
    .replaceAll(/([A-Z#*])/g, " ")
    .split(" ")
    .filter((item) => item !== "")
    .map((score) => score - 0); // 숫자만 추출
  let operators = dartResult.replaceAll(/([0-9])/g, "").split(""); // 부호만 추출

  // 각각의 연산자에 대한 연산처리
  operators.forEach((operator) => {
    if (operator === "S") {
      index += 1;
    } else if (operator === "D") {
      index += 1;
      scores[index] = Math.pow(scores[index], 2);
    } else if (operator === "T") {
      index += 1;
      scores[index] = Math.pow(scores[index], 3);
    } else if (operator === "*") {
      if (index - 1 >= 0) scores[index - 1] *= 2;
      scores[index] *= 2;
    } else if (operator === "#") {
      scores[index] *= -1;
    } else {
      throw new Error("유효하지 않는 연산자 입니다.");
    }
  });

  return scores.reduce((a, b) => a + b); // 점수 합산
}
