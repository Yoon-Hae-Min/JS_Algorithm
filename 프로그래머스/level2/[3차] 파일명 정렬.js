//https://school.programmers.co.kr/learn/courses/30/lessons/17686

function solution(files) {
  const filesArray = files.map((file) => {
    const head = file.match(/^[a-zA-Z\s-.]+/)[0];
    const number = file.match(/[0-9]{1,5}/)[0];
    const tail = file.substring(head.length + number.length);
    return [head, number, tail];
  });

  filesArray.sort((a, b) => {
    const lowerA = a[0].toLowerCase();
    const lowerB = b[0].toLowerCase();
    if (lowerA > lowerB) return 1;
    else if (lowerA === lowerB) {
      if (Number(a[1]) > Number(b[1])) return 1;
      else if (Number(a[1]) === Number(b[1])) return 0;
      else return -1;
    } else return -1;
  });

  return filesArray.map((file) => file[0] + file[1] + file[2]);
}
