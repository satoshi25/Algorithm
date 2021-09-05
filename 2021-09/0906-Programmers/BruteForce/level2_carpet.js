// Programmers 완전탐색 level2 카펫

// brown + yellow = 넓이
// brown은 yellow를 둘러싸고 있다.
// 가로의 길이가 세로의 길이보다 크거나 같다.
// brown은 ((yellow로 만들어진 사각형의 가로길이 + 2) * 2) + (yellow로 만든 사각형의 세로길이 * 2)
// yellow는 yellow로 만들 수 있는 사각형의 넓이를 나타난다.
// yellow의 사각형 넓이의 약수 중에 brown의 수와 같은지 위의 식으로 비교한다.
// 같은 조건이 나온다면 그 조건을 토대로 전체 넓이의 가로 세로길이는 yellow 가로 + 2, yellow 세로 + 2로 알 수 있다.
// brown + yellow의 넓이의 가로, 세로길이를 리턴해야한다.
// yellow 가로 + 2, yellow 세로 + 2를 리턴한다.

function solution(brown, yellow) {
	let answer = [];	
	
	// yellow는 사각형의 넓이를 나타낸다.
	// yellow의 약수는 사각형의 가로 혹은 세로가 된다.
	// yellow의 가로는 세로보다 같거나 크기 때문에 제곱근보다 큰 약수는 가로 작은 길이는 세로가 된다.
	// 약수들의 모임을 divisor로 선언한다.
	let divisor = [];

	// yellow의 약수를 제곱근까지 반복문으로 구한다.
	for (let i = 1; i <= Math.sqrt(yellow); i++) {
		if (yellow % i === 0) {

			// 가로가 세로보다 크기 때문에 0부터 제곱근까지의 약수는 세로길이다.
			// 반복문에서 약수는 세로길이기 때문에 yellow에서 세로길이를 나눠 가로길이를 구한다.
			let width = yellow / i;

			// 가로길이를 배열 divisor에 넣는다.
			divisor.push(width);
		}
	}
	
	// yellow로 만들 수있는 사각형의 형태가 다양하다.
	// 그 중에 brown과 조건이 맞는 사각형을 찾아야 한다.
	// yellow의 가로길이가 담긴 배열을 반복문으로 brown과 맞는 사각형의 모양을 찾는다.
	// 그 모양의 가로 세로 길이를 리턴한다.
	for (let i = 0; i < divisor.length; i++) {

		// 현재 yellow의 가로길이가 만족하는 brown을 prebrown에 할당한다.
		let preBrown = ((divisor[i] + 2) * 2) + ((yellow / divisor[i]) * 2);

		// 현재 가로길이에 만족하는 prebrown과 전달인자로 주어진 brown이 같을 때
		if (preBrown === brown) {

			// 전체 사각형의 길이는 yellow 사각형을 둘러싸고 있기에 가로 세로에 +2를 해야한다.
			// 전체 사각형의 가로길이를 리턴할 배열에 넣는다.
			answer.push(divisor[i] + 2);

			// brown + yellow가 전체 사각형의 넓이이기 때문에 위에 구했던 전체 가로길이로 나누어 세로길이를 구한다.
			// 전체 사각형의 세로길이를 리턴한 배열에 넣는다.
			answer.push((brown + yellow) / (divisor[i] + 2));
		}
	}
	return answer;
}

/*
function solution(brown, yellow) {

	let answer = [];	
	let divisor = [];

	for (let i = 1; i <= Math.sqrt(yellow); i++) {
		if (yellow % i === 0) {
			let width = yellow / i;
			divisor.push(width);
		}
	}

	for (let i = 0; i < divisor.length; i++) {
		let preBrown = ((divisor[i] + 2) * 2) + ((yellow / divisor[i]) * 2);
		if (preBrown === brown) {
			answer.push(divisor[i] + 2);
			answer.push((brown + yellow) / (divisor[i] + 2));
		}
	}

	return answer;
}
*/