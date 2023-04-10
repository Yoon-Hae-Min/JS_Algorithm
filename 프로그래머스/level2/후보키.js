// https://school.programmers.co.kr/learn/courses/30/lessons/42890#

function solution(relation) {
  let keys = [];
  for (let i = 1; i <= relation[0].length; i++) {
    const combinationResult = combination(0, relation[0].length, i);
    for (let j = 0; j < combinationResult.length; j++) {
      if (validSubset(keys, combinationResult[j])) continue;
      const isDuplicated = validDuplicate(
        relation.map((r) => {
          let str = "";
          combinationResult[j].map((item) => {
            str += r[item];
          });
          return str;
        })
      );
      if (!isDuplicated) {
        keys.push(combinationResult[j]);
      }
    }
  }
  return keys.length;
}

function validSubset(keys, arr) {
  for (let i = 0; i < keys.length; i++) {
    let leftCount = keys[i].length;
    let a = 0,
      k = 0;
    while (a < arr.length && k < keys[i].length) {
      if (arr[a] === keys[i][k]) {
        leftCount -= 1;
        a += 1;
        k += 1;
      } else if (arr[a] > keys[i][k]) {
        k += 1;
      } else {
        a += 1;
      }
    }
    if (leftCount === 0) {
      return true;
    }
  }
  return false;
}

function validDuplicate(arr) {
  const set = new Set(arr);
  return set.size !== arr.length;
}

const combination = (start, count, length) => {
  if (length === 0) return [[]];
  let result = [];
  for (let i = start; i < count; i++) {
    combination(i + 1, count, length - 1).forEach((item) => {
      result.push([i, ...item]);
    });
  }
  return result;
};
