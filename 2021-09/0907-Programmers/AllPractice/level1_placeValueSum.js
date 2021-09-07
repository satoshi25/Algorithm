// 자연수 n은 100,000,000 이하의 자연수
// n의 각 자릿수의 합을 리턴

function solution(n) {
  
	let answer = 0;
	
	// 자연수 n을 문자열로 만든다.
	// 문자열을 split을 사용해 배열로 글자 단위로 분리해 배열에 담는다.
	// 배열의 각 요소를 숫자로 변환한다.
	// 숫자가 들어있는 배열의 모든 수를 더한다.
	// 더한 값을 리턴한다.
	answer = String(n).split('').map(el => Number(el)).reduce((acc, cur) => {
			return acc += cur;
	}, 0)

	return answer;
}