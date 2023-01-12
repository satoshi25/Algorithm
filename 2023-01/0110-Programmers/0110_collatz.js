// Collatz 라는 사람에 의해 제기된 이 추측은 다음 작업을 반복하면 모든 수를 1로 만들 수 있다는 추측이다.

// 1-1. 입력된 수가 짝수라면 2로 나눈다.
// 1-2. 입력된 수가 홀수라면 3을 곱하고 1을 더한다.
// 2. 결과로 나온 수에 같은 작업을 1이 될때 까지 반복한다.

// 입력된 수 num은 1 이상 8,000,000 미만의 정수다.

function solution(num) {
	var answer = 0;
	let count = 0;
	let cur = num;
	while (cur !== 1) {
		if (cur % 2 === 0) {
			cur = cur / 2;
		} else {
			cur = (cur * 3) + 1;
		}
		if (count === 500) {
			break;    
		}
		count++
	}
	if (count >= 500) {
		answer = -1;
	} else {
		answer = count;    
	}
	return answer;
}