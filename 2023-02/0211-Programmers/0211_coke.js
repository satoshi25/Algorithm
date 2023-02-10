/*
문제는 빈 병 a개를 가져다주면 콜라 b병을 주는 마트가 있을 때, 
빈 병 n개를 가져다주면 몇 병을 받을 수 있는지 계산하는 문제입니다. 
기존 콜라 문제와 마찬가지로, 보유 중인 빈 병이 a개 미만이면, 
추가적으로 빈 병을 받을 순 없습니다. 
콜라를 받기 위해 마트에 주어야 하는 병 수 a, 
빈 병 a개를 가져다 주면 마트가 주는 콜라 병 수 b, 
상빈이가 가지고 있는 빈 병의 개수 n이 매개변수로 주어집니다.

상빈이가 받을 수 있는 콜라의 병 수를 return 하도록 solution 함수를 작성해주세요.
*/

/*
제한사항
1 ≤ b < a ≤ n ≤ 1,000,000
정답은 항상 int 범위를 넘지 않게 주어집니다.
*/

/*
입출력 예
a	    b	    n	    result
2	    1	    20	    19
3	    1	    20	    9
*/

function solution(a, b, n) {
	var answer = 0;
	
	const sendBottle = (minus, plus, total) => {
		let count = 0;
		let receive = 0;
		while (total >= minus) {
			total = total - minus;
			count++;
		}
		receive = plus * count;
		total = total + receive;
		return [total, receive];
	}
	
	while (n >= a){
		let cur = sendBottle(a, b, n);
		answer += cur[1];
		n = cur[0];
	}
	
	return answer;
}