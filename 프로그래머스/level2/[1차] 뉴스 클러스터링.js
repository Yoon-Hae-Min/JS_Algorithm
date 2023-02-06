function solution(str1, str2) {
  str1 = str1.toUpperCase();
  str2 = str2.toUpperCase();

  const arr1 = new Array();
  const arr2 = new Array();
  let union = 0,
    intersection = 0;

  const splitInTwo = (str, arr) => {
    for (let i = 0; i < str.length - 1; i++) {
      const substr = str.substr(i, 2);
      if (substr.match(/[A-Z]{2}/)) {
        arr.push(substr);
      }
    }
  };

  splitInTwo(str1, arr1);
  splitInTwo(str2, arr2);

  const set = new Set([...arr1, ...arr2]);

  set.forEach((item) => {
    const hasItem1 = arr1.filter((element) => item === element).length;
    const hasItem2 = arr2.filter((element) => item === element).length;
    intersection += Math.min(hasItem1, hasItem2);
    union += Math.max(hasItem1, hasItem2);
  });

  const similarity = union === 0 ? 1 : intersection / union;
  // 이부분에서 엄청 해맸다....
  // 기존코드는 `intersection / union || 1`이었는데 분모가 0이되고 분자가 0이 아닌 수가 나와버리면 infinity로 설정이 된다
  // infinity는 null undefined 속성이 아니기 때문에 1로 할당하지 않는다.

  return Math.floor(similarity * 65536);
}
