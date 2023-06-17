/*
https://www.acmicpc.net/problem/1541
Baekjoon
1541 잃어버린 괄호

문제
세준이는 양수와 +, -, 그리고 괄호를 가지고 식을 만들었다. 
그리고 나서 세준이는 괄호를 모두 지웠다.

그리고 나서 세준이는 괄호를 적절히 쳐서 이 식의 값을 최소로 만들려고 한다.

괄호를 적절히 쳐서 이 식의 값을 최소로 만드는 프로그램을 작성하시오.

입력
첫째 줄에 식이 주어진다. 
식은 ‘0’~‘9’, ‘+’, 그리고 ‘-’만으로 이루어져 있고, 가장 처음과 마지막 문자는 숫자이다. 
그리고 연속해서 두 개 이상의 연산자가 나타나지 않고, 5자리보다 많이 연속되는 숫자는 없다. 
수는 0으로 시작할 수 있다. 
입력으로 주어지는 식의 길이는 50보다 작거나 같다.

출력
첫째 줄에 정답을 출력한다.

예제 입력 1 
55-50+40
예제 출력 1 
-35

예제 입력 2 
10+20+30+40
예제 출력 2 
100

예제 입력 3 
00009-00009
예제 출력 3 
0
*/

const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(path).toString().trim();

function convertInfix(input) {
  let len = input.length;
  let infix = [];
  let operator = /[\+\-]/;
  let num = '';
  let bracket = false;

  for (let i = 0; i < len; i++) {
    if (!operator.test(input[i])) {
      num += input[i];
    } else {
      infix.push(+num);
      num = '';
      if (input[i] === '+') {
        infix.push(input[i]);
      } else {
        if (bracket) {
          infix.push(')');
          infix.push(input[i]);
          infix.push('(');
        } else {
          infix.push(input[i]);
          infix.push('(');
          bracket = !bracket;
        }
      }
    }
    if (i === len - 1) {
      infix.push(+num);
      if (bracket) {
        infix.push(')');
        bracket = !bracket;
      }
    }
  }
  return infix;
}

function arrSum(arr) {
  let [a, op] = ['', ''];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '+' || arr[i] === '-') {
      op = arr[i];
    } else {
      if (a === '') {
        a = arr[i];
      } else {
        if (op === '+') {
          a = a + arr[i];
        } else {
          a = a - arr[i];
        }
      }
    }
  }
  return a;
}

function calculate(arr, callback) {
  let len = arr.length;
  let stack = [];
  let result = 0;

  let left = false;
  for (let i = 0; i < len; i++) {
    if (arr[i] === '(' || arr[i] === ')') {
      if (arr[i] === '(') {
        left = i;
      } else {
        let temp = arr.slice(left + 1, i);
        temp = callback(temp);
        stack.push(temp);
        left = false;
      }
    } else {
      if (left === false) {
        stack.push(arr[i]);
      }
    }
  }
  result = callback(stack);
  return result;
}

let infix = convertInfix(input);
let result = calculate(infix, arrSum);

console.log(result);
