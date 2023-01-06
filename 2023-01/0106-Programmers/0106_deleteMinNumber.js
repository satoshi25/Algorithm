// 정수로 이루어진 배열에서 가장 작은 수를 제거한 배열을 반환하시오.

// 반환하는 배열이 빈배열일 경우는 배열에 -1을 채워 반환하시오.

function solution(arr) {
	var answer = [];
	let min = 0;
	let num = 0;
	if (arr.length === 1) {
		answer.push(-1);
		return answer;
	} else {
		min = arr[0];
		for (let i = 1; i < arr.length; i++) {
			if (arr[i] < min) {
				min = arr[i];
				num = i;
			}
		}
	}
	
	arr.splice(num, 1);
	return arr;
}