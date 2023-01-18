/*
전화번호가 문자열 phone_number로 주어졌을 때, 
전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, 
solution을 완성해주세요.
*/

// phone_number는 길이 4 이상, 20이하인 문자열입니다.

/*
phone_number	return
"01033334444"	"*******4444"
"027778888"	  "*****8888"
*/

function solution(phone_number) {
	var answer = '';
	let four = phone_number.split('');
	for (let i = 0; i < four.length - 4; i++) {
		four[i] = '*';
	}
	answer = four.join('');
	return answer;
}