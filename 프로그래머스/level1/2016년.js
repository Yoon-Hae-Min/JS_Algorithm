// https://school.programmers.co.kr/learn/courses/30/lessons/12901

function solution(a, b) {
  let day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let firstDay = [5, 1, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4]; // 순서대로 ['FRI','MON','TUE','FRI','SUN','WED','FRI','MON','THU','SAT','TUE','THU'];
  return day[(firstDay[a - 1] + ((b % 7) - 1)) % 7] ?? day[6];
  // 계산결과가 -1일때는 배열의 마지막을 참조해야 한다. (일요일 전날은 토요일)
}
