// https://school.programmers.co.kr/learn/courses/30/lessons/17684

function solution(msg) {
  var answer = [];
  const dictionary = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let startIndex = 0;
  let endIndex = 1;

  while (endIndex <= msg.length) {
    const text = msg.slice(startIndex, endIndex);
    if (dictionary.includes(text)) {
      endIndex += 1;
      if (endIndex > msg.length) {
        answer.push(
          dictionary.indexOf(msg.slice(startIndex, endIndex - 1)) + 1
        );
      }
    } else {
      dictionary.push(text);
      answer.push(dictionary.indexOf(msg.slice(startIndex, endIndex - 1)) + 1);
      startIndex = endIndex - 1;
      endIndex = startIndex + 1;
    }
  }

  return answer;
}
