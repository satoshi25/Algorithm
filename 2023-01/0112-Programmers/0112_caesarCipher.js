// 어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 
// Caesar cipher 시저 암호라고 합니다.
// "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. "z"는 1만큼 밀면 "a"가 됩니다. 

// - 공백은 아무리 밀어도 공백입니다.
// - s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.
// - s의 길이는 8000이하입니다.
// - n은 1 이상, 25이하인 자연수입니다.

function solution(s, n) {
	var answer = '';
	let str = s.split('');
	let small = ' abcdefghijklmnopqrstuvwxyz';
	let big = ' ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	let arr = [];
	for (let i = 0; i < str.length; i++) {
		let temp = '';
		if (str[i] === ' ') {
			arr.push(str[i]);
		} else if (small.indexOf(str[i]) > -1) {
			temp = small.indexOf(str[i]);
			temp = (temp + n) % 26;
			if (temp !== 0) {
				arr.push(small[temp]);    
			} else {
				arr.push('z');
			}
		} else {
			temp = big.indexOf(str[i]);
			temp = (temp + n) % 26;
			if (temp !== 0) {
				arr.push(big[temp]);
			} else {
				arr.push('Z');
			}
		}
	}
	answer = arr.join('');
	return answer;
}