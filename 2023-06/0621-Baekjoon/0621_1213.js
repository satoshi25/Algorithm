/*
https://www.acmicpc.net/problem/1213
Baekjoon
1213 팰린드롬 만들기

문제
임한수와 임문빈은 서로 사랑하는 사이이다.
임한수는 세상에서 팰린드롬인 문자열을 너무 좋아하기 때문에, 둘의 백일을 기념해서 임문빈은 팰린드롬을 선물해주려고 한다.

임문빈은 임한수의 영어 이름으로 팰린드롬을 만들려고 하는데, 임한수의 영어 이름의 알파벳 순서를 적절히 바꿔서 팰린드롬을 만들려고 한다.

임문빈을 도와 임한수의 영어 이름을 팰린드롬으로 바꾸는 프로그램을 작성하시오.

입력
첫째 줄에 임한수의 영어 이름이 있다. 
알파벳 대문자로만 된 최대 50글자이다.

출력
첫째 줄에 문제의 정답을 출력한다. 
만약 불가능할 때는 "I'm Sorry Hansoo"를 출력한다. 
정답이 여러 개일 경우에는 사전순으로 앞서는 것을 출력한다.

예제 입력 1 
AABB
예제 출력 1 
ABBA

예제 입력 2 
AAABB
예제 출력 2 
ABABA

예제 입력 3 
ABACABA
예제 출력 3 
AABCBAA

예제 입력 4 
ABCD
예제 출력 4 
I'm Sorry Hansoo
*/

const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let str = require('fs').readFileSync(path).toString().trim();

let len = str.length;
let odd = len % 2;
let palin = true;
let result = '';
let [centerIdx, centerStr] = ['', ''];

let alphaIdx = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  .split('')
  .reduce((acc, cur, idx) => {
    acc[cur] = idx;
    acc[idx] = cur;
    return acc;
  }, {});

let cntArr = new Array(26).fill(0);

for (let i = 0; i < len; i++) {
  cntArr[alphaIdx[str[i]]]++;
}
for (let i = 0; i < 26; i++) {
  if (cntArr[i] % 2 === 1) {
    if (odd) {
      centerStr = alphaIdx[i];
      centerIdx = alphaIdx[centerStr];
      odd--;
    } else {
      palin = false;
      break;
    }
  }
}

if (!palin) {
  result = "I'm Sorry Hansoo";
} else {
  let secon = false;
  let i = 0;
  while (i !== -1 || !secon) {
    if (!secon) {
      if (i < 26) {
        let num = Math.floor(cntArr[i] / 2);
        result += alphaIdx[i].repeat(num);
        cntArr[i] -= num;
        i++;
      } else {
        result += centerStr;
        cntArr[centerIdx]--;
        secon = !secon;
        i--;
      }
    } else {
      result += alphaIdx[i].repeat(cntArr[i]);
      i--;
    }
  }
}

console.log(result);

/*
참조할 알파벳인덱스 객체를 만든다.
A부터 Z까지 A가 0이고 0이 A이게 key value를 매칭한다.
주어진 문자열을 순회하며 카운트배열의 요소에 알파벳인덱스를 참조하여 알파벳을 카운팅한다.
카운트배열에 있는 요소가 두번 이상의 홀수가 있을 때는 팰린드롬을 만들 수 없다.
한번의 홀수가 있는 경우까지는 팰린드롬을 만들 수 있다.

팰린드롬이 맞는 경우 문자열을 만드는 과정을 거친다.
홀수인 문자열은 이 문자열의 정 가운데 배치되어야 한다.
홀수임이 판단될 때 가운데 넣을 문자열과 인덱스를 변수에 담는다.
카운트배열을 0부터 마지막 인덱스까지 순회하면서 카운트의 반만큼 result에 문자열을 더한다.
0부터 마지막 인덱스까지 한번의 순회가 끝났을때 홀수 문자열을 더한다.
카운트배열을 반대로 오면서 남은 카운트 만큼 result에 문자열을 더한다.
*/
