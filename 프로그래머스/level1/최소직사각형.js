// https://school.programmers.co.kr/learn/courses/30/lessons/86491

function solution(sizes) {
  let maxX = 0,
    maxY = 0;
  sizes.forEach((size) => {
    // 작은 값 큰값 한쪽으로 몰아주기
    const square = size.sort((a, b) => b - a);
    if (maxX < square[0]) {
      maxX = square[0];
    }
    if (maxY < square[1]) {
      maxY = square[1];
    }
  });
  return maxX * maxY;
}
