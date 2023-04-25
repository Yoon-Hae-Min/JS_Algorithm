// https://www.acmicpc.net/problem/4659

let testCase = require("fs")
  .readFileSync("silver/비밀번호_발음하기/input.txt")
  .toString()
  .replaceAll("\r", "")
  .split("\n");

for (const password of testCase) {
  if (password === "end") break;
  const moReg = /[aeiou]/g;
  const tripleReg = /[aeiou]{3}|[bcdfghjklmnpqrstvxz]{3}/g;
  const doubleReg = /(.)\1(?<![eo])/g;

  if (
    !moReg.test(password) ||
    tripleReg.test(password) ||
    doubleReg.test(password)
  ) {
    console.log(`<${password}> is not acceptable.`);
  } else {
    console.log(`<${password}> is acceptable.`);
  }
}
