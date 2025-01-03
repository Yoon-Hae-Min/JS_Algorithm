const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [[N, K], durability] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .replaceAll("\r", "")
  .split("\n")
  .map((e) => e.split(" ").map((e) => parseInt(e)));

class Container {
  N;
  upPosition = 0;
  downPosition = N - 1;
  currentK = 0;

  containerMatrix;
  robotMatrix = [];

  constructor(N, durability) {
    this.N = N;
    this.containerMatrix = Array.from({ length: 2 * N }).map((_, index) => ({
      durability: durability[index],
    }));
  }

  moveContainer() {
    // 컨테이너 회전
    this.upPosition--;
    this.downPosition--;

    // upPosition, downPosition이 범위를 벗어나는 경우
    if (this.upPosition < 0) {
      this.upPosition = 2 * N - 1;
    }
    if (this.downPosition < 0) {
      this.downPosition = 2 * N - 1;
    }

    // 로봇 회전 (내구도 사용 X)
    this.robotMatrix = this.robotMatrix
      .map((e) => {
        if (e.position === this.downPosition) {
          return null;
        }
        return e;
      })
      .filter((e) => e !== null);
  }

  addRobot() {
    if (this.containerMatrix[this.upPosition].durability !== 0) {
      this.robotMatrix.push({
        position: this.upPosition,
      });
      this.containerMatrix[this.upPosition].durability--;
    }
  }

  moveRobot() {
    for (let i = 0; i < this.robotMatrix.length; i++) {
      const cur = this.robotMatrix[i];
      const nextPosition = cur.position + 1 <= 2 * N - 1 ? cur.position + 1 : 0;

      if (
        this.containerMatrix[nextPosition].durability !== 0 && // 내구도가 남아있고
        !this.robotMatrix.some((e) => e.position === nextPosition) // 다음 위치에 로봇이 없을 경우
      ) {
        // 이동 처리
        cur.position = nextPosition;
        this.containerMatrix[cur.position].durability--; // 내구도 감소
      }
    }

    this.robotMatrix = this.robotMatrix.filter(
      (e) => e.position !== this.downPosition
    );
  }

  emptyDurability() {
    return this.containerMatrix.filter((e) => e.durability === 0).length;
  }
}

let currentStep = 1;
const container = new Container(N, durability);

while (true) {
  container.moveContainer();
  container.moveRobot();
  container.addRobot();

  if (container.emptyDurability() >= K) {
    console.log(currentStep);
    break;
  }
  currentStep++;
}
