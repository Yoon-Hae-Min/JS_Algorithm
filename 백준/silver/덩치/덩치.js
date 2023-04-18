// https://www.acmicpc.net/problem/7568

let [num, ...persons] = require("fs")
  .readFileSync("silver/덩치/input.txt")
  .toString()
  .replaceAll("\r", "")
  .split("\n");

let personArr = [];
for (let i = 0; i < num; i++) {
  const [weight, height] = persons[i].split(" ").map((i) => Number(i));
  personArr.push([weight, height]);
}
let answer = new Array(personArr.length).fill(1);

personArr.forEach((person) => {
  personArr.forEach((anotherPerson, index) => {
    if (person[0] > anotherPerson[0] && person[1] > anotherPerson[1])
      answer[index]++;
  });
});

console.log(answer.toString().replaceAll(",", " "));
