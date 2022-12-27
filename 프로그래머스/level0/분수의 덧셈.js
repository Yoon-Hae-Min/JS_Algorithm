// https://school.programmers.co.kr/learn/courses/30/lessons/120808

function solution(denum1, num1, denum2, num2) {
  const denum = denum1 * num2 + denum2 * num1;
  const num = num1 * num2;

  const g = gcd(num, denum);
  return [denum / g, num / g];
}

function gcd(num1, num2) {
  if (num2 === 0) return num1;
  return gcd(num2, num1 % num2);
}
