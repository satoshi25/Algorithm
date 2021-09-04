// 수포자 3명이 시험문제를 찍기로 했다.
// 1번 수포자의 답안 방식
// [1, 2, 3, 4, 5, 1, 2, 3, 4, 5...]
// 2번 수포자의 답안 방식
// [2, 1, 2, 3, 2, 4, 2, 5...]
// 3번 수포자의 답안 방식
// [3, 3, 1, 1, 2, 2, 4, 4, 5, 5...]
// 3명의 답안중 가장 많이 정답을 맞춘 사람의 답안을 배열로 리턴하세요.

function solution(answers) {
	var answer = [];

	// 1번 2번 3번에 해당하는 답을 각각 배열로 만든다.
	// 각 배열의 개수는 answers의 개수만큼 만든다.
	let first = [];
	let second = [];
	let third = [];

	for (let i = 0; i < answers.length; i++) {
		// 1번 수포자
		if (first[i - 1] === 5) {
			first[i] = 1;   
		} else if (first[i - 1] === undefined) {
			first[i] = 1;
		} else {
			first[i] = first[i - 1] + 1;
		}
		// 2번 수포자
		if (i % 2 === 0) {
			second[i] = 2;
		} else {
			if (second[i - 2] === undefined || second[i - 2] === 5) {
				second[i] = 1;
			} else if (second[i - 2] === 1) {
				second[i] = 3;
			} else {
				second[i] = second[i - 2] + 1;
			}
		}
		// 3번 수포자
		if (third[i - 2] === undefined && third[i - 1] === undefined) {
			third[i] = 3;
		} else if (third[i - 2] !== third[i - 1]) {
			third[i] = third[i - 1];
		} else if (third[i - 2] === third[i - 1]) {
			if (third[i - 1] === 3 || third[i - 1] === 5) {
				third[i] = third[i - 1] - 2;
			} else if (third[i - 1] === 1 || third[i - 1] === 4) {
				third[i] = third[i - 1] + 1;
			} else {
				third[i] = third[i - 1] + 2;
			}
		}
	}
	// 답안의 카운트를 선언한다.
	let countone = 0;
	let counttwo = 0;
	let countthr = 0;

	// 반복문으로 1, 2, 3번의 답과 답안이 같으면 count를 증가시킨다.
	for (let i = 0; i < answers.length; i++) {
		if (first[i] === answers[i]) {
			countone++;
		}
		if (second[i] === answers[i]) {
			counttwo++;
		}
		if (third[i] === answers[i]) {
			countthr++;    
		}
	}

	// 배열에 카운트 값을 넣고 최대 값을 구한다.
	let maxArr = [];
	maxArr.push(countone);
	maxArr.push(counttwo);
	maxArr.push(countthr);
	let maxNum = Math.max(...maxArr);

	// 최대 값과 같은 카운트를 answer 배열에 넣는다.
	for (let i = 0; i < maxArr.length; i ++) {
		if (maxArr[i] === maxNum) {
			answer.push(i + 1);
		}
	}
	
	// 가장 많이 맞춘 사람을 리턴한다.
	return answer;
}

console.log(solution([1,2,3,4,5]));