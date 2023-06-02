/*
https://www.acmicpc.net/problem/1789
Baekjoon
1789 수들의 합

문제
서로 다른 N개의 자연수의 합이 S라고 한다. S를 알 때, 자연수 N의 최댓값은 얼마일까?

입력
첫째 줄에 자연수 S(1 ≤ S ≤ 4,294,967,295)가 주어진다.

출력
첫째 줄에 자연수 N의 최댓값을 출력한다.

예제 입력 1 
200
예제 출력 1 
19
*/

// 1번
// 1부터 커지면서 값을 구해가는 코드 (오래걸릴 수 있으므로 수정이 필요할 수 있다.)
// const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// let num = +require('fs').readFileSync(path).toString().trim();
// let i = 1;
// let count = 1;
// while (num - i > i) {
//   num -= i;
//   count++;
//   i++;
// }
// console.log(count);
/* 1번
서로 다른 N개의 자연수들로 S가 된다.
S를 알고 있을때 N의 최대값은?
최대의 개수로 덧셈이 되려면 작은 수부터 뺄셈한다.
최소 값 1부터 1씩 커지며 뺄셈을 반복한다.
1씩 커지는 커지며 빼는 값이 뺄셈의 결과보다 작아야 한다.
남은 값이 작아지면 카운트할 수 없다.
*/

// 2번
// 1부터 n까지의 패턴을 찾기 위해 사용한 코드
// const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// let num = +require('fs').readFileSync(path).toString().trim();

// let nums = new Array(num).fill(0).map((el, idx) => (el = idx + 1));
// function sumCnt(n) {
//   let i = 1;
//   let count = 1;
//   while (n - i > i) {
//     n -= i;
//     count++;
//     i++;
//   }
//   return count;
// }
// for (let i = 0; i < nums.length; i++) {
//   console.log(nums[i], sumCnt(nums[i]));
// }
/* 2번
이 과정이 숫자가 크다면 더 많은 수행시간이 필요할 수 있다.
수정될 수 있는지 보자.
1부터 16까지의 패턴을 보았다
1 1
2 1
3 2
4 2
5 2
6 3
7 3
8 3
9 3
10 4
11 4
12 4
13 4
14 4
15 5
16 5
*/

// 3번
// O(1)로 수정한 코드
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let num = +require('fs').readFileSync(path).toString().trim();

let n = Math.floor((Math.sqrt(8 * num + 1) - 1) / 2);
console.log(n);
// 3번
// 결국은 1부터 어떤 값의 합보다 큰 값으로 결정된다.
// 1부터 n까지의 값의 합은 n(n+1)/2 다.
// 정답은 n과 합 S가 n(n+1)/2 <= S <= (n+1)(n+2)/2 이 관계를 만족할때의 n이다.
// S가 16이라면
// 5(5+1)/2 <= 16 <= (5+1)(5+2)/2
// 15 < 16 < 21
// 만족하는 n은 5다.
// 즉 n의 값이 5보다 크고 6보다 작은 어떤 수일때는 값이 5가 되는 것이다.
// n의 값을 구하여 버림하면 원하는 값을 구할 수 있다.
// n(n+1)/2 = s 의 등식을 풀어보자.
// n^2 + n = 2s
// n^2 + n - 2s = 0
// 이차방정식의 근의 공식은 ax^2 + bx + c = 0 이라고 할때
// x = (-b +-sqrt(b^2 - 4ac))/2a
// n = (-1 +-sqrt(1 - 4*1*(-2s))/2   -> c = -2s
//   = (-1 +-sqrt(1 + 8s))/2
// n은 자연수 이기 때문에 n을 버림하여 floor를 사용한다.
// n = Math.floor((Math.sqrt(1 + 8s) -1)/2)가 된다.
// 이렇게 구하게 되면 O(1)로 구할 수 있다.
