/*
조카는 아직 "aya", "ye", "woo", "ma" 네 가지 발음과 
네 가지 발음을 조합해서 만들 수 있는 발음밖에 하지 못하고 
연속해서 같은 발음을 하는 것을 어려워합니다. 
문자열 배열 babbling이 매개변수로 주어질 때, 
머쓱이의 조카가 발음할 수 있는 단어의 개수를 return하도록 solution 함수를 완성해주세요.
*/

/*
제한사항
1 ≤ babbling의 길이 ≤ 100
1 ≤ babbling[i]의 길이 ≤ 30
문자열은 알파벳 소문자로만 이루어져 있습니다.
*/

/*
입출력 예
babbling	                                      result
["aya", "yee", "u", "maa"]	                      1
["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]	  2
*/

function solution(babbling) {
	var answer = 0;
	let speak = ['aya', 'ye', 'woo', 'ma'];
	let two = [];
	let three = [];
	let four = [];
	for (let i = 0; i < speak.length; i++) {
		for (let j = 0; j < speak.length; j++) {
			if (speak[i] !== speak[j]) {
				two.push(speak[i]+speak[j]);    
			}
		}
	}
	
	for (let i = 0; i < speak.length; i++) {
		for (let j = 0; j < speak.length; j++) {
			for (let k = 0; k < speak.length; k++) {
				if (speak[i] !== speak[j] && speak[j] !== speak[k]) {
					three.push(speak[i]+speak[j]+speak[k]);
				}
			}
		}
	}
	
	for (let i = 0; i < speak.length; i++) {
		for (let j = 0; j < speak.length; j++) {
			for (let k = 0; k < speak.length; k++) {
				for (let l = 0; l < speak.length; l++) {
					if (speak[i] !== speak[j] && speak[j] !== speak[k] && speak[k] !== speak[l]) {
						four.push(speak[i]+speak[j]+speak[k]+speak[l])
					}
				}
			}
		}
	}
	
	let possible = speak.concat(two, three, four)
	
	for (let i = 0; i < babbling.length; i++) {
		if (possible.indexOf(babbling[i]) !== -1) {
			answer++;
		}
	}
	return answer;
}