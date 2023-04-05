function solution(m, musicinfos) {
  m = replaceNote(m);

  return (
    musicinfos
      .map((musicinfo) => {
        const info = musicinfo.split(",");
        const playTime = timeDiff(info[0], info[1]);
        const replacedNotes = replaceNote(info[3]);
        return [playTime, info[2], truncateOrExtend(replacedNotes, playTime)];
      })
      .filter((musicinfo) => musicinfo[2].includes(m))
      .sort((a, b) => b[0] - a[0])[0]?.[1] || "(None)"
  );
}

function timeDiff(a, b) {
  const time1 = new Date();
  const time2 = new Date();
  a = a.split(":");
  b = b.split(":");
  time1.setHours(a[0], a[1], 0);
  time2.setHours(b[0], b[1], 0);
  // 이거 오타로 2시간 날림;;;;;
  return (time2 - time1) / (1000 * 60);
}

function truncateOrExtend(str, length) {
  if (str.length <= length) {
    const repeats = Math.ceil(length / str.length);
    return str.repeat(repeats).slice(0, length);
  } else {
    return str.slice(0, length);
  }
}

function replaceNote(m) {
  let str = m;
  const replaceArr = [
    ["C#", "c"],
    ["D#", "d"],
    ["F#", "f"],
    ["G#", "g"],
    ["A#", "a"],
  ];
  for (let i = 0; i < replaceArr.length; i++) {
    str = str.replaceAll(replaceArr[i][0], replaceArr[i][1]);
  }
  return str;
}
// function solution(m, musicinfos) {
//   m = m.split(/(?=[A-G]#?)/);
//   const b = musicinfos.map((musicinfo) => {
//     const info = musicinfo.split(",");
//     const playTime = timeDiff(info[0], info[1]);
//     return [playTime, info[2], truncateOrExtend(info[3], playTime)];
//   });

//   return (
//     b
//       .filter((musicinfo) => {
//         let mIndex = 0;
//         for (let i = 0; i < musicinfo[2].length; i++) {
//           if (mIndex === m.length) return true;
//           if (musicinfo[2][i] === m[mIndex]) {
//             mIndex += 1;
//           } else {
//             mIndex = 0;
//           }
//         }
//         return false;
//       })
//       .sort((a, b) => b[0] - a[0])[0]?.[1] || "(None)"
//   );
// }

// function timeDiff(a, b) {
//   const time1 = new Date();
//   const time2 = new Date();
//   a = a.split(":");
//   b = b.split(":");
//   time1.setHours(a[0], a[1], 0);
//   time2.setHours(a[0], b[1], 0);
//   return (time2 - time1) / (1000 * 60);
// }

// function truncateOrExtend(str, length) {
//   const arr = str.split(/(?=[A-G]#?)/);
//   if (str.length <= length) {
//     const repeats = Math.ceil(length / arr.length);
//     const result = [];
//     for (let i = 0; i < repeats; i++) {
//       result.push(...arr);
//     }
//     return result.slice(0, length);
//   } else {
//     return arr.slice(0, length);
//   }
// }

// 이로직도 가능할거 같은데 오타때문에 다 갈아엎고 사용하지 못했다 ㅋㅋ
