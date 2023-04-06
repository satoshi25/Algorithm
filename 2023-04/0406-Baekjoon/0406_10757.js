/*
https://www.acmicpc.net/problem/10757

Baekjoon
10757 큰수 A+B

문제
두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

입력
첫째 줄에 A와 B가 주어진다. (0 < A,B < 1010000)

출력
첫째 줄에 A+B를 출력한다.

예제 입력 1 
9223372036854775807 9223372036854775808
예제 출력 1 
18446744073709551615
*/

// 1번
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [a, b] = require('fs')
  .readFileSync(path)
  .toString()
  .trim()
  .split(' ')
  .map((el) => (el = el.split('').reverse()));
let digits = a.length >= b.length ? a.length : b.length;
let result = [];
let ten = 0;
for (let i = 0; i < digits; i++) {
  let numA = a[i] !== undefined ? +a[i] : 0;
  let numB = b[i] !== undefined ? +b[i] : 0;
  if (ten) {
    if (numA + numB + ten >= 10) {
      result[i] = +(numA + numB + ten).toString()[1];
      ten = 1;
    } else {
      result[i] = numA + numB + ten;
      ten = 0;
    }
  } else {
    if (numA + numB >= 10) {
      result[i] = +(numA + numB).toString()[1];
      ten = 1;
    } else {
      result[i] = numA + numB;
      ten = 0;
    }
  }
  if (i === digits - 1 && ten === 1) {
    result.push(1);
  }
}

console.log(result.reverse().join(''));

// 2번
const path2 = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [c, d] = require('fs')
  .readFileSync(path2)
  .toString()
  .trim()
  .split(' ')
  .map((el) => (el = el.split('').reverse()));

let num1 = BigInt(c);
let num2 = BigInt(d);

console.log((num1 + num2).toString());
