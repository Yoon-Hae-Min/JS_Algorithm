// https://school.programmers.co.kr/learn/courses/30/lessons/17680

function solution(cacheSize, cities) {
  if (cacheSize === 0) return cities.length * 5;

  let cache = [];
  const findCachedCity = (city) => {
    if (cache.includes(city)) {
      cache = cache.filter((item) => item !== city);
      cache.unshift(city);
      return true;
    } else {
      if (cache.length >= cacheSize) {
        cache.pop();
      }
      cache.unshift(city);
      return false;
    }
  };

  let time = 0;
  cities.forEach((city) => {
    findCachedCity(city.toLowerCase()) ? (time += 1) : (time += 5);
  });
  return time;
}
