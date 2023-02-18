/*
문제 설명
주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 개수를 구하려고 합니다. 
숫자들이 들어있는 배열 nums가 매개변수로 주어질 때, 
nums에 있는 숫자들 중 서로 다른 3개를 골라 더했을 때 
소수가 되는 경우의 개수를 return 하도록 solution 함수를 완성해주세요.
*/

/*
제한사항
nums에 들어있는 숫자의 개수는 3개 이상 50개 이하입니다.
nums의 각 원소는 1 이상 1,000 이하의 자연수이며, 중복된 숫자가 들어있지 않습니다.
*/

/*
입출력 예
nums	       result
[1,2,3,4]	     1
[1,2,7,6,4]	   4
*/

function solution(nums) {
  let answer = 0;
  let array = [];

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        array.push(nums[i] + nums[j] + nums[k]);
      }
    }
  }

  for (let i = 0; i < array.length; i++) {
    let validate = false;
    for (let j = 2; j <= Math.sqrt(array[i]); j++) {
      if (array[i] % j === 0) {
        validate = true;
        break;
      }
    }
    if (validate === false) {
      answer++;
    }
  }

  return answer;
}
