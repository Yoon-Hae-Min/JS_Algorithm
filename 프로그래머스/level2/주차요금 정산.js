// https://school.programmers.co.kr/learn/courses/30/lessons/92341

function solution(fees, records) {
  let answer = new Map();
  let parking = new Map();
  let parkingTimeMap = new Map();

  const [baseTime, baseRate, perTime, perRate] = fees;

  const setParkingTime = (carNumber, parkingTime) => {
    if (parkingTimeMap.has(carNumber)) {
      parkingTimeMap.set(
        carNumber,
        parkingTime + parkingTimeMap.get(carNumber)
      );
    } else {
      parkingTimeMap.set(carNumber, parkingTime);
    }
  };

  // 입차 출차시 기록을 한다.
  records.forEach((record) => {
    const [time, carNumber, type] = record.split(" ");
    const [hour, minute] = time.split(":");
    if (type === "IN") {
      parking.set(carNumber, { hour: Number(hour), minute: Number(minute) });
    } else if (type === "OUT") {
      const carTime = parking.get(carNumber);
      const parkingTime =
        (Number(hour) - carTime.hour) * 60 + Number(minute) - carTime.minute;
      setParkingTime(carNumber, parkingTime);
      parking.delete(carNumber);
    } else {
      throw Error("출고 또는 출차가 아닙니다.");
    }
  });

  // 12시가 지나도 출차가 되지 않으면 23:59분에 출차된 것으로 간주한다.
  if (parking.size > 0) {
    for (const [carNumber, carTime] of parking) {
      const parkingTime = (23 - carTime.hour) * 60 + 59 - carTime.minute;
      setParkingTime(carNumber, parkingTime);
    }
  }

  // 요금을 계산한다.
  for (const [carNumber, carTime] of parkingTimeMap) {
    if (carTime <= baseTime) {
      answer.set(carNumber, baseRate);
    } else {
      answer.set(
        carNumber,
        baseRate + Math.ceil((carTime - baseTime) / perTime) * perRate
      );
    }
  }

  return [...answer].sort((a, b) => a[0] - b[0]).map((item) => item[1]);
}
