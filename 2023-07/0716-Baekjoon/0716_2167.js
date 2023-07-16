/*
https://www.acmicpc.net/problem/2167
Baekjoon
2167 2차원 배열의 합

문제
2차원 배열이 주어졌을 때 
(i, j) 위치부터 (x, y) 위치까지에 저장되어 있는 수들의 합을 구하는 프로그램을 작성하시오. 
배열의 (i, j) 위치는 i행 j열을 나타낸다.

입력
첫째 줄에 배열의 크기 N, M(1 ≤ N, M ≤ 300)이 주어진다. 
다음 N개의 줄에는 M개의 정수로 배열이 주어진다. 
배열에 포함되어 있는 수는 절댓값이 10,000보다 작거나 같은 정수이다. 
그 다음 줄에는 합을 구할 부분의 개수 K(1 ≤ K ≤ 10,000)가 주어진다. 
다음 K개의 줄에는 네 개의 정수로 i, j, x, y가 주어진다
(1 ≤ i ≤ x ≤ N, 1 ≤ j ≤ y ≤ M).

출력
K개의 줄에 순서대로 배열의 합을 출력한다. 
배열의 합은 (2^31)-1보다 작거나 같다.

예제 입력 1 
2 3
1 2 4
8 16 32
3
1 1 2 3
1 2 1 2
1 3 2 3
예제 출력 1 
63
2
36
*/

const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [nm, ...input] = require('fs')
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n');

let [n] = nm.split(' ').map(Number);

let [matrix, orders] = [
  input.slice(0, n).map((el) => (el = el.split(' ').map(Number))),
  input.slice(n),
];

let sumMatrix = matrix.reduce((acc, cur) => {
  let arr = [];
  for (let i = 0; i < cur.length; i++) {
    i === 0 ? (arr[i] = cur[i]) : (arr[i] = arr[i - 1] + cur[i]);
  }
  acc.push(arr);
  return acc;
}, []);

let [k, orderList, result] = [
  +orders[0],
  orders
    .slice(1)
    .map((el) => (el = el.split(' ').map((el) => (el = Number(el) - 1)))),
  '',
];

for (let i = 0; i < k; i++) {
  let cur = accMatrix(orderList[i], sumMatrix);
  i === k - 1 ? (result += `${cur}`) : (result += `${cur}\n`);
}

function accMatrix(arr, matrix) {
  let [[ax, ay, bx, by], sum] = [arr, 0];

  for (let i = ax; i <= bx; i++) {
    ay === 0
      ? (sum += matrix[i][by])
      : (sum += matrix[i][by] - matrix[i][ay - 1]);
  }
  return sum;
}

console.log(result);
