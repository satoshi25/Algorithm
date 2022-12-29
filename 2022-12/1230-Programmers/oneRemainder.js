// https://school.programmers.co.kr/learn/courses/30/lessons/87389

// 자연수 n이 매개변수로 주어집니다. 
// n을 x로 나눈 나머지가 1이 되도록 하는 가장 작은 자연수 x를 return 하도록 
// solution 함수를 완성해주세요. 
// 답이 항상 존재함은 증명될 수 있습니다.

// 제한사항
// 3 ≤ n ≤ 1,000,000

function solution(n) {
	var answer = 0;
	let remainder = 0;
	let i = 1;
	while (remainder !== 1 && i !== n) {
		if (i > n / 2) {
			answer = n - 1;
			break;
		}
		remainder = n % i;
		answer = i;
		i++;
	}
	return answer;
}

// solution(10) === 3
// solution(12) === 11