/*
https://www.acmicpc.net/problem/5637
Baekjoon
5637 가장 긴 단어

문제
단어는 알파벳(a-z, A-Z)과 하이픈(-)으로만 이루어져 있다. 
단어와 다른 문자(마침표, 숫자, 심볼, 등등등...)로 이루어진 글이 주어졌을 때, 
가장 긴 단어를 구하는 프로그램을 작성하시오.

Apple의 길이는 5, son-in-law는 10, ACM-ICPC는 8이다.

입력
입력은 여러 줄, 문단으로 이루어져 있다. 
하지만, 10,000글자를 넘지 않는다. 
단어의 길이는 100을 넘지 않는다. 
E-N-D는 입력의 마지막을 의미한다.

출력
가장 긴 단어를 소문자로 출력한다. 
가장 긴 단어가 여러개인 경우에는 글에서 가장 먼저 나오는 것을 출력한다.

예제 입력 1 
  ACM International Collegiate Programming Contest (abbreviated as 
ACM-ICPC or just ICPC) is an annual multi-tiered computer programming 
competition among the universities of the world. The contest is 
sponsored by IBM. Headquartered at Baylor University, with autonomous 
regions on six continents, the ICPC is directed by Baylor Professor 
William B. Poucher, Executive Director, and operates under the 
auspices of the Association for Computing Machinery (ACM). 

  The 2012 ACM-ICPC Asia Hatyai Regional Programming Contest is 
held during 15-16 November 2012. It is hosted by Prince of Songkla 
University, Hatyai campus. E-N-D
예제 출력 1 
international
*/

const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let str = require('fs').readFileSync(path).toString();

let [words, len, max, word, cur, space] = [
  [],
  str.length,
  0,
  /[a-zA-Z\-]/,
  '',
  /[\s\n]/,
];

for (let i = 0; i < len; i++) {
  if (word.test(str[i])) {
    cur += str[i];
  } else if (space.test(str[i])) {
    if (cur === 'E-N-D') {
      break;
    }
    if (cur !== '') {
      let curLen = cur.length;
      if (curLen === max) {
        words.push(cur);
      } else if (curLen > max) {
        words = [];
        max = curLen;
        words.push(cur);
      }
      cur = '';
    }
  }
}

console.log(words[0].toLowerCase());
