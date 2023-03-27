/*
어떤 자연수 p와 q가 있을 때, 만일 p를 q로 나누었을 때 나머지가 0이면 q는 p의 약수이다. 

6을 예로 들면

6 ÷ 1 = 6 … 0
6 ÷ 2 = 3 … 0
6 ÷ 3 = 2 … 0
6 ÷ 4 = 1 … 2
6 ÷ 5 = 1 … 1
6 ÷ 6 = 1 … 0
그래서 6의 약수는 1, 2, 3, 6, 총 네 개이다.

두 개의 자연수 N과 K가 주어졌을 때, 
N의 약수들 중 K번째로 작은 수를 출력하는 프로그램을 작성하시오.

입력
첫째 줄에 N과 K가 빈칸을 사이에 두고 주어진다. 
N은 1 이상 10,000 이하이다. 
K는 1 이상 N 이하이다.

출력
첫째 줄에 N의 약수들 중 K번째로 작은 수를 출력한다. 
만일 N의 약수의 개수가 K개보다 적어서 K번째 약수가 존재하지 않을 경우에는 0을 출력하시오.

예제 입력 1 
6 3
예제 출력 1 
3

예제 입력 2 
25 4
예제 출력 2 
0

예제 입력 3 
2735 1
예제 출력 3 
1
*/

const readline = require('readline');
const fs = require('fs');
const inputStream = fs.createReadStream('./input.txt');
const rl = readline.createInterface({
  input: inputStream,
  // input: process.stdin,
  output: process.stdout,
});

let input;

rl.on('line', (line) => {
  input = line.trim();
}).on('close', () => {
  let [num, k] = input.split(' ').map(Number);
  let divisors = [];
  let result = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      divisors.push(i);
    }
    if (divisors.length === k) {
      result = divisors[k - 1];
      break;
    }
  }
  console.log(result);
  process.exit();
});
