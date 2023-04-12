/*
https://www.acmicpc.net/problem/2231
Baekjoon
2231 분해합

문제
어떤 자연수 N이 있을 때, 그 자연수 N의 분해합은 N과 N을 이루는 각 자리수의 합을 의미한다. 
어떤 자연수 M의 분해합이 N인 경우, M을 N의 생성자라 한다. 
예를 들어, 245의 분해합은 256(=245+2+4+5)이 된다. 
따라서 245는 256의 생성자가 된다. 
물론, 어떤 자연수의 경우에는 생성자가 없을 수도 있다. 
반대로, 생성자가 여러 개인 자연수도 있을 수 있다.

자연수 N이 주어졌을 때, N의 가장 작은 생성자를 구해내는 프로그램을 작성하시오.

입력
첫째 줄에 자연수 N(1 ≤ N ≤ 1,000,000)이 주어진다.

출력
첫째 줄에 답을 출력한다. 생성자가 없는 경우에는 0을 출력한다.

예제 입력 1 
216
예제 출력 1 
198
*/

const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let num = require('fs').readFileSync(path).toString().trim();

// 생성자에서 분해합까지 최대 범위로 적은 수로부터 분해합까지 높여가며 찾는다.

let digits = num.length;
// 주어진 수의 자리수

let start = +num - 9 * digits - 1;
// 주어진 수의 자리수 * 9 만큼이 만들어질 수 있는 생성자의 범위이기 때문에
// 분해합에서 자리수 * 9를 뺀 값부터 시작한다.

let result = 0;
// 최종적으로 반환할 값이다. 조건에 만족한다면 result에 값을 넣고
// 만족하지 않는다면 0이 그대로 출력된다.

while (start <= +num) {
  // start에서 1씩 높여가며 분해합과 값이 맞는지 비교한다.

  let [sum, els] = start
    .toString()
    .split('')
    .reduce(
      (acc, cur) => {
        acc[0] += +cur;
        acc[1].push(cur);
        return acc;
      },
      [start, []]
    );
  // 현재 값(start)을 분해합으로 계산한 결과(sum)와 각 자리의 수(els)가 계산된다.

  if (sum === +num) {
    // 계산된 합(sum)이 분해합과 같다면

    result = +els.join('');
    // 각 자리의 수가 생성자이기 때문에 합쳐 result에 할당한다.

    break;
    // 최소 값에서부터 크기를 키웠으므로 조건에 맞는다면 최소값이기 때문에 반복을 멈춘다.
  }
  start++;
  // 생성자와 분해합이 맞지 않는다면 start에 1을 높여 다음 경우를 계산한다.
}

console.log(result);

// const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// let num = require('fs').readFileSync(path).toString().trim();

// let digits = num.length;

// let start = +num - 9 * digits - 1;
// let result = 0;

// while (start <= +num) {
//   let [sum, els] = start
//     .toString()
//     .split('')
//     .reduce(
//       (acc, cur) => {
//         acc[0] += +cur;
//         acc[1].push(cur);
//         return acc;
//       },
//       [start, []]
//     );
//   if (sum === +num) {
//     result = +els.join('');
//     break;
//   }
//   start++;
// }

// console.log(result);
