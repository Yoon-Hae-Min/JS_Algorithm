// https://school.programmers.co.kr/learn/courses/30/lessons/160585#

function solution(board) {
  const boardArr = board.map((str) => str.split(""));

  let XCount = 0,
    OCount = 0;
  let isOTriple = false;
  let isXTriple = false;

  for (let i = 0; i < 3; i++) {
    let verticalSet = new Set();
    let horizontalSet = new Set();

    for (let j = 0; j < 3; j++) {
      if (boardArr[i][j] === "X") XCount += 1;
      if (boardArr[i][j] === "O") OCount += 1;

      horizontalSet.add(boardArr[i][j]);
      verticalSet.add(boardArr[j][i]);
    }
    if (verticalSet.size === 1) {
      if (verticalSet.has("O")) isOTriple = true;
      if (verticalSet.has("X")) isXTriple = true;
    }
    if (horizontalSet.size === 1) {
      if (horizontalSet.has("O")) isOTriple = true;
      if (horizontalSet.has("X")) isXTriple = true;
    }
  }
  if (boardArr[0][0] === boardArr[1][1] && boardArr[1][1] === boardArr[2][2]) {
    if (boardArr[1][1] === "O") isOTriple = true;
    if (boardArr[1][1] === "X") isXTriple = true;
  }
  if (boardArr[2][0] === boardArr[1][1] && boardArr[1][1] === boardArr[0][2]) {
    if (boardArr[1][1] === "O") isOTriple = true;
    if (boardArr[1][1] === "X") isXTriple = true;
  }

  if (OCount < XCount || OCount > XCount + 1) return 0;
  if (isOTriple && OCount <= XCount) return 0;
  if (isXTriple && OCount > XCount) return 0;
  if (isOTriple && isXTriple) return 0;
  return 1;
}

// 중간에 조건식을 잘못잡아서 시간이 엄청 뺏김;;;;
