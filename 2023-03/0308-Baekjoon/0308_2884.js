/*
상근이는 매일 아침 알람을 듣고 일어난다. 
항상 조금만 더 자려는 마음 때문에 매일 학교를 지각하고 있다.
이런 상근이를 불쌍하게 보던 창영이는 자신이 사용하는 방법을 추천해 주었다.
바로 "45분 일찍 알람 설정하기"이다.
어차피 알람 소리를 들으면, 알람을 끄고 조금 더 잘 것이기 때문이다. 
이 방법을 사용하면, 매일 아침 더 잤다는 기분을 느낄 수 있고, 학교도 지각하지 않게 된다.
현재 상근이가 설정한 알람 시각이 주어졌을 때, 창영이의 방법을 사용한다면, 
이를 언제로 고쳐야 하는지 구하는 프로그램을 작성하시오.

입력
첫째 줄에 두 정수 H와 M이 주어진다. (0 ≤ H ≤ 23, 0 ≤ M ≤ 59) 
그리고 이것은 현재 상근이가 설정한 놓은 알람 시간 H시 M분을 의미한다.

입력 시간은 24시간 표현을 사용한다. 
24시간 표현에서 하루의 시작은 0:0(자정)이고, 
끝은 23:59(다음날 자정 1분 전)이다. 
시간을 나타낼 때, 불필요한 0은 사용하지 않는다.

출력
첫째 줄에 상근이가 창영이의 방법을 사용할 때, 
설정해야 하는 알람 시간을 출력한다. (입력과 같은 형태로 출력하면 된다.)

예제 입력 1 
10 10
예제 출력 1 
9 25

예제 입력 2 
0 30
예제 출력 2 
23 45

예제 입력 3 
23 40
예제 출력 3 
22 55
*/

let [curHour, curMin] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .split(' ')
  .map((el) => +el);
let alarm = 45;
let hour, min;
if (curMin - alarm < 0) {
  min = curMin + 60 - alarm;
  if (curHour - 1 < 0) {
    hour = curHour + 24 - 1;
  } else {
    hour = curHour - 1;
  }
} else {
  min = curMin - alarm;
  hour = curHour;
}
console.log(`${hour} ${min}`);