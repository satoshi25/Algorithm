/*
https://www.acmicpc.net/problem/1755
Baekjoon
1755 숫자놀이

문제
79를 영어로 읽되 숫자 단위로 하나씩 읽는다면 "seven nine"이 된다. 
80은 마찬가지로 "eight zero"라고 읽는다. 
79는 80보다 작지만, 영어로 숫자 하나씩 읽는다면 
"eight zero"가 "seven nine"보다 사전순으로 먼저 온다.

문제는 정수 M, N(1 ≤ M ≤ N ≤ 99)이 주어지면 
M 이상 N 이하의 정수를 숫자 하나씩 읽었을 때를 기준으로 사전순으로 정렬하여 출력하는 것이다.

입력
첫째 줄에 M과 N이 주어진다.

출력
M 이상 N 이하의 정수를 문제 조건에 맞게 정렬하여 한 줄에 10개씩 출력한다.

예제 입력 1 
8 28
예제 출력 1 
8 9 18 15 14 19 11 17 16 13
12 10 28 25 24 21 27 26 23 22
20
*/

// 1755 숫자놀이
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [m, n] = require('fs')
  .readFileSync(path)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

let [arr, nObj] = [
  [],
  {
    0: 'ze',
    1: 'on',
    2: 'tw',
    3: 'th',
    4: 'fo',
    5: 'fi',
    6: 'si',
    7: 'se',
    8: 'ei',
    9: 'ni',
  },
];

for (let i = m; i <= n; i++) {
  let cur = i.toString().split('');
  let len = cur.length;
  cur =
    len === 2
      ? [`${nObj[cur[0]]} ${nObj[cur[1]]}`, i.toString()]
      : [`${nObj[cur[0]]}`, i.toString()];
  arr.push(cur);
}

let result = arr
  .sort((a, b) => (a[0] > b[0] ? 1 : -1))
  .reduce((a, c, i) => {
    let cur = i.toString();
    cur = cur[cur.length - 1];
    if (cur === '9') {
      if (i !== m - n) {
        a += `${c[1]}\n`;
      } else {
        a += `${c[1]}`;
      }
    } else {
      if (i !== m - n) {
        a += `${c[1]} `;
      } else {
        a += `${c[1]}`;
      }
    }
    return a;
  }, '');

console.log(result);
