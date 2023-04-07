// https://school.programmers.co.kr/learn/courses/30/lessons/81302

function solution(places) {
  let result = [];
  places = places.map((place) => place.map((row) => row.split("")));
  places.forEach((place) => {
    let isVerified = true;
    let flag = false;
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (place[i][j] === "P") {
          isVerified = verifySocialDistancing(place, i, j, 3);
          if (!isVerified) flag = true;
        }
        if (flag) break;
      }
      if (flag) break;
    }
    result.push(isVerified ? 1 : 0);
  });
  return result;
}

function verifySocialDistancing(place, rowIndex, colIndex, leftDepth) {
  if (
    colIndex < 0 ||
    rowIndex >= 5 ||
    colIndex >= 5 ||
    leftDepth === 0 ||
    place[rowIndex][colIndex] === "X"
  )
    return true;
  if (place[rowIndex][colIndex] === "P" && leftDepth < 3) return false;
  else place[rowIndex][colIndex] = "X";
  return (
    verifySocialDistancing(place, rowIndex, colIndex + 1, leftDepth - 1) &&
    verifySocialDistancing(place, rowIndex + 1, colIndex, leftDepth - 1) &&
    verifySocialDistancing(place, rowIndex, colIndex - 1, leftDepth - 1)
  );
}
