// https://school.programmers.co.kr/learn/courses/30/lessons/68644

function solution(numbers) {
  let set = new Set();
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      set.add(numbers[i] + numbers[j]);
    }
  }
  return Array.from(set).sort((a, b) => a - b);
}
