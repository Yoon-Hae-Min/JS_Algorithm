// https://school.programmers.co.kr/learn/courses/30/lessons/42888?language=javascript

function solution(record) {
  const TypeMap = {
    Enter: "들어왔습니다.",
    Leave: "나갔습니다.",
  };

  const idMap = new Map();
  let answer = [];

  record = record.map((item) => {
    const splitted = item.split(" ");
    splitted[2] && idMap.set(splitted[1], splitted[2]);
    return splitted;
  });
  record.forEach((item) => {
    const typeMessage = TypeMap[item[0]];
    typeMessage !== undefined &&
      answer.push(`${idMap.get(item[1])}님이 ${typeMessage}`);
  });

  return answer;
}
