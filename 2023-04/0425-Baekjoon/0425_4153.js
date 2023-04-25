/*
https://www.acmicpc.net/problem/4153
Baekjoon
4153 직각삼각형

문제
과거 이집트인들은 각 변들의 길이가 3, 4, 5인 삼각형이 직각 삼각형인것을 알아냈다. 
주어진 세변의 길이로 삼각형이 직각인지 아닌지 구분하시오.

입력
입력은 여러개의 테스트케이스로 주어지며 마지막줄에는 0 0 0이 입력된다. 
각 테스트케이스는 모두 30,000보다 작은 양의 정수로 주어지며, 각 입력은 변의 길이를 의미한다.

출력
각 입력에 대해 직각 삼각형이 맞다면 "right", 아니라면 "wrong"을 출력한다.

예제 입력 1 
6 8 10
25 52 60
5 12 13
0 0 0
예제 출력 1 
right
wrong
right
*/

const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let tris = require('fs').readFileSync(path).toString().trim().split('\n');
let result = '';

for (let i = 0; i < tris.length; i++) {
  let [a, b, c] = tris[i]
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);
  if (c ** 2 === a ** 2 + b ** 2) {
    if (a === 0) {
      result = result.slice(0, result.length - 1);
    } else {
      result += 'right\n';
    }
  } else {
    result += 'wrong\n';
  }
}

console.log(result);
