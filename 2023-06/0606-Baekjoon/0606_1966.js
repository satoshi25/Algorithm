/*
https://www.acmicpc.net/problem/1966
Baekjoon
1966 프린터 큐

문제
여러분도 알다시피 여러분의 프린터 기기는 
여러분이 인쇄하고자 하는 문서를 인쇄 명령을 받은 ‘순서대로’, 즉 먼저 요청된 것을 먼저 인쇄한다. 여러 개의 문서가 쌓인다면 Queue 자료구조에 쌓여서 FIFO - First In First Out - 에 따라 인쇄가 되게 된다. 하지만 상근이는 새로운 프린터기 내부 소프트웨어를 개발하였는데, 이 프린터기는 다음과 같은 조건에 따라 인쇄를 하게 된다.

현재 Queue의 가장 앞에 있는 문서의 ‘중요도’를 확인한다.
나머지 문서들 중 현재 문서보다 중요도가 높은 문서가 하나라도 있다면, 
이 문서를 인쇄하지 않고 Queue의 가장 뒤에 재배치 한다. 
그렇지 않다면 바로 인쇄를 한다.
예를 들어 Queue에 4개의 문서(A B C D)가 있고, 
중요도가 2 1 4 3 라면 C를 인쇄하고, 다음으로 D를 인쇄하고 A, B를 인쇄하게 된다.

여러분이 할 일은, 현재 Queue에 있는 문서의 수와 중요도가 주어졌을 때, 
어떤 한 문서가 몇 번째로 인쇄되는지 알아내는 것이다. 
예를 들어 위의 예에서 C문서는 1번째로, A문서는 3번째로 인쇄되게 된다.

입력
첫 줄에 테스트케이스의 수가 주어진다. 각 테스트케이스는 두 줄로 이루어져 있다.

테스트케이스의 첫 번째 줄에는 문서의 개수 N(1 ≤ N ≤ 100)과, 
몇 번째로 인쇄되었는지 궁금한 문서가 
현재 Queue에서 몇 번째에 놓여 있는지를 나타내는 정수 M(0 ≤ M < N)이 주어진다. 
이때 맨 왼쪽은 0번째라고 하자. 
두 번째 줄에는 N개 문서의 중요도가 차례대로 주어진다. 
중요도는 1 이상 9 이하의 정수이고, 중요도가 같은 문서가 여러 개 있을 수도 있다.

출력
각 테스트 케이스에 대해 문서가 몇 번째로 인쇄되는지 출력한다.

예제 입력 1 
3
1 0
5
4 2
1 2 3 4
6 0
1 1 9 1 1 1
예제 출력 1 
1
2
5
*/

// 첫 번째 줄에는 전체 테스트케이스 수가 적혀있다.
// 다음 줄부터는 하나의 테스트케이스가 두 줄씩 나타나 있다.
// 각 테스트케이스의 첫 번째 줄에는 문서의 개수 n과 몇 번째로 인쇄되는지 궁금한 문서의 인덱스를 준다.
// 각 테스트케이스의 두 번째 줄에는 문서의 중요도가 차례대로 주어진다.
// 중요도는 1-9, 중복이 있을 수 있다.
// 해당 인덱스의 문서가 몇 번째로 출력되는지 테스트케이스 별로 출력한다.
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [testCnt, ...testCase] = require('fs')
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n');

let result = [];

for (let i = 0; i < +testCnt; i++) {
  let idx = +testCase[i * 2].split(' ')[1];
  let docsArr = testCase[i * 2 + 1].split(' ').map(Number);
  let order = docsArr.slice().sort((a, b) => (a > b ? -1 : 1));
  let j = 0; // 순서도 idx
  let cnt = 0;
  while (docsArr.length !== 0) {
    if (order[j] === docsArr[0]) {
      // 중요도와 대응 되는 문서가 맞을때
      if (idx === 0) {
        cnt++;
        result.push(cnt);
        break;
      } else {
        docsArr.shift();
        idx--;
        cnt++;
        j++;
      }
    } else {
      // 맞지 않을때 뒤로 보내야 할때
      let cur = docsArr.shift();
      docsArr.push(cur);
      if (idx === 0) {
        idx = docsArr.length - 1;
      } else {
        idx--;
      }
    }
  }
}

console.log(result.join('\n'));

// 2 1 4 3 이라면 C D A B 순으로 인쇄된다.
// 내림차순으로 정렬하는 방법은 같은 중요도의 문서가 제대로 정렬되기 어렵기 때문에 할 수 없다.
// 하지만 어떤 중요도가 가장 높은지 판단하기 위해서는 중요도 순으로 정렬된 배열이 필요하다.
// 뒤로 보낼 기준이 필요하기 때문이다.
// 중요도가 높은 문서부터 내림차순으로 정렬된 배열 order를 만든다.
// order를 순회하면서 해당 인덱스가 나올 때까지 원래 문서들을 뒤로 보낸다.
// 추적해야 하는 문서의 인덱스를 문서의 이동이 있을 때마다 그것에 맞게 변동한다.
// 문서의 이동이 있을 때마다 -1 한다.
// 0이라면 현재 배열의 마지막 인덱스로 이동한다.
// 문서가 인쇄될 때마다 1부터 카운트 한다.
// 추적하는 문서가 나왔을 때 해당 카운트를 리턴한다.