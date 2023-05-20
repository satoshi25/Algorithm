/*
https://www.acmicpc.net/problem/11050
Baekjoon
11050 이항 계수 1

문제
자연수 N과 정수 K가 주어졌을 때 이항 계수 (N K)를 구하는 프로그램을 작성하시오.
이항 계수는 주어진 집합에서 원소를 선택하는 경우의 수를 나타내는 계수다.


입력
첫째 줄에 N과 K가 주어진다. (1 ≤ N ≤ 10, 0 ≤ K ≤ N)

출력
N에서 K를 순서를 고려하지 않고 고르는 경우의 수(N K)를 출력한다.

예제 입력 1 
5 2
예제 출력 1 
10
*/

const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [n, k] = require('fs')
  .readFileSync(path)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

let result = 1;
let i = 0;
while (i < k) {
  result *= (n - i) / (i + 1);
  i++;
}

console.log(result);
// nCr = n! / (n - r)! * r!
