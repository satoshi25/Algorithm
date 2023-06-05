/*
https://school.programmers.co.kr/learn/courses/30/lessons/12909
Programmers
올바른 괄호

문제
괄호가 바르게 짝지어졌다는 것은 
'(' 문자로 열렸으면 반드시 짝지어서 ')' 문자로 닫혀야 한다는 뜻입니다. 

예를 들어
"()()" 또는 "(())()" 는 올바른 괄호입니다.
")()(" 또는 "(()(" 는 올바르지 않은 괄호입니다.
문자열 s가 올바른 괄호이면 true를 return 하고, 
올바르지 않은 괄호이면 false를 return 하는 solution 함수를 완성해 주세요.
*/

/*
제한사항
문자열 s의 길이 : 100,000 이하의 자연수
문자열 s는 '(' 또는 ')' 로만 이루어져 있습니다.
*/

/*
입출력 예
s	        answer
"()()"	  true
"(())()"	true
")()("	  false
"(()("	  false
*/

// 효율성 테스트를 통과하지 못하여 수정이 필요하다.
function solution(s) {
  var answer = true;
  let str = s.split('');
  let stack = [];
  let pre = str[0];
  let i = 0;

  while (i < str.length) {
    let cur = str[i];
    if (stack.length === 0) {
      stack.push(cur);
      pre = cur;
      i++;
      continue;
    } else {
      if (pre === '(' && cur === ')') {
        stack.pop();
        if (stack.length !== 0) {
          pre = stack[stack.length - 1];
        }
      } else {
        stack.push(cur);
        pre = cur;
      }
      i++;
    }
  }

  if (stack.length !== 0) {
    answer = false;
  }

  return answer;
}

// 효츌성 테스트 통과하는 코드로 수정하였다.
function solution1(s) {
  let answer = true;
  let count = 0;
  let len = s.length;
  for (let i = 0; i < len; i++) {
    if (s[i] === '(') {
      count += 1;
    } else {
      count -= 1;
      if (count < 0) {
        answer = false;
        break;
      }
    }
  }
  if (count !== 0) {
    answer = false;
  }

  return answer;
}
