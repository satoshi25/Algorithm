// array의 각 element중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수를 작성하시오.

// arr은 자연수를 담은 배열이다.
// 정수 i, j에 대해 i ≠ j 이면 arr[i] ≠ arr[j] 입니다.
// divisor는 자연수입니다.
// array는 길이 1 이상인 배열입니다.

function solution(arr, divisor) {
	var answer = [];
	answer = arr.filter(el => {
		return !(el % divisor);
	}).sort((a, b) => a - b);
	if (answer.length === 0) {
		answer.push(-1);
	}
	return answer;
}