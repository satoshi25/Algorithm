// 순서를 고려한 뽑기는 뽑아서 줄세우는 경우와 같다
// 7P3 = 7C3 * 3!
// 7C3 = 7P3 / 3!

// headgear : [yellowwhat, green_turban]
// eyewear : [bluesunglasses]
// 1개를 고르는 경우의 수 + 2개를 고르는 경우의 수
// (2개중 하나 고르는 경우의 수 + 1개중 1개 고를 경우의 수)+ (2개중 하나 고르는 경우의 수 * 1개중 1개 고르는 경우의 수)
// 모든 종류 중에서 하나씩만 뽑기 때문에
// 반복문으로 1부터 1씩 증가하면서 각 의류의 개수를 뽑는 개수를 더한다.
// 첫번재 예시를 살펴보면
// 종류는 2개니까 1부터 증가하면서 경우의 수를 더한다.
// i = 1 -> 1개 뽑는 경우의 수
// 2개 중에서 1개 뽑는다. + 1개 중 1개 뽑는다.
// 2*1 + 1*1각 종류의 수가 1개 뽑는 경우의 수다. = 3
// i = 2 -> 2개 뽑는 경우의 수
// 2개 중에서 1개 뽑는다. 1개중 한개 뽑는다. 총 2개를 뽑는 경우의 수다.
// 2*1 * 1*1 = 2
// 3 + 2 = 5


// 의류의 개수만큼 1씩 증가하며 한개를 고를 때와 모든 종류 중 하나씩 모두 고르는 경우까지 모두 고려한다.

// face : [crown, blue, smoky]
// 3개중 한개를 고르는 경우의 수



function solution(clothes) {
	let answer = 0;
	let sorted = {};
	for (let i = 0; i < clothes.length; i++) {
        if (sorted[clothes[i][1]] === undefined) {
            sorted[clothes[i][1]] = [clothes[i][0]];
        } else {
            sorted[clothes[i][1]].push(clothes[i][0]);
        }
	}
	let countArr = [];
	for (let key in sorted) {
        countArr.push(sorted[key].length);
	}
	
	answer = countArr.reduce((a, c) => a * (c + 1), 1) - 1;
	return answer;
}

solution([['a','aa'], ['b', 'aa'], ['c','aa'], ['d', 'bb'], ['e', 'bb']]);

// a [a, b, c]
// b [d, e]
// c [f]
//              3 + 2 + 1
//              3 * 2 + 3 * 1 + 2 * 1
//              3 * 2 * 1
