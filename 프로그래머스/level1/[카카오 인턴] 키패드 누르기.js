// https://school.programmers.co.kr/learn/courses/30/lessons/67256

function solution(numbers, hand) {
  let answer = "";

  let currentLeftHand = 10,
    currentRightHand = 12;

  const clickByHand = {
    right: (number) => {
      currentRightHand = number;
      answer += "R";
    },
    left: (number) => {
      currentLeftHand = number;
      answer += "L";
    },
  };

  const shortestHand = (number) => {
    if (
      CalculateWay(currentLeftHand, number) >
      CalculateWay(currentRightHand, number)
    ) {
      return "right";
    } else if (
      CalculateWay(currentLeftHand, number) <
      CalculateWay(currentRightHand, number)
    ) {
      return "left";
    } else {
      return hand;
    }
  };

  numbers
    .map((number) => (number === 0 ? 11 : number))
    .forEach((number) => {
      switch (number) {
        case 1:
        case 4:
        case 7:
          clickByHand["left"](number);
          break;
        case 3:
        case 6:
        case 9:
          clickByHand["right"](number);
          break;
        default:
          clickByHand[shortestHand(number)](number);
      }
    });

  return answer;
}

function CalculateWay(current, target) {
  const diffWay = Math.abs(target - current);
  return Math.trunc(diffWay / 3) + (diffWay % 3);
}
