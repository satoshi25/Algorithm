/*
https://www.acmicpc.net/problem/2292
그림은 위의 사이트를 참고.

Baekjoon
2292 - 벌집
위의 그림과 같이 육각형으로 이루어진 벌집이 있다. 
그림에서 보는 바와 같이 중앙의 방 1부터 시작해서 
이웃하는 방에 돌아가면서 1씩 증가하는 번호를 주소로 매길 수 있다. 
숫자 N이 주어졌을 때, 벌집의 중앙 1에서 N번 방까지 최소 개수의 방을 지나서 갈 때 
몇 개의 방을 지나가는지(시작과 끝을 포함하여)를 계산하는 프로그램을 작성하시오. 
예를 들면, 13까지는 3개, 58까지는 5개를 지난다.

입력
첫째 줄에 N(1 ≤ N ≤ 1,000,000,000)이 주어진다.

출력
입력으로 주어진 방까지 최소 개수의 방을 지나서 갈 때 몇 개의 방을 지나는지 출력한다.

예제 입력 1 
13
예제 출력 1 
3
*/

const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let num = +require('fs').readFileSync(path).toString().trim();

let roomNum = 1;
while (num > 0) {
  if (roomNum === 1) {
    num -= roomNum;
    if (num !== 0) {
      roomNum++;
    }
  } else {
    let roomCount = roomNum * 6 - 6;
    num -= roomCount;
    if (num > 0) {
      roomNum++;
    }
  }
}
console.log(roomNum);

/*
벌집은 1 6 12 18 24 30 순으로 방이 커진다.
방을 만들고 넣으면서 계산? - 수행 시간이 오래걸린다.
몇번을 더했는지로 계산? - 헷갈릴 수 있다.
숫자에서 방만큼 빼가면서 계산? - 조금 더 직관적인것 같다.
*/
