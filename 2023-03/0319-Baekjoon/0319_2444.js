/*
예제를 보고 규칙을 유추한 뒤에 별을 찍어 보세요.

입력
첫째 줄에 N(1 ≤ N ≤ 100)이 주어진다.

출력
첫째 줄부터 2×N-1번째 줄까지 차례대로 별을 출력한다.

예제 입력 1 
5
예제 출력 1 
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
*/

const readline = require('readline');
const fs = require('fs');
const inputStream = fs.createReadStream('./input.txt');
const rl = readline.createInterface({
  // input: process.stdin,
  input: inputStream,
  output: process.stdout,
});

let input;

rl.on('line', (line) => {
  input = line;
  rl.close();
}).on('close', () => {
  function makeTri(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {
      result.push(' '.repeat(num - i) + '*'.repeat(2 * i - 1));
    }
    for (let i = num - 1; i >= 1; i--) {
      result.push(' '.repeat(num - i) + '*'.repeat(2 * i - 1));
    }
    result = result.join('\n');
    return result;
  }
  console.log(makeTri(+input));
  process.exit();
});
