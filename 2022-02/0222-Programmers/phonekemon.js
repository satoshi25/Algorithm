// https://programmers.co.kr/learn/courses/30/lessons/1845

// nums	        result
// [3,1,2,3]	    2
// [3,3,3,2,2,4]	3
// [3,3,3,2,2,2]	2

// 입출력 예 설명
// 입출력 예 #1
// 문제의 예시와 같습니다.

// 입출력 예 #2
// 6마리의 폰켓몬이 있으므로, 3마리의 폰켓몬을 골라야 합니다.
// 가장 많은 종류의 폰켓몬을 고르기 위해서는 3번 폰켓몬 한 마리, 2번 폰켓몬 한 마리, 4번 폰켓몬 한 마리를 고르면 되며, 따라서 3을 return 합니다.

// 해결 안된 케이스
// X

function solution(nums) {
  let answer = 0;
  let max = nums.length / 2;
  let arr = [];

  for (let i = 0; i < nums.length; i++) {
    if (!arr[nums[i]]) {
      arr[nums[i]] = nums[i];
    }
  }

  answer = arr.filter(el => !!el).length;

  if (answer >= max) {
    answer = max;
  }

  return answer;
}