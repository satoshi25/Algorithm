/*
https://www.acmicpc.net/problem/18258
Baekjoon
18258 큐 2

문제
정수를 저장하는 큐를 구현한 다음, 입력으로 주어지는 명령을 처리하는 프로그램을 작성하시오.

명령은 총 여섯 가지이다.

push X: 정수 X를 큐에 넣는 연산이다.

pop: 큐에서 가장 앞에 있는 정수를 빼고, 그 수를 출력한다. 
만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.

size: 큐에 들어있는 정수의 개수를 출력한다.

empty: 큐가 비어있으면 1, 아니면 0을 출력한다.

front: 큐의 가장 앞에 있는 정수를 출력한다. 
만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.

back: 큐의 가장 뒤에 있는 정수를 출력한다. 
만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.

입력
첫째 줄에 주어지는 명령의 수 N (1 ≤ N ≤ 2,000,000)이 주어진다. 
둘째 줄부터 N개의 줄에는 명령이 하나씩 주어진다. 
주어지는 정수는 1보다 크거나 같고, 100,000보다 작거나 같다. 
문제에 나와있지 않은 명령이 주어지는 경우는 없다.

출력
출력해야하는 명령이 주어질 때마다, 한 줄에 하나씩 출력한다.

예제 입력 1 
15
push 1
push 2
front
back
size
empty
pop
pop
pop
size
empty
pop
push 3
empty
front
예제 출력 1 
1
2
2
0
1
2
-1
0
1
-1
0
3
*/

const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [orderCnt, ...orders] = require('fs')
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n');

let front = 0;
let rear = 0;
let queue = [];
let digit = /\d+/;
let result = [];

for (let i = 0; i < +orderCnt; i++) {
  if (digit.test(orders[i])) {
    let num = +digit.exec(orders[i])[0];
    queue.push(num);
    rear++;
  } else {
    switch (orders[i]) {
      case 'pop':
        if (rear - front < 1) {
          result.push(-1);
        } else {
          result.push(queue[front]);
          front++;
        }
        break;
      case 'size':
        result.push(rear - front);
        break;
      case 'empty':
        result.push(rear - front === 0 ? 1 : 0);
        break;
      case 'front':
        result.push(rear - front > 0 ? queue[front] : -1);
        break;
      case 'back':
        result.push(rear - front > 0 ? queue[rear - 1] : -1);
        break;
      default:
        console.log('Wrong order');
    }
  }
}

console.log(result.join('\n'));

// 명령의 수가 2,000,000이 될 수 있다.
// 명령들의 입력을 배열로 바꿔서 처리할까 생각했는데 너무 많은 배열의 크기가 문제 되지 않을까라는 생각이 들었다.
// 그렇다고 문자열로 처리할까해도 명령의 수보다 더 많은 반복이 있을것 같다는 생각이 같이 들었다.
// 문자열로는 너무 많은 반복을 할 것 같다.
// 문자열로 하나하나 접근한다면 천만이 넘을 수도 있다.
// 배열로 구현해야 할 것 같다.
// 명령들을 표현하는 queue를 문자열로 구현해서 최대한 적은 수행횟수를 하도록 구현해보자.

// queue를 문자열의 구분자로 나누려고했지만 문자열을 구분자대로 찾는 부분에서
// 필요한 수행연산이 오래걸릴 것 같다.
// queue도 배열을 사용해야할것 같다.

// 함수로 구현하지 말고 switch case로 구현해야겠다.
// pop할때 shift()를 사용하지 않아야 된다.
// 모든 인덱스를 재배열하는데 너무 많은 시간이 걸린다.
// 인덱스 front, rear로 기준인덱스를 변동하는 것으로 뺀것 처럼 구현한다.
