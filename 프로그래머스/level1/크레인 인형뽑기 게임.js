// https://school.programmers.co.kr/learn/courses/30/lessons/64061?language=javascript

function solution(board, moves) {
  let answer = 0;
  let basket = [];
  moves.forEach((move) => {
    for (let i = 0; i < board.length; i++) {
      if (board[i][move - 1]) {
        if (basket[basket.length - 1] === board[i][move - 1]) {
          basket.pop();
          answer += 1;
        } else {
          basket.push(board[i][move - 1]);
        }
        board[i][move - 1] = 0;
        break;
      }
    }
  });
  return answer * 2;
}
