// https://school.programmers.co.kr/learn/courses/30/lessons/118667

function solution(queue1, queue2) {
  let queue1Sum = queue1.reduce((acc, cur) => acc + cur);
  let queue2Sum = queue2.reduce((acc, cur) => acc + cur);
  const queue = [...queue1, ...queue2];
  let [queue1Start, queue1End, queue2Start, queue2End] = [
    0,
    queue1.length - 1,
    queue1.length - 0,
    queue.length - 1,
  ];
  let result = 0;
  const mid = (queue1Sum + queue2Sum) / 2;
  if (
    queue1.some((item) => item > mid) ||
    queue2.some((item) => item > mid) ||
    (queue1Sum + queue2Sum) % 2 !== 0
  )
    return -1;

  const plusIndex = (index) => {
    if (index >= queue.length - 1) {
      return 0;
    } else {
      return index + 1;
    }
  };

  while (queue1Sum !== queue2Sum) {
    if (result >= queue1.length * 3) return -1;
    if (queue1Sum > queue2Sum) {
      queue1Sum -= queue[queue1Start];
      queue2Sum += queue[queue1Start];
      queue1Start = plusIndex(queue1Start);
      queue2End = plusIndex(queue2End);
    } else {
      queue1Sum += queue[queue2Start];
      queue2Sum -= queue[queue2Start];
      queue2Start = plusIndex(queue2Start);
      queue1End = plusIndex(queue1End);
    }
    result += 1;
  }

  return result;
}
