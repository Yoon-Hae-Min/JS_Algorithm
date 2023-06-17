// https://www.acmicpc.net/problem/17144

let row = require("fs")
  .readFileSync("gold/미세먼지_안녕/input.txt")
  .toString()
  .replaceAll("\r", "")
  .split("\n");
row = row.map((e) => e.split(" ").map((e) => Number(e)));
let [R, C, T] = row[0];
let matrix = row.slice(1);
let airCleaner = [];
for (let i = 0; i < R; i++) {
  for (let j = 0; j < C; j++) {
    if (matrix[i][j] === -1) {
      airCleaner.push([i, j]);
    }
  }
}

// matrix 복제하기

let tempMatrix = new Array(R);

const resetTempMatrix = () => {
  for (let i = 0; i < R; i++) {
    tempMatrix[i] = new Array(C).fill(0);
  }
};

// 확산 로직
const Spread = () => {
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      // 미세먼지가 없거나 공기청정기를 탐색하면 다음 탐색 시작
      if (matrix[i][j] <= 0) {
        continue;
      }
      let spreadCount = 0;
      let dx = [-1, 1, 0, 0];
      let dy = [0, 0, -1, 1];
      //미세먼지가 있으면 4방향 체크
      for (let d = 0; d < 4; d++) {
        let nx = j + dx[d];
        let ny = i + dy[d];
        // 4방향이 범위를 벗어나거나, 공기청정기가 있으면 다음 탐색 시작
        if (nx < 0 || nx >= C || ny < 0 || ny >= R || matrix[ny][nx] === -1)
          continue;
        // 4방향을 벗어나지 않고 공기청정기도 없으면 확산 진행
        spreadCount++;
        tempMatrix[ny][nx] += Math.floor(matrix[i][j] / 5);
      }
      tempMatrix[i][j] -= Math.floor(matrix[i][j] / 5) * spreadCount;
    }
  }

  // 변경사항 적용
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      matrix[i][j] += tempMatrix[i][j];
    }
  }
};

// 공기청정기 작동
const Circle = () => {
  // 상단 공기청정기 작동
  let [topRow, topCol] = airCleaner[0];
  for (let row = topRow - 1; row > 0; row--) {
    matrix[row][0] = matrix[row - 1][0];
  }
  for (let col = 0; col < C - 1; col++) {
    matrix[0][col] = matrix[0][col + 1];
  }
  for (let row = 0; row < topRow; row++) {
    matrix[row][C - 1] = matrix[row + 1][C - 1];
  }
  for (let col = C - 1; col > 1; col--) {
    matrix[topRow][col] = matrix[topRow][col - 1];
  }
  matrix[topRow][1] = 0;

  // 하단 공기청정기 작동
  let [bottomRow, bottomCol] = airCleaner[1];
  for (let row = bottomRow + 1; row < R - 1; row++) {
    matrix[row][0] = matrix[row + 1][0];
  }
  for (let col = 0; col < C - 1; col++) {
    matrix[R - 1][col] = matrix[R - 1][col + 1];
  }
  for (let row = R - 1; row > bottomRow; row--) {
    matrix[row][C - 1] = matrix[row - 1][C - 1];
  }
  for (let col = C - 1; col > 1; col--) {
    matrix[bottomRow][col] = matrix[bottomRow][col - 1];
  }
  matrix[bottomRow][1] = 0;
};

for (let i = 0; i < T; i++) {
  resetTempMatrix();
  Spread();
  Circle();
}

let answer = 0;
for (let i = 0; i < R; i++) {
  for (let j = 0; j < C; j++) {
    if (matrix[i][j] !== -1 && matrix[i][j] !== 0) {
      answer += matrix[i][j];
    }
  }
}

console.log(answer);

//나오면 틀릴래요
