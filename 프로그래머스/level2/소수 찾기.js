// https://school.programmers.co.kr/learn/courses/30/lessons/42839

function solution(numbers) {
  numberArr = numbers.split("");
  let set = new Set();
  for (let i = 0; i < numberArr.length; i++) {
    Recursive(numberArr, i, set, numberArr[i]);
  }

  let combineSet = new Set();
  set.forEach((number) => {
    CombineRecursive(number.split(""), "", combineSet);
  });
  return combineSet.size;
}

function Recursive(numberArr, index, set, before) {
  set.add(before);
  for (let i = index + 1; i < numberArr.length; i++) {
    Recursive(numberArr, i, set, before + numberArr[i]);
  }
}

function CombineRecursive(leftArr, number, combineSet) {
  if (leftArr.length === 0) {
    if (isPrimeNumber(Number(number))) {
      combineSet.add(Number(number));
    }
  }
  for (let i = 0; i < leftArr.length; i++) {
    CombineRecursive(
      [...leftArr.slice(0, i), ...leftArr.slice(i + 1, leftArr.length)],
      number + leftArr[i],
      combineSet
    );
  }
}

function isPrimeNumber(number) {
  if (number < 2) return false;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
}

// 재귀함수 두개를 합쳤으면 더 좋았을듯
