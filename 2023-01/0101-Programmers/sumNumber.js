// 자연수 n을 연속된 자연수들로 표현하는 방법의 수를 반환하시오.
// 자연수 15는
// 1 + 2 + 3 + 4 + 5 = 15
// 4 + 5 + 6 = 15
// 7 + 8 = 15
// 15 = 15
// 이렇게 4가지로 표현할 수 있다.

// 연속된 자연수를 더하여 n이 나와야 한다.
// caseNum는 하나의 표현방법을 탐색하는 한가지의 경우다.
// caseNum는 자연수 1부터 시작한다.
// caseNum로부터 1씩 더하여 연속된 자연수가 n이 될 수 있는지 반복하여 탐색한다.
	// caseNum부터 연속된 자연수를 더하여 n이 된다면 방법의 수를 카운트한다.
	// 연속된 자연수를 더했을 때 n 보다 커진다면 카운트하지 않는다.
// answer - 방법의 수
// num - 주어진 수
// caseNum - 1부터 n까지 1씩 올라갈 자연수
// addNum - i로부터 num까지 1씩 올라가면서 더해줄 자연수 


// 시도 1
function solution(n) {
	var answer = 0;
	let num = n;
	let caseNum = 1;
	while (caseNum <= num) {
			let total = caseNum;
			let addNum = caseNum + 1;
			while (total <= num) {
					if (total === num) {
							answer++;
							break;
					} else {
							total = total + addNum;
							addNum++;
					}
			}
			caseNum++;
	}
	return answer;
}
// -> 위의 문제점은 효율성 테스트를 통과하지 못했다.
// -> 제한 사항이 자연수 n은 10,000 이하의 자연수다.


// 시도 2
function solution(n) {
	var answer = 0;
	let num = n;
	let caseNum = 1;
	while (caseNum <= num/2) {
		let total = caseNum;
		let addNum = caseNum + 1;
		while (total <= num) {
			if (total === num) {
				answer++;
				break;
			} else {
				total = total + addNum;
				addNum++;
			}
		}
		caseNum++;
	}
	return answer + 1;
}
// -> 케이스를 2로 나눈 정도로 줄여보았다.
// -> 15로 보면 7 + 8로서 반 보다 작은 경우의 수 이상은 자기 자신밖에 나오지 않기 때문이다.
// 하지만 반으로 줄여도 빅오는 여전히 O(n^2)이기 때문에 의미있는 변화는 없었다.
// 이중 반복문 자체를 없애야 될 것 같다.
// 모든 효율성 테스트를 통과하지 못했다.


// 시도 3
function solution(n) {
	var answer = 0;
	let num = n;
	let caseNum = 1;
	function searchNum(total, cur, goal) {
			if (total === goal) {
					return true;
			} else if (total > goal) {
					return false;
			} else {
					total = total + cur;
					let add = cur + 1;
					return searchNum(total, add, goal);
			}
	}
	while (caseNum <= num) {
			let add = caseNum + 1;
			if (searchNum(caseNum, add, num)) {
					answer ++;
			};
			caseNum++;
	}
	return answer;
}
// 반복문 안에 재귀함수를 넣어서 결과를 반환하도록 변경하였다.
// 재귀함수 방법이 시도 2보다는 좋았지만 효율성 테스트 2개를 통과하지 못했다.


// 시도 4
function solution(n) {
	var answer = 0;
	let num = n;
	let caseNum = 1;
	function searchNum(total, cur, goal) {
			if (total === goal) {
					return true;
			} else if (total > goal) {
					return false;
			} else {
					total = total + cur;
					let add = cur + 1;
					return searchNum(total, add, goal);
			}
	}
	while (caseNum <= num/2) {
			let add = caseNum + 1;
			if (searchNum(caseNum, add, num)) {
					answer ++;
			};
			caseNum++;
	}
	return answer + 1;
}
// 재귀와 반복문의 횟수를 줄이는 방법을 함께 사용했더니 모든 효율성 테스트를 통과하였다.
