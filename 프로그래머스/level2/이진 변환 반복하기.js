// https://school.programmers.co.kr/learn/courses/30/lessons/70129

function solution(s) {
  let removeZeroSum = 0;
  let count = 0;
  let num = s;
  while (num !== "1") {
    const zeroLengthAfterRemove = num.replaceAll("0", "").length - 0;
    const removeZeroNum = num.length - 0 - zeroLengthAfterRemove;
    removeZeroSum += removeZeroNum;
    num = zeroLengthAfterRemove.toString(2);
    count += 1;
  }
  return [count, removeZeroSum];
}
