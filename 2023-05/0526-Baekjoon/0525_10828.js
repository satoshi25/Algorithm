/*
https://www.acmicpc.net/problem/10828
Baekjoon
10828 스택
문제

문제
정수를 저장하는 스택을 구현한 다음, 입력으로 주어지는 명령을 처리하는 프로그램을 작성하시오.

명령은 총 다섯 가지이다.

1. push X: 정수 X를 스택에 넣는 연산이다.

2. pop: 스택에서 가장 위에 있는 정수를 빼고, 그 수를 출력한다. 
만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.

3. size: 스택에 들어있는 정수의 개수를 출력한다.

4. empty: 스택이 비어있으면 1, 아니면 0을 출력한다.

5. top: 스택의 가장 위에 있는 정수를 출력한다. 
만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.

입력
첫째 줄에 주어지는 명령의 수 N (1 ≤ N ≤ 10,000)이 주어진다. 
둘째 줄부터 N개의 줄에는 명령이 하나씩 주어진다. 
주어지는 정수는 1보다 크거나 같고, 100,000보다 작거나 같다. 
문제에 나와있지 않은 명령이 주어지는 경우는 없다.

출력
출력해야하는 명령이 주어질 때마다, 한 줄에 하나씩 출력한다.

예제 입력 1 
14
push 1
push 2
top
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
top
예제 출력 1 
2
2
0
2
1
-1
0
1
-1
0
3

예제 입력 2 
7
pop
top
push 123
top
pop
top
pop
예제 출력 2 
-1
-1
123
123
-1
-1
*/

const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [orderCnt, ...orders] = require('fs')
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n');

let stackArr = [];
let nextIdx = 0;
let resultArr = [];

let orderList = {
  push: (num) => {
    stackArr[nextIdx] = num;
    nextIdx++;
  },
  pop: () => {
    let result;
    if (!!stackArr.length) {
      result = stackArr.pop();
      nextIdx--;
    } else {
      result = -1;
    }
    return result;
  },
  size: () => {
    let result = nextIdx;
    return result;
  },
  empty: () => {
    return nextIdx === 0 ? 1 : 0;
  },
  top: () => {
    return !!stackArr[nextIdx - 1] ? stackArr[nextIdx - 1] : -1;
  },
};

for (let i = 0; i < orderCnt; i++) {
  if (orderList[orders[i]]) {
    resultArr.push(orderList[orders[i]]());
  } else {
    let [order, num] = orders[i].split(' ');
    orderList[order](+num);
  }
}

console.log(resultArr.join('\n'));
