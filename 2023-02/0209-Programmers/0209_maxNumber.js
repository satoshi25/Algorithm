/*
어떤 숫자에서 k개의 수를 제거했을 때 얻을 수 있는 가장 큰 숫자를 구하려 합니다.
예를 들어, 숫자 1924에서 수 두 개를 제거하면 
[19, 12, 14, 92, 94, 24] 를 만들 수 있습니다. 
이 중 가장 큰 숫자는 94 입니다.
문자열 형식으로 숫자 number와 제거할 수의 개수 k가 solution 함수의 매개변수로 주어집니다.
number에서 k 개의 수를 제거했을 때 만들 수 있는 수 중 
가장 큰 숫자를 문자열 형태로 return 하도록 solution 함수를 완성하세요.
*/

/*
제한 조건
number는 2자리 이상, 1,000,000자리 이하인 숫자입니다.
k는 1 이상 number의 자릿수 미만인 자연수입니다.
*/

/*
입출력 예
number	      k	    return
"1924"	      2	    "94"
"1231234"	    3	    "3234"
"4177252841"	4	    "775841"
*/

function solution(number, k) {
	var answer = '';
	let max = 0;
	let idx = 0;
	for (let i = 0; i < k; i++) {
		if (Number(number[i]) > max) {
			max = Number(number[i]);
			idx = i;
			if (max === 9) {
				break;
			}
		}
	}
	let remain = k - idx;
	let pre = 0;
	for (let i = idx; i < number.length; i++) {
		if (answer === '') {
			answer += number[i];
			pre = number[i];
		} else {
			if (pre > number[i] && number[i] < number[i+1] && remain !== 0) {
				remain -= 1;
				continue;
			} else {
				answer += number[i];
			}
		}
	}
	
	return answer;
}
// k보다 작은 인덱스 안에서 가장 높은 자리수를 찾는다.
// k에서 그자리의 인덱스를 뺀 차만큼을 나머지에서 뺀다.
// 다음수가 이전 보다 커진다면 이전을 뺀다.
// k - 인덱스 만큼 뺀다.