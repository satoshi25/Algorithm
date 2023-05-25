/*
https://www.acmicpc.net/problem/20920
Baekjoon
20920 영단어 암기는 괴로워

문제
화은이는 이번 영어 시험에서 틀린 문제를 바탕으로 영어 단어 암기를 하려고 한다. 
그 과정에서 효율적으로 영어 단어를 외우기 위해 영어 단어장을 만들려 하고 있다. 
화은이가 만들고자 하는 단어장의 단어 순서는 다음과 같은 우선순위를 차례로 적용하여 만들어진다.

자주 나오는 단어일수록 앞에 배치한다.
해당 단어의 길이가 길수록 앞에 배치한다.
알파벳 사전 순으로 앞에 있는 단어일수록 앞에 배치한다
 
M보다 짧은 길이의 단어의 경우 읽는 것만으로도 외울 수 있기 때문에 
길이가 M이상인 단어들만 외운다고 한다. 
화은이가 괴로운 영단어 암기를 효율적으로 할 수 있도록 단어장을 만들어 주자.

입력
첫째 줄에는 영어 지문에 나오는 단어의 개수 N과 외울 단어의 길이 기준이 되는 M이 공백으로 구분되어 주어진다. 
(1 <= N <= 100000, 1 <= M <= 10)

둘째 줄부터 
N + 1번째 줄까지 외울 단어를 입력받는다. 이때의 입력은 알파벳 소문자로만 주어지며 단어의 길이는 10을 넘지 않는다.

단어장에 단어가 반드시 1개 이상 존재하는 입력만 주어진다.

출력
화은이의 단어장에 들어 있는 단어를 단어장의 앞에 위치한 단어부터 한 줄에 한 단어씩 순서대로 출력한다.

예제 입력 1 
7 4
apple
ant
sand
apple
append
sand
sand
예제 출력 1 
sand
apple
append

예제 입력 2 
12 5
appearance
append
attendance
swim
swift
swift
swift
mouse
wallet
mouse
ice
age
예제 출력 2 
swift
mouse
appearance
attendance
append
wallet
*/

const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [vocaCnt, ...vocaLists] = require('fs')
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n');

let [n, m] = vocaCnt.split(' ').map(Number);

let vocaCntObj = vocaLists.reduce((acc, cur) => {
  if (cur.length >= m) {
    if (!acc[cur]) {
      acc[cur] = 1;
    } else {
      acc[cur]++;
    }
  }
  return acc;
}, {});

let cntArr = [];
for (let key in vocaCntObj) {
  if (!cntArr[vocaCntObj[key]]) {
    cntArr[vocaCntObj[key]] = [key];
  } else {
    cntArr[vocaCntObj[key]].push(key);
  }
}

cntArr = cntArr.filter((el) => !!el);
let lengthArr = cntArr.map((el) => {
  el = el
    .reduce((acc, cur) => {
      let length = cur.length;
      if (!acc[length]) {
        acc[length] = [cur];
      } else {
        acc[length].push(cur);
      }
      return acc;
    }, [])
    .filter((ele) => !!ele)
    .map((el) => {
      el = el.sort((a, b) => (a > b ? -1 : 1));
      return el;
    });
  return el;
});

console.log(lengthArr.flat(2).reverse().join('\n'));

// 1 자주 나오는 단어일수록 앞에
// 2 단어 길이가 길수록 앞에
// 3 알파벳 사전 순으로 앞에
// 단어 길이는 m이상인 것만 외운다.

// 입력의 크기가 100,000이다.
// n^2이 되면 안된다.
// 이중 반복문으로 크기 비교는 할 수 없다.
// 많이 나올수록 앞에 있다.
// 단어들을 카운트해야 한다.
// // 한번 순회하여 인덱스를 횟수로 한다 (횟수가 증가하기 때문에 할수 없다.)
// // set에 담는다.(키와 값이 같아서 카운트 할 수 없다.)
// 순회하면서 객체로 key에 단어 value에 카운트한다.
// 순회하면서 m이상인 단어만 카운트 한다.
// for in으로 객체를 배열에 담는다.
// 배열의 인덱스가 카운트가 되고 value에는 배열로 같은 카운트를 담는다.
// 내림차순으로 정렬하여 마지막에 합칠때 뒤에서 부터 진행하여 오름차순이 되게 만든다.
// 횟수가 높은 배열이 뒤로 가게 된다.
// 같은 횟수 배열에서 길이를 인덱스로 하여 배열을 만든다.
// 같은 인덱스에 있는 배열에는 같은 길이의 단어가 모인다.
// 같은 배열에서 내림차순으로 정렬한다.
