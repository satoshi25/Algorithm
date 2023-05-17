/*
https://www.acmicpc.net/problem/4948
Baekjoon
4948 베르트랑 공준

문제
베르트랑 공준은 임의의 자연수 n에 대하여, 
n보다 크고, 2n보다 작거나 같은 소수는 적어도 하나 존재한다는 내용을 담고 있다.

이 명제는 조제프 베르트랑이 1845년에 추측했고, 파프누티 체비쇼프가 1850년에 증명했다.

예를 들어, 10보다 크고, 20보다 작거나 같은 소수는 4개가 있다. (11, 13, 17, 19) 
또, 14보다 크고, 28보다 작거나 같은 소수는 3개가 있다. (17,19, 23)

자연수 n이 주어졌을 때, n보다 크고, 2n보다 작거나 같은 소수의 개수를 구하는 프로그램을 작성하시오. 

입력
입력은 여러 개의 테스트 케이스로 이루어져 있다. 
각 케이스는 n을 포함하는 한 줄로 이루어져 있다.
입력의 마지막에는 0이 주어진다.

출력
각 테스트 케이스에 대해서, n보다 크고, 2n보다 작거나 같은 소수의 개수를 출력한다.

제한
1 ≤ n ≤ 123,456

예제 입력 1 
1
10
13
100
1000
10000
100000
0
예제 출력 1 
1
4
3
21
135
1033
8392
*/

const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

function rangePrime(num) {
  let end = num * 2;
  let nums = new Array(end - 1).fill(0).map((el, idx) => (el += idx + 2));
  let i = 0;
  while (nums[i] <= Math.sqrt(end)) {
    nums = nums.filter((el, idx) => el % nums[i] !== 0 || el === nums[i]);
    i++;
  }
  return nums;
}

let max = Math.max(...input);
let primes = rangePrime(max);

for (let i = 0; i < input.length; i++) {
  if (input[i] !== 0) {
    console.log(
      primes.filter((el) => el > input[i] && el <= input[i] * 2).length
    );
  }
}
