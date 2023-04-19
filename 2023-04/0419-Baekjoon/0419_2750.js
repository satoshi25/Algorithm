/*
https://www.acmicpc.net/problem/2750
Baekjoon
2750 수 정렬하기
*/

const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [count, ...nums] = require('fs')
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map(Number);
let result = [];

for (let i = 0; i < count; i++) {
  if (!result[result.length - 1]) {
    result.push(nums[i]);
  } else {
    for (let j = result.length - 1; j >= 0; j--) {
      if (j === result.length - 1 && result[j] < nums[i]) {
        result.push(nums[i]);
        break;
      } else if (j === 0 && result[j] > nums[i]) {
        result.unshift(nums[i]);
      } else {
        if (result[j] > nums[i] && result[j - 1] < nums[i]) {
          result.splice(j, 0, nums[i]);
        }
      }
    }
  }
}

console.log(result.join('\n'));
