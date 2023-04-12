// https://school.programmers.co.kr/learn/courses/30/lessons/150370

function solution(today, terms, privacies) {
  let result = [];
  today = today.split(".");
  const termsMap = new Map();

  terms.forEach((term) => {
    const [name, value] = term.split(" ");
    termsMap.set(name, Number(value));
  });

  privacies.forEach((privacy, index) => {
    const [year, month, day, termName] = privacy.split(/\.|\s/);
    const leftMonth =
      termsMap.get(termName) -
      ((today[0] - year) * 12 + Number(today[1]) - Number(month));

    if (leftMonth < 0 || (leftMonth === 0 && Number(today[2]) >= Number(day))) {
      result.push(index + 1);
    }
  });
  return result;
}

// 요런건 지금은 쭉 짜긴했지만 조건문을 최적화 하는 방법이 필요할것 같다.
