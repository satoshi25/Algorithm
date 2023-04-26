/*
https://www.acmicpc.net/problem/25305
Baekjoon
25305 커트라인

문제
2022 연세대학교 미래캠퍼스 슬기로운 코딩생활에 N명의 학생들이 응시했다.
이들 중 점수가 가장 높은 k명은 상을 받을 것이다. 
이 때, 상을 받는 커트라인이 몇 점인지 구하라.

커트라인이란 상을 받는 사람들 중 점수가 가장 가장 낮은 사람의 점수를 말한다.

입력
첫째 줄에는 응시자의 수 
N과 상을 받는 사람의 수 
k가 공백을 사이에 두고 주어진다.

둘째 줄에는 각 학생의 점수 
x가 공백을 사이에 두고 주어진다.

출력
상을 받는 커트라인을 출력하라.

제한
1 ≤ N ≤ 1,000 
1 ≤ k ≤ N
0 ≤ x ≤ 10,000

예제 입력 1 
5 2
100 76 85 93 98
예제 출력 1 
98
*/

const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[, podium], scores] = require('fs')
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((el) => (el = el.split(' ').map(Number)));

let result = [];

let arr = scores.reduce((acc, cur) => {
  !!acc[cur] ? acc[cur]++ : (acc[cur] = 1);
  return acc;
}, []);

for (let i = arr.length - 1; i >= 0; i--) {
  if (!!arr[i]) {
    result = [...result, ...`${i} `.repeat(arr[i]).trim().split(' ')];
  }
}

console.log(result[podium - 1]);
