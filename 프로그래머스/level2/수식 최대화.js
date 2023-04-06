// https://school.programmers.co.kr/learn/courses/30/lessons/67257

function solution(expression) {
  const expressionArr = expression.split(/([\+\-\*])/);
  const property = [
    ["+", "-", "*"],
    ["+", "*", "-"],
    ["-", "+", "*"],
    ["-", "*", "+"],
    ["*", "+", "-"],
    ["*", "-", "+"],
  ];
  let result = 0;
  property.forEach((Symbols) => {
    let copiedArr = [...expressionArr];
    Symbols.forEach((Symbol) => {
      let index = 0;
      while (index != -1) {
        index = copiedArr.indexOf(Symbol);
        if (index != -1) {
          copiedArr.splice(
            index - 1,
            3,
            calculate(Symbol, copiedArr[index - 1], copiedArr[index + 1])
          );
        }
      }
    });
    if (result < Math.abs(copiedArr[0])) result = Math.abs(copiedArr[0]);
  });
  return result;
}

function calculate(op, num1, num2) {
  switch (op) {
    case "+":
      return Number(num1) + Number(num2);
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
  }
}
