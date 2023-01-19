// https://school.programmers.co.kr/learn/courses/30/lessons/64065

function solution(s) {
  let map = new Map();
  s.replaceAll(/[{}]/g, "")
    .split(",")
    .forEach((str) => {
      const num = str - 0;
      if (map.has(num)) {
        map.set(num, map.get(num) + 1);
      } else {
        map.set(num, 1);
      }
    });

  return [...map]
    .sort((a, b) => a[1] - b[1])
    .reverse()
    .map(([key, value]) => key);
}
