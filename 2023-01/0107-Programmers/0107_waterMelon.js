// 주어진 자연수와 같이 '수박수박수....'를 반복하는 문자열을 반환하는 함수를 작성하시오.

// n의 길이 10,000이하인 자연수

// n : 3 '수박수'
// n : 4 '수박수박'

function solution(n) {
	var answer = '';
	let twoStr = '수박';
	let oneStr = '수';
	if (n % 2 === 1) {
			answer = twoStr.repeat((n-1)/2) + oneStr;
	} else {
			answer = twoStr.repeat(n/2);
	}
	return answer;
}