/*
https://www.acmicpc.net/problem/1254
Baekjoon
1254 팰린드롬 만들기

문제
동호와 규완이는 212호에서 문자열에 대해 공부하고 있다. 
규완이는 팰린드롬을 엄청나게 좋아한다. 
팰린드롬이란 앞에서부터 읽으나 뒤에서부터 읽으나 같게 읽히는 문자열을 말한다.

동호는 규완이를 위한 깜짝 선물을 준비했다. 
동호는 규완이가 적어놓고 간 문자열 S에 0개 이상의 문자를 문자열 뒤에 추가해서 팰린드롬을 만들려고 한다. 
동호는 가능하면 가장 짧은 문자열을 만들려고 한다.

동호가 만들 수 있는 가장 짧은 팰린드롬의 길이를 출력하는 프로그램을 작성하시오.

입력
첫째 줄에 문자열 S가 주어진다. 
S는 알파벳 소문자로만 이루어져 있고, 길이는 최대 50이다.

출력
첫째 줄에 동호가 만들 수 있는 가장 짧은 팰린드롬의 길이를 출력한다.

예제 입력 1 
abab
예제 출력 1 
5

예제 입력 2 
abacaba
예제 출력 2 
7

예제 입력 3 
qwerty
예제 출력 3 
11

예제 입력 4 
abdfhdyrbdbsdfghjkllkjhgfds
예제 출력 4 
38
*/

const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(path).toString().trim();

function checkPal(str) {
  let [left, right, result] = [0, str.length - 1, true];
  while (left < right) {
    if (str[left] !== str[right]) {
      result = false;
      break;
    }
    left++;
    right--;
  }
  return result;
}

let len = input.length;
let idx = 0;
let result = len;
for (let i = 0; i < len; i++) {
  let str = input.slice(i);
  if (checkPal(str)) {
    idx = i;
    result += i;
    break;
  }
}

console.log(result);

// 팰린드롬은 앞에서부터 봐도 뒤에서부터 봐도 모양이 같은 문자열을 말한다.
// 주어진 문자에서 뒤에 문자열을 추가하여 팰린드롬을 만들려고 한다.
// 최소한의 문자열로 팰린드롬을 만들었을때의 문자열 개수를 리턴한다.

// 매개변수로 주어지는 문자열이 팰린드롬인지 판단하는 함수를 만든다.
// 이 함수는 문자열의 양끝부터 맞는지 확인해온다.

// slice 한 문자열을 함수에 넣는다.
// 이 문자열을 팰린드롬 판단함수에 넣어서 확인한다.

/*
abba -> abba => 4
abab -> ababa => 5
abacaba -> abacaba => 7
aabccba -> aabccbaa => 8
qwerty -> qwertytrewq => 11
abdfhdyrbdbsdfghjkllkjhgfds -> abdfhdyrbdbsdfghjkllkjhgfdsbdbrydhfdba => 38
*/
