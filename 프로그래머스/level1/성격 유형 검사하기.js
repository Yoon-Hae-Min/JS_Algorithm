// https://school.programmers.co.kr/learn/courses/30/lessons/118666

function solution(survey, choices) {
  let score = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };
  choices.forEach((choice, index) => {
    if (choice <= 3) {
      score[survey[index].charAt(0)] += 4 - choice;
    } else if (choice > 4) {
      score[survey[index].charAt(1)] += choice - 4;
    }
  });

  const compareScore = (A, B) => {
    return score[A] > score[B] ? A : B;
  };

  return (
    compareScore("T", "R") +
    compareScore("F", "C") +
    compareScore("M", "J") +
    compareScore("N", "A")
  );
}
