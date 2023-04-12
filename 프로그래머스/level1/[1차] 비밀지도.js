function solution(n, arr1, arr2) {
  const decrypt = (arr, num) =>
    arr.map((item) => item.toString(2).padStart(num, "0"));
  arr1 = decrypt(arr1, n);
  arr2 = decrypt(arr2, n);
  let result = [];
  for (let i = 0; i < n; i++) {
    let map = "";
    for (let j = 0; j < n; j++) {
      if (arr1[i].charAt(j) === "0" && arr2[i].charAt(j) === "0") {
        map += " ";
      } else {
        map += "#";
      }
    }
    result.push(map);
  }
  return result;
}
