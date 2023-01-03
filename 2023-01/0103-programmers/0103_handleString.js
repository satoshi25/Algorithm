// 문자열의 길이가 4 혹은 6이고 숫자로만 구성되어 있는지 확인하는 함수를 반환하시오.

// 문자열의 길이는 1이상, 8이하인 문자열이다.
// 문자열은 알파벳 대소문자 또는 숫자 0부터 9까지 숫자로 이루어져있다.
// "a234" false
// "1234" true


function solution(s) {
	var answer = true;
	let arr = s.split('');
	if (arr.length === 6 || arr.length === 4) {
			for (let i = 0; i < arr.length; i++) {
					if(isNaN(arr[i])) {
							return !answer;
					}
			}
	} else {
			return !answer;
	}
	return answer;
}