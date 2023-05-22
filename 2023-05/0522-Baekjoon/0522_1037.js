/*
https://www.acmicpc.net/problem/1037
Baekjoon
1037 약수

문제
양수 A가 N의 진짜 약수가 되려면, N이 A의 배수이고, A가 1과 N이 아니어야 한다. 
어떤 수 N의 진짜 약수가 모두 주어질 때, N을 구하는 프로그램을 작성하시오.

입력
첫째 줄에 N의 진짜 약수의 개수가 주어진다. 
이 개수는 50보다 작거나 같은 자연수이다. 
둘째 줄에는 N의 진짜 약수가 주어진다. 
1,000,000보다 작거나 같고, 2보다 크거나 같은 자연수이고, 중복되지 않는다.

출력
첫째 줄에 N을 출력한다. N은 항상 32비트 부호있는 정수로 표현할 수 있다.

예제 입력 1 
2
4 2
예제 출력 1 
8

예제 입력 2 
1
2
예제 출력 2 
4

예제 입력 3 
6
3 4 2 12 6 8
예제 출력 3 
24

예제 입력 4 
14
14 26456 2 28 13228 3307 7 23149 8 6614 46298 56 4 92596
예제 출력 4 
185192
*/

const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[factCnt], [...factors]] = require('fs')
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

factors.sort((a, b) => (a > b ? 1 : -1));

if (factCnt % 2 === 0) {
  console.log(factors[0] * factors[factCnt - 1]);
} else {
  console.log(Math.pow(factors[(factCnt / 2) >> 0], 2));
}

// 임의의 수 x의 약수개수가 홀수라면 x는 x의 정수 제곱근이 약수인 수다.
// 임의의 수 x의 약수개수가 짝수라면 x는 x의 정수 제곱근 약수가 없는 수다.
// 나열된 약수들을 정렬한다.
// 짝수라면 처음 인덱스와 마지막 인덱스의 곱을 출력한다.
// 홀수라면 가운데 인덱스의 제곱을 출력한다.
