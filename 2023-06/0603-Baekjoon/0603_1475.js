/*
https://www.acmicpc.net/problem/1475
Baekjoon
1475 방 번호

문제
다솜이는 은진이의 옆집에 새로 이사왔다. 
다솜이는 자기 방 번호를 예쁜 플라스틱 숫자로 문에 붙이려고 한다.

다솜이의 옆집에서는 플라스틱 숫자를 한 세트로 판다. 
한 세트에는 0번부터 9번까지 숫자가 하나씩 들어있다. 
다솜이의 방 번호가 주어졌을 때, 필요한 세트의 개수의 최솟값을 출력하시오. 
(6은 9를 뒤집어서 이용할 수 있고, 9는 6을 뒤집어서 이용할 수 있다.)

입력
첫째 줄에 다솜이의 방 번호 N이 주어진다. 
N은 1,000,000보다 작거나 같은 자연수이다.

출력
첫째 줄에 필요한 세트의 개수를 출력한다.

예제 입력 1 
9999
예제 출력 1 
2

예제 입력 2 
122
예제 출력 2 
2

예제 입력 3 
12635
예제 출력 3 
1

예제 입력 4 
888888
예제 출력 4 
6
*/

const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(path).toString().trim();

let numCntArr = new Array(9).fill(0);

for (let i = 0; i < input.length; i++) {
  if (input[i] === '9') {
    numCntArr[6]++;
  } else {
    numCntArr[input[i]]++;
  }
  if (i === input.length - 1) {
    numCntArr[6] = Math.ceil(numCntArr[6] / 2);
  }
}

let needSetCnt = Math.max(...numCntArr);

console.log(needSetCnt);

// 배열로 0부터 9까지 카운트한다.
// 6과 9는 같이 세야 한다.
// 6과 9를 따로 하는 것보다 6에 9까지 카운트 한 값을 넣는다.
// 카운트에는 필요한 세트 수로 정리하는 것이 계산하기 편리하다.
// 1개도 1세트 2개도 1세트 이기 때문에 절반으로 나눠 올림한다.
