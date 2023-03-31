// https://school.programmers.co.kr/learn/courses/30/lessons/17679

function storeNewSet(set, board, i, j) {
  const dx = [0, 1, 0, 1];
  const dy = [0, 0, 1, 1];
  for (let k = 1; k < 5; k++) {
    if (k === 4) {
      for (k = 0; k < 4; k++) {
        set.add(JSON.stringify([i + dy[k], j + dx[k]]));
      }
      break;
    }
    if (board[i][j] !== board[i + dy[k]][j + dx[k]]) break;
  }
}

function solution(m, n, board) {
  board = board.map((b) => b.split(""));
  let answer = 0;
  let trashSet = new Set();

  do {
    trashSet.clear();
    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        let currentBoard = board[i][j];
        if (currentBoard === null) continue;
        storeNewSet(trashSet, board, i, j);
      }
    }
    // 사라지는 블록 찾기

    answer += trashSet.size;
    trashSet.forEach((value) => {
      value = JSON.parse(value);
      board[value[0]][value[1]] = null;
    });

    // 블록을 사라지게 만들기

    for (let i = m - 1; i >= 0; i--) {
      for (let j = 0; j < n; j++) {
        if (board[i][j] !== null) continue;
        for (let y = i - 1; y >= 0; y--) {
          if (board[y][j] !== null) {
            board[i][j] = board[y][j];
            board[y][j] = null;
            break;
          }
        }
      }
    }
    // 블록 내리기
  } while (trashSet.size !== 0);

  return answer;
}
