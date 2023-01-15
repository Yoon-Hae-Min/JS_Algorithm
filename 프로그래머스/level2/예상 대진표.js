// https://school.programmers.co.kr/learn/courses/30/lessons/12985

function solution(n, a, b) {
  let answer = 1;
  while (Math.abs(a - b) !== 1 || Math.floor(a / 2) === Math.floor(b / 2)) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    answer += 1;
  }
  return answer;
}

// 왜이리 복잡하게 생각했는지 모르곘다 어짜피 첫번째 매치도 답안에 포함되어야하니 마지막 매치를 +1하는 식으로 가면

// function solution(n,a,b)
// {
//     let answer = 0;
//     while(a !== b) {
//         a = Math.ceil(a/2);
//         b = Math.ceil(b/2);
//         answer++;
//     }

//     return answer;
// }

// 이렇게 최적화 할수 있다 a와 b가 만난후에 /2를 하고 내림해주면 둘은 같은 숫자가 된다.
