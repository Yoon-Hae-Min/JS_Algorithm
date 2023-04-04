// https://school.programmers.co.kr/learn/courses/30/lessons/60058

function solution(p) {
  return parenthesesString(p);
}

function parenthesesString(p) {
  let i = 0;
  let match = 0;
  for (i = 0; i < p.length; i++) {
    if (p.charAt(i) === ")") {
      match += 1;
    } else {
      match -= 1;
    }
    if (match === 0) break;
  }
  // 규칙1 u,v로 분리하기 위한 작업

  const u = p.substring(0, i + 1);
  const v = p.substring(i + 1);
  // i를 기준으로 올바른 괄호 문자열과 나머지를 나눈다.

  if (match === 0 && u.charAt(0) === ")") {
    // 규칙3 u가 올바른 괄호 문자열이 아니면
    return (
      "(" +
      parenthesesString(v) +
      ")" +
      u.substring(1, u.length - 1).replaceAll(/\(|\)/g, (char) => {
        return char === "(" ? ")" : "(";
      })
    );
  } else {
    // 규칙2 u가 올바른 괄호 문자열이면
    if (v.length === 0) return u;
    return u + parenthesesString(v);
  }
}
