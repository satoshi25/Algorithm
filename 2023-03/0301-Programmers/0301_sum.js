/*
연속된 세 개의 정수를 더해 12가 되는 경우는 3, 4, 5입니다. 
두 정수 num과 total이 주어집니다. 
연속된 수 num개를 더한 값이 total이 될 때, 
정수 배열을 오름차순으로 담아 return하도록 solution함수를 완성해보세요.


제한사항
1 ≤ num ≤ 100
0 ≤ total ≤ 1000
num개의 연속된 수를 더하여 total이 될 수 없는 테스트 케이스는 없습니다.


입출력 예
num	    total	     result
3	      12	       [3, 4, 5]
5	      15	       [1, 2, 3, 4, 5]
4	      14	       [2, 3, 4, 5]
5	      5	         [-1, 0, 1, 2, 3]
*/

function solution(num, total) {
  var answer = [];
  let arr = new Array(num).fill(0);
  let sum = -1;
  let i = total;

  while (sum !== total) {
    let result = arr.map((el, idx) => {
      el = i + idx;
      return el;
    });
    sum = result.reduce((sum, cur) => (sum += cur));
    if (sum === total) {
      answer = result;
    }
    i--;
  }

  return answer;
}
