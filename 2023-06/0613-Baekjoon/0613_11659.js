/*
https://www.acmicpc.net/problem/11659
Baekjoon
11659 구간 합 구하기 4

문제
수 N개가 주어졌을 때, i번째 수부터 j번째 수까지 합을 구하는 프로그램을 작성하시오.

입력
첫째 줄에 수의 개수 N과 합을 구해야 하는 횟수 M이 주어진다. 
둘째 줄에는 N개의 수가 주어진다. 수는 1,000보다 작거나 같은 자연수이다. 
셋째 줄부터 M개의 줄에는 합을 구해야 하는 구간 i와 j가 주어진다.

출력
총 M개의 줄에 입력으로 주어진 i번째 수부터 j번째 수까지 합을 출력한다.

제한
1 ≤ N ≤ 100,000
1 ≤ M ≤ 100,000
1 ≤ i ≤ j ≤ N

예제 입력 1 
5 3
5 4 3 2 1
1 3
2 4
5 5
예제 출력 1 
12
9
1
*/

const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[, testCnt], arr, ...tests] = require('fs')
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((el) => (el = el.split(' ').map(Number)));

function makePrefixSum(arr) {
  let len = arr.length;
  let sumArr = new Array(len);
  sumArr[0] = arr[0];
  for (let i = 1; i < len; i++) {
    sumArr[i] = sumArr[i - 1] + arr[i];
  }
  return sumArr;
}

let prefixArr = makePrefixSum(arr);

let result = [];

for (let i = 0; i < testCnt; i++) {
  let end = prefixArr[tests[i][1] - 1];
  let start = prefixArr[tests[i][0] - 2];
  if (tests[i][0] - 1 === 0) {
    result.push(end);
  } else {
    result.push(end - start);
  }
}

console.log(result.join('\n'));
