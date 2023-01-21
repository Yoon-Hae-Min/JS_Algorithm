// https://school.programmers.co.kr/learn/courses/30/lessons/87390

function solution(n, left, right) {
  return new Array(right - left + 1)
    .fill(0)
    .map((item, index) =>
      Math.max(((left + index) % n) + 1, Math.floor((left + index) / n) + 1)
    );
}

// 처음 시도는 2차원 배열을 모두 만드려다 메모리 초과가 났다

// 이후 답에 필요한 길이만큼의 배열만 만들었고 답의 item에 해당하는 요소를 넣기로 생각하였다

// 배열의 규칙을 찾아보니 y좌표와 x좌표의 index의 최고 값이 배열의 해당값이다
//  index     1 2 3 4
//
//       1    1 2 3 4
//       2    2 2 3 4
//       3    3 3 3 4
//       4    4 4 4 4

// 따라서 수식을 이용해서 이를 계산하였다.
