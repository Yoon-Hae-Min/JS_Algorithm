// https://school.programmers.co.kr/learn/courses/30/lessons/12900

function solution(n) {
  let dp = new Array(n);
  dp[0] = 1;
  dp[1] = 2;
  for (let i = 2; i < n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1000000007;
  }
  return dp[n - 1] % 1000000007;
}
