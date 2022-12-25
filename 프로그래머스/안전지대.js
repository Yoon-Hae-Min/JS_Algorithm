// https://school.programmers.co.kr/learn/courses/30/lessons/120866

function solution(board) {
  let answer = 0;
  let dxdy = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1],
    [-1, -1],
    [1, 1],
    [1, -1],
    [-1, 1],
  ];
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] === 1) {
        dxdy.forEach((item) => {
          const [x, y] = item;
          if (
            !isIndexOver(j + x, i + y, board.length, board.length) &&
            board[i + y][j + x] === 0
          )
            board[i + y][j + x] = 2;
        });
      }
    }
  }
  board.forEach((y) => y.forEach((x) => x === 0 && answer++));
  return answer;
}

function isIndexOver(x, y, maxX, maxY) {
  return x < 0 || x >= maxX || y < 0 || y >= maxY ? true : false;
}
