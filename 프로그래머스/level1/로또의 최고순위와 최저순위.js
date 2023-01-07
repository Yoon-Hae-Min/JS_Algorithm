// https://school.programmers.co.kr/learn/courses/30/lessons/77484

function solution(lottos, win_nums) {
  let minimumScore = 0,
    maximumScore = 0;
  lottos.forEach((lotto) => {
    if (lotto === 0) minimumScore += 1;
    if (win_nums.includes(lotto)) {
      minimumScore += 1;
      maximumScore += 1;
    }
  });

  return [scoreToRank(minimumScore), scoreToRank(maximumScore)];
}

function scoreToRank(score) {
  const rank = [6, 6, 5, 4, 3, 2, 1];
  return rank[score];
}
