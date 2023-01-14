// 배열 arr이 주어진다. 배열의 각 원소는 0~9의 숫자로 이루어져 있다.
// 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거하려고 한다.

// 배열 arr의 크기 : 1,000,000 이하의 자연수
// 배열 arr의 원소의 크기 : 0이상 9이하의 정수

function solution(arr) {
	var answer = [];
	let pre = arr[0];
	answer.push(arr[0]);
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] === pre) {
			continue;
		} else {
			answer.push(arr[i]);
			pre = arr[i];
		}
	}
	return answer;
}