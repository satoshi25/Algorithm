/*
가로, 세로의 크기가 각각 100인 정사각형 모양의 흰색 도화지가 있다. 
이 도화지 위에 가로, 세로의 크기가 각각 10인 정사각형 모양의 검은색 색종이를 
색종이의 변과 도화지의 변이 평행하도록 붙인다. 
이러한 방식으로 색종이를 한 장 또는 여러 장 붙인 후 
색종이가 붙은 전체 영역의 넓이를 구하는 프로그램을 작성하시오.

입력
첫째 줄에 색종이의 수가 주어진다. 이어 둘째 줄부터 한 줄에 하나씩 색종이를 붙인 위치가 주어진다. 색종이를 붙인 위치는 두 개의 자연수로 주어지는데 첫 번째 자연수는 색종이의 왼쪽 변과 도화지의 왼쪽 변 사이의 거리이고, 두 번째 자연수는 색종이의 아래쪽 변과 도화지의 아래쪽 변 사이의 거리이다. 색종이의 수는 100 이하이며, 색종이가 도화지 밖으로 나가는 경우는 없다

출력
첫째 줄에 색종이가 붙은 검은 영역의 넓이를 출력한다.

예제 입력 1 
3
3 7
15 7
5 2
예제 출력 1 
260
*/

const readline = require('readline');
const fs = require('fs');
const inputStream = fs.createReadStream('./input.txt');
const rl = readline.createInterface({
  // input: process.stdin,
  input: inputStream,
  output: process.stdout,
});

let input = [];

rl.on('line', (line) => {
  input.push(line.trim());
}).on('close', () => {
  let max = [0, 0];
  let [, ...rects] = input.map((el, idx) => {
    if (idx > 0) {
      el = el.split(' ').map(Number);
      if (el[0] > max[0]) {
        max[0] = el[0];
      }
      if (el[1] > max[1]) {
        max[1] = el[1];
      }
    }
    return el;
  });
  let matrix = new Array(max[1] + 10)
    .fill(0)
    .map((el) => (el = new Array(max[0] + 10).fill(0)));
  for (let i = 0; i < rects.length; i++) {
    for (let j = 0; j < 10; j++) {
      for (let k = 0; k < 10; k++) {
        matrix[rects[i][1] + j][rects[i][0] + k]++;
      }
    }
  }
  let count = matrix.reduce((acc, cur) => {
    acc += cur.filter((el) => el > 0).length;
    return acc;
  }, 0);
  console.log(count);
});
