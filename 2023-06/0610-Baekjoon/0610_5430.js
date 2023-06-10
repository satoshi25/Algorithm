/*
https://www.acmicpc.net/problem/5430
Baekjoon
5430 AC

문제
선영이는 주말에 할 일이 없어서 새로운 언어 AC를 만들었다. 
AC는 정수 배열에 연산을 하기 위해 만든 언어이다. 
이 언어에는 두 가지 함수 R(뒤집기)과 D(버리기)가 있다.

함수 R은 배열에 있는 수의 순서를 뒤집는 함수이고, D는 첫 번째 수를 버리는 함수이다. 
배열이 비어있는데 D를 사용한 경우에는 에러가 발생한다.

함수는 조합해서 한 번에 사용할 수 있다. 
예를 들어, "AB"는 A를 수행한 다음에 바로 이어서 B를 수행하는 함수이다. 
예를 들어, "RDD"는 배열을 뒤집은 다음 처음 두 수를 버리는 함수이다.

배열의 초기값과 수행할 함수가 주어졌을 때, 최종 결과를 구하는 프로그램을 작성하시오.

입력
첫째 줄에 테스트 케이스의 개수 T가 주어진다. 
T는 최대 100이다.

각 테스트 케이스의 첫째 줄에는 수행할 함수 p가 주어진다. 
p의 길이는 1보다 크거나 같고, 100,000보다 작거나 같다.

다음 줄에는 배열에 들어있는 수의 개수 n이 주어진다. (0 ≤ n ≤ 100,000)

다음 줄에는 [x1,...,xn]과 같은 형태로 배열에 들어있는 정수가 주어진다. (1 ≤ xi ≤ 100)

전체 테스트 케이스에 주어지는 p의 길이의 합과 n의 합은 70만을 넘지 않는다.

출력
각 테스트 케이스에 대해서, 입력으로 주어진 정수 배열에 함수를 수행한 결과를 출력한다. 
만약, 에러가 발생한 경우에는 error를 출력한다.

예제 입력 1 
4
RDD
4
[1,2,3,4]
DD
1
[42]
RRD
6
[1,1,2,3,5,8]
D
0
[]
예제 출력 1 
[2,1]
error
[1,2,3,5,8]
error
*/

const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [totalCnt, ...cases] = require('fs')
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n');

let result = '';

for (let i = 0; i < totalCnt; i++) {
  let order = cases[i * 3];
  let cnt = +cases[i * 3 + 1];
  let arr = JSON.parse(cases[i * 3 + 2]);
  let len = order.length;
  let error = false;
  let [r, f, t] = [false, 0, cnt];

  for (let j = 0; j < len; j++) {
    if (order[j] === 'R') {
      r = !r;
    } else if (order[j] === 'D') {
      if (t - f === 0) {
        error = true;
        break;
      } else {
        if (!r) {
          f++;
        } else {
          t--;
        }
      }
    }
  }

  if (error) {
    arr = 'error';
  } else {
    arr = arr.slice(f, t);
    if (r) {
      let [left, right, temp] = [0, arr.length - 1, 0];
      while (left <= right) {
        temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
      }
    }
  }

  result += Array.isArray(arr) ? `${JSON.stringify(arr)}\n` : `${arr}\n`;
}

console.log(result);

/*
arr = [1, 2, 3, 4, 5, 6, 7, 8];
RDRDRD
r = false -> 뒤집어져있는지 여부 
f = 0 -> 제일 앞 인덱스
t = arr.length -> arr의 개수

arr [1, 2, 3, 4, 5, 6, 7, 8]부
idx  0  1  2  3  4  5  6  7  8(개수)
     f                       t     r = false

1. R
arr [1, 2, 3, 4, 5, 6, 7, 8] 
idx  0  1  2  3  4  5  6  7  8(개수)
     f                       t     r = true

2. D
arr [1, 2, 3, 4, 5, 6, 7, 8] 
idx  0  1  2  3  4  5  6  7  8(개수)
     f                    t        r = true

3. R
arr [1, 2, 3, 4, 5, 6, 7, 8] 
idx  0  1  2  3  4  5  6  7  8(개수)
     f                    t        r = false

4. D
arr [1, 2, 3, 4, 5, 6, 7, 8] 
idx  0  1  2  3  4  5  6  7  8(개수)
        f                 t        r = false

5. R
arr [1, 2, 3, 4, 5, 6, 7, 8] 
idx  0  1  2  3  4  5  6  7  8(개수)
        f                 t        r = true

6. D
arr [1, 2, 3, 4, 5, 6, 7, 8] 
idx  0  1  2  3  4  5  6  7  8(개수)
        f              t           r = true

순회가 끝났다. 
arr = arr.slice(f, t)

r이 false라면 그대로 
r이 true라면 slice 한 arr을 뒤집는다.

결과 -> [2, 3, 4, 5, 6]

f는 제일 앞 index
t는 arr의 개수 -> t를 개수로 한 이유는 비어있는지 판단하기 위함과 slice에 편한 계산때문이다.
t - f === 0이면 빈 배열이다. 
r은 R명령으로 뒤집어져 있는지의 여부다.

r이 true라면 뒤집혀 있는 경우다.
이때 D명령이 오면 t를 -1 한다.

r이 false라면 그대로인 경우다.
이때 D명령이 오면 f를 +1 한다.
*/
