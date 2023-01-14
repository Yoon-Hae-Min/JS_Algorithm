// https://school.programmers.co.kr/learn/courses/30/lessons/12981#

function solution(n, words) {
  const said = new Set(words);
  // 2번 이상 말했을 경우 Set에서는 존재하지 않게됨
  let theLastWordBefore = "";
  let num = 0,
    order = 0;
  for (let i = 0; i < words.length; i++) {
    // 이전의 마지막 문자와 첫번째 문자가 다르거나 말했던 내용이 나오먄 탈락자 발생
    if (
      (theLastWordBefore && words[i].charAt(0) !== theLastWordBefore) ||
      !said.delete(words[i])
    ) {
      num = Math.ceil((i + 1) / n);
      order = (i + 1) % n || n;
      break;
    }

    theLastWordBefore = words[i].charAt(words[i].length - 1);
  }

  return [order, num];
}
