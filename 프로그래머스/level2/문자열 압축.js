// https://school.programmers.co.kr/learn/courses/30/lessons/60057#

function solution(s) {
  let minLength = Infinity;
  for (let i = 0; i <= s.length / 2; i++) {
    let currentStr = s.substr(0, i + 1);
    let length = 0; // 압축된 문자열의 길이
    let flagNumber = 1; // 압축된 문자열의 개수
    for (let j = i + 1; j < s.length; j += i + 1) {
      if (currentStr === s.substr(j, i + 1)) {
        flagNumber += 1;
      } else {
        length += currentStr.length + CompressedNum(flagNumber);
        flagNumber = 1;
        currentStr = s.substr(j, i + 1); // 다음 문자열로 변경
      }
    }
    length += currentStr.length + CompressedNum(flagNumber);
    // 마지막 문자열 처리
    if (minLength > length) minLength = length;
  }
  return minLength;
}

// 압축된게 있으면 숫자의 자리수 없으면 0
function CompressedNum(flagNumber) {
  return flagNumber > 1 ? flagNumber.toString().length : 0;
}
