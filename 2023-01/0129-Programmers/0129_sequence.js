/*
등차수열 혹은 등비수열 common이 매개변수로 주어질 때, 
마지막 원소 다음으로 올 숫자를 return 하도록 solution 함수를 완성해보세요.
*/

/*
제한사항
2 < common의 길이 < 1,000
-1,000 < common의 원소 < 2,000
common의 원소는 모두 정수입니다.
등차수열 혹은 등비수열이 아닌 경우는 없습니다.
등비수열인 경우 공비는 0이 아닌 정수입니다.
*/

/*
common	       result
[1, 2, 3, 4] 	    5
[2, 4, 8]	        16
*/

function solution(common) {
	var answer = 0;
	let sum = common[1] - common[0];
	let multi = common[1] / common[0];
	let sumValidate = true;
	for (let i = 1; i < 3; i++) {
		if (common[i] - common[i-1] === sum) {
			sumValidate = true;
		} else {
			sumValidate = false;
		}
	}
	if (sumValidate) {
		answer = common[common.length-1] + sum;
	} else {
		answer = common[common.length-1] * multi;
	}
	return answer;
}