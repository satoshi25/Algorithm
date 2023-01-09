// 하샤드 수는 자리수의 합으로 나눠지는 수를 의미한다.
// 주어진 x의 수가 하샤드 수 인지 아닌지 boolean 값을 반환하는 함수를 작성하시오.

function solution(x) {
	var answer = true;
	let num = String(x).split('').reduce((a, b) => {
		let el = Number(b);
		a = a + el;
		return a;
	}, 0);
	console.log(num);
	if (x % num !== 0) {
		answer = false;
	}
	return answer;
}