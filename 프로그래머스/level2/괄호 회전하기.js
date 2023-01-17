// https://school.programmers.co.kr/learn/courses/30/lessons/76502

function solution(s) {
  let brackets = s.split("");
  let answer = 0;
  const bracketMap = {
    "{": "}",
    "[": "]",
    "(": ")",
  };

  const bracketsValidator = () => {
    let stack = [];
    for (let j = 0; j < brackets.length; j++) {
      if (Object.values(bracketMap).includes(brackets[j])) {
        // brackets[j]가 닫힘 괄호라면 stack에서 괄호를 꺼냄
        if (bracketMap[stack.pop()] !== brackets[j]) {
          // 꺼낸 괄호의 짝이 맞지 않으면 올바르지 않은 괄호
          return false;
        }
      } else {
        // brackets[j]가 열림 괄호라면 stack에 괄호 추가
        stack.push(brackets[j]);
      }
    }
    return stack.length === 0;
    // 스택이 비어있으면 모두 올바르게 짝이 되어 true를 return
  };

  for (let i = 0; i < s.length; i++) {
    bracketsValidator() && answer++;
    brackets.push(brackets.shift());
  }

  return answer;
}
