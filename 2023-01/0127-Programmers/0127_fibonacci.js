/*
피보나치 수는 F(0) = 0, F(1) = 1일 때, 
1 이상의 n에 대하여 F(n) = F(n-1) + F(n-2) 가 적용되는 수 입니다.

F(2) = F(0) + F(1) = 0 + 1 = 1
F(3) = F(1) + F(2) = 1 + 1 = 2
F(4) = F(2) + F(3) = 1 + 2 = 3
F(5) = F(3) + F(4) = 2 + 3 = 5

2 이상의 n이 입력되었을 때, 
n번째 피보나치 수를 1234567으로 나눈 나머지를 리턴하는 함수, solution을 완성해 주세요.
*/

/*
제한 사항
n은 2 이상 100,000 이하인 자연수입니다.

n	   return
3	     2
5      5
*/

// 1차
function solution(n) {
	var answer = 0;
	let arr = [0, 1];
	let fibo = (num) => {
		if (num <= 1) {
			return arr[num];
		} else {
			if (arr[num]) {
				return arr[num] % 1234567;
			} else {
				arr[num] = ((fibo(num - 2) % 1234567) + (fibo(num - 1) % 1234567)) % 1234567;
				return arr[num];
			}
		}
	}
	answer = fibo(n) % 1234567;
	return answer;
}
// 위와 같이 풀이 했을 때 13, 14 두 테스트 케이스를 통과하지 못했다.
// 재귀 함수의 호출 횟수와 관계가있는 것 같았다.
// 다른 방법으로 풀이할 필요가 있었다.


// 2차
function solution(n) {
	var answer = 0;
	let arr = [0, 1];
	
	for (let i = 2; i <= n; i++) {
		arr[i] = ((arr[i-1] % 1234567) + (arr[i-2] % 1234567)) % 1234567;
		answer = arr[i];
	}
	
	return answer;
}
// 반복문으로 진행했을때 무리가 있을 것이라고 생각했지만 생각보다 잘 풀이되는 모습을 보았다.
// 100,000 이하의 자연수가 범위가 커보였는데 1234567의 나머지여서 그랬는지 문제없이 나왔다.

