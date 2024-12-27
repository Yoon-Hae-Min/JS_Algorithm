const fs = require("fs");
const path = require("path");
const readline = require("readline");

const BASE_CODE = `
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .replaceAll("\\r", "")
  .split("\\n")
`;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 문제 생성 함수
const createProblem = (difficulty, problemName) => {
  const basePath = path.join(process.cwd(), difficulty, problemName);

  // 폴더 생성
  fs.mkdir(basePath, { recursive: true }, (err) => {
    if (err) {
      console.error(`Error creating folder: ${err.message}`);
      rl.close();
      process.exit(1);
    }

    // index.js 파일 생성
    const jsFilePath = path.join(basePath, "index.js");
    fs.writeFile(jsFilePath, BASE_CODE, (err) => {
      if (err) console.error(`Error creating index.js: ${err.message}`);
    });

    // input.txt 파일 생성
    const txtFilePath = path.join(basePath, "input.txt");
    fs.writeFile(txtFilePath, "", (err) => {
      if (err) console.error(`Error creating input.txt: ${err.message}`);
    });

    console.log(`Problem folder created: ${basePath}`);
    rl.close();
  });
};

// 난이도와 문제 이름을 입력받기
rl.question(
  "Enter the problem difficulty (bronze, silver, gold, platinum): ",
  (difficulty) => {
    if (!difficulty.trim()) {
      console.error("Difficulty cannot be empty!");
      rl.close();
      process.exit(1);
    }

    rl.question("Enter the problem name: ", (problemName) => {
      if (!problemName.trim()) {
        console.error("Problem name cannot be empty!");
        rl.close();
        process.exit(1);
      }

      createProblem(difficulty.trim(), problemName.trim());
    });
  }
);
