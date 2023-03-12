/*
본격적으로 for문 문제를 풀기 전에 주의해야 할 점이 있다. 
입출력 방식이 느리면 여러 줄을 입력받거나 출력할 때 시간초과가 날 수 있다는 점이다.

입력
첫 줄에 테스트케이스의 개수 T가 주어진다. 
T는 최대 1,000,000이다. 
다음 T줄에는 각각 두 정수 A와 B가 주어진다. 
A와 B는 1 이상, 1,000 이하이다.

출력
각 테스트케이스마다 A+B를 한 줄에 하나씩 순서대로 출력한다.

예제 입력 1 
5
1 1
12 34
5 500
40 60
1000 1000

예제 출력 1 
2
46
505
100
2000
*/

const readline = require('readline');
// const fs = require('fs');
// const inputStream = fs.createReadStream('./input.txt');
const rl = readline.createInterface({
  // input: inputStream,
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let result = '';

rl.on('line', (line) => {
  let space = /[\s]/;
  if (space.test(line)) {
    input.push(line);
  }
}).on('close', () => {
  for (let i = 0; i < input.length; i++) {
    let [a, b] = input[i].split(' ').map(Number);
    if (i === input.length - 1) {
      result += a + b;
    } else {
      result += a + b + '\n';
    }
  }
  console.log(result);
});
