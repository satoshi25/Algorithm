/*
https://www.acmicpc.net/problem/18870
Baekjoon
18870 좌표 압축

문제
수직선 위에 N개의 좌표 X1, X2, ..., XN이 있다. 이 좌표에 좌표 압축을 적용하려고 한다.

Xi를 좌표 압축한 결과 X'i의 값은 Xi > Xj를 만족하는 서로 다른 좌표의 개수와 같아야 한다.

X1, X2, ..., XN에 좌표 압축을 적용한 결과 X'1, X'2, ..., X'N를 출력해보자.

입력
첫째 줄에 N이 주어진다.

둘째 줄에는 공백 한 칸으로 구분된 X1, X2, ..., XN이 주어진다.

출력
첫째 줄에 X'1, X'2, ..., X'N을 공백 한 칸으로 구분해서 출력한다.

제한
1 ≤ N ≤ 1,000,000
-109 ≤ Xi ≤ 109

예제 입력 1 
5
2 4 -10 4 -9
예제 출력 1 
2 3 0 3 1

예제 입력 2 
6
1000 999 1000 999 1000 999
예제 출력 2 
1 0 1 0 1 0
*/

const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[spotCnt], spots] = require('fs')
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

let sortSpots = spots.slice();
sortSpots.sort((a, b) => {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
});

let [, originSpots] = sortSpots.reduce(
  (acc, cur) => {
    if (acc[0][acc[0].length - 1] !== cur) {
      acc[0].push(cur);
      acc[1][cur] = acc[0].length - 1;
    }
    return acc;
  },
  [[], {}]
);

let result = spots.reduce((acc, cur, idx) => {
  if (idx === spotCnt - 1) {
    acc += originSpots[cur];
  } else {
    acc += originSpots[cur] + ' ';
  }
  return acc;
}, '');

console.log(result);
