// JadenCase는 단어의 첫 문자가 대문자이고 그 외의 알파벳은 소문자인 문자열이다.
// 첫 문자가 알파벳이 아닌 경우에 이어지는 알파벳은 소문자다.
// 문자열을 JadenCase로 반환하는 함수를 작성하시오.

// 문자열은 길이 1 이상 200이하의 문자열이다.
// 문자열은 알파벳과 숫자, 공백문자로 이루어져있다.
// 공백문자가 연속해서 나올 수 있다.
// 숫자로만 이루어진 단어는 없다.

function solution(s) {
	var answer = '';
	let str = s;
	let arr = str.split(' ');
	for (let i = 0; i < arr.length; i++) {
			if (!isNaN(Number(arr[i][0]).valueOf()) || arr[i].length === 0) {
					arr[i] = arr[i].toLowerCase();
					continue;
			} else {
					let word = arr[i].toLowerCase().split('');
					word[0] = word[0].toUpperCase();

					arr[i] = word.join('');            
			}
	}
	answer = arr.join(' ');
	return answer;
}