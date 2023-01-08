// 주어진 문자열 s를 숫자로 변환한 결과를 반환하는 함수를 작성하시오.

// s의 길이는 1이상 5이하입니다.
// s의 맨 앞에는 부호(+,-)가 올 수 있습니다.
// s는 부호와 숫자로만 이루어져있습니다.
// s는 "0"으로 시작하지 않습니다.

function solution(s) {
	var answer = 0;
	let str = s.split('');
	if (str[0] === '-') {
		str.shift();
		answer = - Number(str.join(''));
	} else {
		answer = Number(str.join(''));
	}
	return answer;
}