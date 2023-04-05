/*
https://www.acmicpc.net/problem/3009

Baekjoon
3009 네 번째 점
세 점이 주어졌을 때, 축에 평행한 직사각형을 만들기 위해서 필요한 
네 번째 점을 찾는 프로그램을 작성하시오.

입력
세 점의 좌표가 한 줄에 하나씩 주어진다. 
좌표는 1보다 크거나 같고, 1000보다 작거나 같은 정수이다.

출력
직사각형의 네 번째 점의 좌표를 출력한다.

예제 입력 1 
5 5
5 7
7 5
예제 출력 1 
7 7

예제 입력 2 
30 20
10 10
10 20
예제 출력 2 
30 10
*/

const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(path).toString().trim().split('\n');

let result = input
  .reduce(
    (acc, cur) => {
      let [spotX, spotY] = cur.split(' ').map(Number);
      let xIdx = acc[0].indexOf(spotX);
      let yIdx = acc[1].indexOf(spotY);
      if (xIdx > -1) {
        acc[0].splice(xIdx, 1);
      } else {
        acc[0].push(spotX);
      }
      if (yIdx > -1) {
        acc[1].splice(yIdx, 1);
      } else {
        acc[1].push(spotY);
      }
      return acc;
    },
    [[], []]
  )
  .flat()
  .join(' ');

console.log(result);
// 1
// 빈 객체를 만든다.
// 순회하면서 좌표의 모든 숫자를 키로 만들어 횟수를 체크한다.
// 객체의 키값 중에 1로 나온 키만 출력한다.

// 2
// x, y에 각각 배열을 만든다.
// 좌표들을 순회하면서 x, y배열 안에 없으면 넣고 있으면 뺀다.
// x, y 배열에 남는 것을 출력한다.
