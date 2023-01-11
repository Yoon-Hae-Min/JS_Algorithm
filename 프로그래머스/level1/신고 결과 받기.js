// https://school.programmers.co.kr/learn/courses/30/lessons/92334

function solution(id_list, report, k) {
  let idListMap = {};
  let reportedObj = {};

  // 초기화
  id_list.forEach((id, index) => {
    idListMap[id] = index;
    reportedObj[id] = new Set();
  });

  // 신고 받은 사람 기준으로 Set을 사용해서 리스트 생성
  report.forEach((reportIds) => {
    const reportId = reportIds.split(" ");
    reportedObj[reportId[1]].add(reportId[0]);
  });

  let answer = new Array(id_list.length).fill(0);

  // 신고를 k명 이상 했다면 Set을 순회하면서 신고를 한사람의 Count를 1늘림
  id_list.forEach((id) => {
    if (reportedObj[id].size >= k) {
      reportedObj[id].forEach((id) => {
        answer[idListMap[id]] += 1;
      });
    }
  });
  return answer;
}
