/*
무한히 큰 배열에 다음과 같이 분수들이 적혀있다.

1/1	1/2	1/3	1/4	1/5	…
2/1	2/2	2/3	2/4	…	…
3/1	3/2	3/3	…	…	…
4/1	4/2	…	…	…	…
5/1	…	…	…	…	…
…	…	…	…	…	…
이와 같이 나열된 분수들을 1/1 → 1/2 → 2/1 → 3/1 → 2/2 → … 과 같은 
지그재그 순서로 차례대로 1번, 2번, 3번, 4번, 5번, … 분수라고 하자.

X가 주어졌을 때, X번째 분수를 구하는 프로그램을 작성하시오.

입력
첫째 줄에 X(1 ≤ X ≤ 10,000,000)가 주어진다.

출력
첫째 줄에 분수를 출력한다.

예제 입력      예제 출력
1            1/1
2            1/2
3            2/1
4            3/1
5            2/2
6            1/3
7            1/4
8            2/3
9            3/2
14           2/4
*/

const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let num = +require('fs').readFileSync(path).toString().trim();

let snd = 1;
let mnd = 1;
let result = 1;

while (num > result) {
  let sumOdd = (snd + mnd) % 2;
  if (snd === 1 || mnd === 1) {
    if (snd === 1) {
      if (mnd % 2 === 1) {
        mnd++;
      } else {
        snd++;
        mnd--;
      }
    } else {
      if (snd % 2 === 0) {
        snd++;
      } else {
        snd--;
        mnd++;
      }
    }
  } else {
    if (sumOdd) {
      snd++;
      mnd--;
    } else {
      snd--;
      mnd++;
    }
  }
  result++;
}

console.log(`${snd}/${mnd}`);
