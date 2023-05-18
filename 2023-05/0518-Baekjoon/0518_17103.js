/*
https://www.acmicpc.net/problem/17103
Baekjoon
17103 골드바흐 파티션

문제
골드바흐의 추측: 2보다 큰 짝수는 두 소수의 합으로 나타낼 수 있다.
짝수 N을 두 소수의 합으로 나타내는 표현을 골드바흐 파티션이라고 한다. 
짝수 N이 주어졌을 때, 골드바흐 파티션의 개수를 구해보자. 
두 소수의 순서만 다른 것은 같은 파티션이다.

입력
첫째 줄에 테스트 케이스의 개수 T (1 ≤ T ≤ 100)가 주어진다. 
각 테스트 케이스는 한 줄로 이루어져 있고, 정수 N은 짝수이고, 2 < N ≤ 1,000,000을 만족한다.

출력
각각의 테스트 케이스마다 골드바흐 파티션의 수를 출력한다.

예제 입력 1 
5
6
8
10
12
100
예제 출력 1 
1
1
2
1
6
*/

const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [testCnt, ...evenNums] = require('fs')
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

let max = Math.max(...evenNums);

function rangePrime(num) {
  let nums = new Array(num + 1).fill(true, 2).fill(false, -num - 1, -num);
  let i = 0;
  let limit = Math.sqrt(num);
  while (i <= limit) {
    let j = 2;
    if (nums[i]) {
      while (i * j <= num) {
        nums[i * j] = false;
        j++;
      }
    }
    i++;
  }
  nums = nums.reduce((acc, cur, idx) => {
    if (!!cur) {
      acc.push(idx);
    }
    return acc;
  }, []);
  return nums;
}

let primes = rangePrime(max);
let primeSet = new Set(primes);
for (let i = 0; i < testCnt; i++) {
  let count = 0;
  let limit = evenNums[i] / 2;
  for (let j = 0; primes[j] <= limit; j++) {
    if (primeSet.has(evenNums[i] - primes[j])) {
      count++;
    }
  }
  console.log(count);
}
