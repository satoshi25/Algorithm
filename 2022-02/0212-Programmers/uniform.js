// 체육복

// https://programmers.co.kr/learn/courses/30/lessons/42862

// 5, 7, 12, 13, 18

function solution(n, lost, reserve) {
  let answer = n - lost.length;

  for (let i = 0; i < lost.length; i++) {
      for (let j = 0; j < reserve.length; j++) {
          let pre = lost[i] - 1;
          let next = lost[i] + 1;
          let cur = lost[i]
          if (pre === reserve[j] | next === reserve[j] | cur === reserve[j]) {
              reserve.splice(j, 1);
              answer += 1;
              continue;
          }
      }
  }
  return answer;
}