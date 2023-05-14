/*
https://www.acmicpc.net/problem/4134
Baekjoon
4134 다음 소수

문제
정수 n(0 ≤ n ≤ 4*109)가 주어졌을 때, n보다 크거나 같은 소수 중 가장 작은 소수 찾는 프로그램을 작성하시오.

입력
첫째 줄에 테스트 케이스의 개수가 주어진다. 
각 테스트 케이스는 한 줄로 이루어져 있고, 정수 n이 주어진다.

출력
각각의 테스트 케이스에 대해서 n보다 크거나 같은 소수 중 가장 작은 소수를 한 줄에 하나씩 출력한다.

예제 입력 1 
3
6
20
100
예제 출력 1 
7
23
101
*/

const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [testCnt, ...tests] = require('fs')
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

function nextPrime(num) {
  let testNum = num;
  if (testNum <= 2) {
    return 2;
  } else {
    let i = 2;
    while (i <= Math.sqrt(testNum)) {
      if (testNum % i === 0) {
        i = 2;
        testNum++;
        continue;
      }
      i++;
    }
  }
  return testNum;
}

for (let i = 0; i < testCnt; i++) {
  console.log(nextPrime(tests[i]));
}
