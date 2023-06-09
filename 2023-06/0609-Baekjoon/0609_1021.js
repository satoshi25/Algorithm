/*
https://www.acmicpc.net/problem/1021
Baekjoon
1021 회전하는 큐

문제
지민이는 N개의 원소를 포함하고 있는 양방향 순환 큐를 가지고 있다. 
지민이는 이 큐에서 몇 개의 원소를 뽑아내려고 한다.

지민이는 이 큐에서 다음과 같은 3가지 연산을 수행할 수 있다.

첫 번째 원소를 뽑아낸다. 
이 연산을 수행하면, 원래 큐의 원소가 a1, ..., ak이었던 것이 a2, ..., ak와 같이 된다.

왼쪽으로 한 칸 이동시킨다. 
이 연산을 수행하면, a1, ..., ak가 a2, ..., ak, a1이 된다.

오른쪽으로 한 칸 이동시킨다. 
이 연산을 수행하면, a1, ..., ak가 ak, a1, ..., ak-1이 된다.

큐에 처음에 포함되어 있던 수 N이 주어진다. 
그리고 지민이가 뽑아내려고 하는 원소의 위치가 주어진다. 
(이 위치는 가장 처음 큐에서의 위치이다.) 

이때, 그 원소를 주어진 순서대로 뽑아내는데 드는 2번, 3번 연산의 최솟값을 출력하는 프로그램을 작성하시오.

입력
첫째 줄에 큐의 크기 N과 뽑아내려고 하는 수의 개수 M이 주어진다. 
N은 50보다 작거나 같은 자연수이고, M은 N보다 작거나 같은 자연수이다. 
둘째 줄에는 지민이가 뽑아내려고 하는 수의 위치가 순서대로 주어진다. 
위치는 1보다 크거나 같고, N보다 작거나 같은 자연수이다.

출력
첫째 줄에 문제의 정답을 출력한다.

예제 입력 1 
10 3
1 2 3
예제 출력 1 
0

예제 입력 2 
10 3
2 9 5
예제 출력 2 
8

예제 입력 3 
32 6
27 16 30 11 6 23
예제 출력 3 
59

예제 입력 4 
10 10
1 6 3 2 7 9 8 4 10 5
예제 출력 4 
14
*/

const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n, cnt], nums] = require('fs')
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((el) => (el = el.split(' ').map(Number)));

let queue = new Array(n).fill(0).map((el, idx) => (el = idx + 1));
let idx = 0;
let count = 0;

for (let i = 0; i < cnt; i++) {
  let goal = nums[i];
  if (queue[idx] === goal) {
    queue.splice(idx, 1);
    if (idx === queue.length) {
      idx = 0;
    }
    continue;
  } else {
    let [cnt, leftIdx, rightIdx] = [0, idx, idx];

    while (queue[leftIdx] !== goal && queue[rightIdx] !== goal) {
      if (leftIdx === 0) {
        leftIdx = queue.length - 1;
      } else {
        leftIdx--;
      }
      if (rightIdx === queue.length - 1) {
        rightIdx = 0;
      } else {
        rightIdx++;
      }
      cnt++;
    }

    idx = queue[leftIdx] === goal ? leftIdx : rightIdx;
    queue.splice(idx, 1);
    if (queue.length === idx) {
      idx = 0;
    }
    count += cnt;
  }
}
console.log(count);

/*
10 3 -> 2 9 3
1 2 3 4 5 6 7 8 9 10

1->2
 1  2  3  4  5  6  7  8  9  10
  ->
1회

3->9
 1  3  4  5  6  7  8  9  10
- <-                   <-  <-
3회

10->5
 1  3  4  5  6  7  8  10
           <- <- <- <-
4회

1 + 3 + 4 = 8
배열의 기준 인덱스가 이동하는 방식으로 구현한다.
기준 인덱스부터 +방향과 -방향 두 방향으로 순회한다.
빠지는 요소가 있기 때문에 계산으로 구할 수 없고 직접 확인하며 순회하여야 한다.
인덱스 요소를 뺄때는 splice를 사용한다.
마지막 인덱스 요소가 빠지는 상황에는 인덱스는 0으로 +1 방향으로 옮긴다.
*/
