/*
https://www.acmicpc.net/problem/2869

Baekjoon
2869 - 달팽이는 올라가고 싶다

땅 위에 달팽이가 있다. 이 달팽이는 높이가 V미터인 나무 막대를 올라갈 것이다.

달팽이는 낮에 A미터 올라갈 수 있다. 하지만, 밤에 잠을 자는 동안 B미터 미끄러진다. 
또, 정상에 올라간 후에는 미끄러지지 않는다.

달팽이가 나무 막대를 모두 올라가려면, 며칠이 걸리는지 구하는 프로그램을 작성하시오.

입력
첫째 줄에 세 정수 A, B, V가 공백으로 구분되어서 주어진다. 
(1 ≤ B < A ≤ V ≤ 1,000,000,000)

출력
첫째 줄에 달팽이가 나무 막대를 모두 올라가는데 며칠이 걸리는지 출력한다.

예제 입력 1 
2 1 5
예제 출력 1 
4

예제 입력 2 
5 1 6
예제 출력 2 
2

예제 입력 3 
100 99 1000000000
예제 출력 3 
999999901
*/

// 1차 (시간초과)
// 입력의 크기가 1,000,000,000이라는 사실을 고려하지 못했다.
// const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// let [day, night, height] = require('fs')
//   .readFileSync(path)
//   .toString()
//   .trim()
//   .split(' ')
//   .map(Number);
// let count = 0;
// while (height > 0) {
//   count++;
//   height -= day;
//   if (height <= 0) {
//     break;
//   }
//   height += night;
// }
// console.log(count);

// 2차 (시간초과)
// 반복문의 계산과정을 줄여볼까 했지만 입력이 너무의 크기가 커서 의미가 없었다.
// const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// let [day, night, height] = require('fs')
//   .readFileSync(path)
//   .toString()
//   .trim()
//   .split(' ')
//   .map(Number);
// let count = 0;
// let result = 0;

// while (result < height) {
//   count++;
//   result = day * count - night * (count - 1);
//   if (result >= height) {
//     break;
//   }
// }
// console.log(count);

// 3차 (통과)
// 반복하지 않고 직접 계산하는 방법으로 수정하였다.
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [day, night, height] = require('fs')
  .readFileSync(path)
  .toString()
  .trim()
  .split(' ')
  .map(Number);
let count = Math.ceil((height - night) / (day - night));

console.log(count);
/*
height === day * count - night * (count - 1);
height === day * count - night * count + night;
height - night === (day - night) * count;
(height - night) / (day - night) === count;
count === (height - nigh) / (day - night);
*/
