/*
https://www.acmicpc.net/problem/11650
Baekjoon
1427 소트인사이드

문제
배열을 정렬하는 것은 쉽다. 
수가 주어지면, 그 수의 각 자리수를 내림차순으로 정렬해보자.

입력
첫째 줄에 정렬하려고 하는 수 N이 주어진다. 
N은 1,000,000,000보다 작거나 같은 자연수이다.

출력
첫째 줄에 자리수를 내림차순으로 정렬한 수를 출력한다.

예제 입력 1 
2143
예제 출력 1 
4321

예제 입력 2 
999998999
예제 출력 2 
999999998

예제 입력 3 
61423
예제 출력 3 
64321

예제 입력 4 
500613009
예제 출력 4 
965310000
*/

const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let [nums, max] = require('fs')
  .readFileSync(path)
  .toString()
  .trim()
  .split('')
  .reduce(
    (acc, cur) => {
      let num = +cur;
      if (acc[1] < num) {
        acc[1] = num;
      }
      acc[0].push(num);
      return acc;
    },
    [[], 0]
  );

let cntArr = new Array(max + 1).fill(0);
let sumArr = [];
let sortArr = [];

for (let i = 0; i < nums.length; i++) {
  cntArr[nums[i]]++;
}

for (let j = cntArr.length - 1; j >= 0; j--) {
  if (sumArr.length === 0) {
    sumArr[j] = cntArr[j];
  } else {
    sumArr[j] = sumArr[j + 1] + cntArr[j];
  }
}

let indexArr = sumArr.map((el) => el - 1);

for (let k = nums.length - 1; k >= 0; k--) {
  sortArr[indexArr[nums[k]]] = nums[k];
  indexArr[nums[k]]--;
}

console.log(sortArr.join(''));
