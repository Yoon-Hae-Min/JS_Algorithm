// https://school.programmers.co.kr/learn/courses/30/lessons/72410

function solution(new_id) {
  const checkId = [
    (id) => {
      return id.toLowerCase();
    },
    (id) => {
      return id.replaceAll(/[^\w-_.]/g, "");
    },
    (id) => {
      return id.replaceAll(/\.{2,}/g, ".");
    },
    (id) => {
      return id.replaceAll(/^[.]|[.]$/g, "");
    },
    (id) => {
      return !id ? "a" : id;
    },
    (id) => {
      return id.length >= 16 ? id.substring(0, 15).replace(/[.]$/g, "") : id;
    },
    (id) => {
      let new_id = id;
      while (new_id.length < 3) {
        new_id += new_id[new_id.length - 1];
      }
      return new_id;
    },
  ];

  return checkId.reduce((acc, cur) => {
    return cur(acc);
  }, new_id);
}

// 굳이 array로 시간은 더 쓰는것보다는 함수들을 뒤에 붙여서 new_id.replace.replace.... 이런 형식으로 주는게 더 나았을것 같다.
