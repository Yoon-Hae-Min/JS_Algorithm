//school.programmers.co.kr/learn/courses/30/lessons/131130

https: function solution(cards) {
  let isOpenArr = new Array(cards.length).fill(false);
  let groupCount = [];

  for (let i = 1; i <= cards.length; i++) {
    if (isOpenArr[i - 1]) continue;
    let count = 0;
    let index = i - 1;
    while (!isOpenArr[index]) {
      count += 1;
      isOpenArr[index] = true;
      index = cards[index] - 1;
    }
    groupCount.push(count);
  }
  groupCount.sort((a, b) => b - a);
  if (groupCount.length === 1) return 0;
  return groupCount[0] * groupCount[1];
}
