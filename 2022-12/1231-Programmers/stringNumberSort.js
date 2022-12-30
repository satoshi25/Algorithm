// 공백으로 구분되어 있는 문자열 숫자들 중에서 최소값과 최대값만을 문자열로 리턴하세요.

// 입력되는 문자열에는 두개 이상의 정수가 공백으로 구분되어 있습니다.

function solution(s) {
	var answer = '';
	let str = s;
	let arr = str.split(' ');
	let arr1 = arr.sort((a, b) => {
		return a - b;
	})
	answer = arr1[0] + ' ' + arr1[arr1.length-1];
	return answer;
}