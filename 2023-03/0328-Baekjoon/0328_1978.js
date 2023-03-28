/*
주어진 수 N개 중에서 소수가 몇 개인지 찾아서 출력하는 프로그램을 작성하시오.

입력
첫 줄에 수의 개수 N이 주어진다. 
N은 100이하이다. 
다음으로 N개의 수가 주어지는데 수는 1,000 이하의 자연수이다.

출력
주어진 수들 중 소수의 개수를 출력한다.

예제 입력 1 
4
1 3 5 7
예제 출력 1 
3
*/

const readline = require('readline');
const fs = require('fs');
const inputStream = fs.createReadStream('./input.txt');
const rl = readline.createInterface({
  input: inputStream,
  // input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', (line) => {
  input.push(line.trim());
}).on('close', () => {
  let count = 0;
  function validate(num) {
    let result = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        result = false;
        break;
      }
    }
    if (num < 2) {
      result = false;
    }
    return result;
  }
  let [numCount, nums] = input.map((el, idx) => {
    if (idx === 1) {
      el = el.split(' ').map(Number);
    } else {
      el = +el;
    }
    return el;
  });
  for (let i = 0; i < numCount; i++) {
    if (validate(nums[i])) {
      count++;
    }
  }
  console.log(count);
  process.exit();
});
