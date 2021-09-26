// "hit"	"cog"	["hot", "dot", "dog", "lot", "log", "cog"]	4
// hit -> hot -> dot -> dog -> cog
// "hit"	"cog"	["hot", "dot", "dog", "lot", "log"]	        0


function solution(begin, target, words) {

	let answer = 0;
	
	// 배열의 길이
	let length = words.length;

	// 단어의 길이
	let num = begin.length;

	let dfs = (begin, words) => {

		// 매번 바뀌는 단어와 target과 1개가 차이 나는지 유효성 검사를 한다.
		// begin, target 몇개가 같은지 세는 카운터
		let validCount = 0;

		// 현재의 begin과 target이 같은지 반복문으로 체크한다.
		for (let i = 0; i < num; i++) {
			if (begin[i] === target[i]) {
				validCount++;
			}
		}

		// 하나의 단어만 다를때 true을 리턴한다.
		if (validCount === num - 1) {
			return true;
		}

		// 배열의 요소중에 begin과 1개 차이나는 단어를 찾는다.
		for (let i = 0; i < length; i++) {

			// 단어의 철자가 몇개가 같은지 세는 카운트
			let count = 0;

			// 배열의 단어가 falsy하지 않다면 begin과 words의 단어를 비교한다.
			if (words[i]) {
				for (let j = 0; j < num; j++) {
					if (begin[j] === words[i][j]) {
						// 같으면 ++
						count++;
					}
				}

				// 방금 비교한 단어의 철자가 1개만 다르다면
				if (count === num - 1) {

					// 단어를 바꾸면서 수행횟수 카운트를 ++한다.
					answer++;

					// begin을 1개 차이나는 단어로 바꾼다.
					begin = words[i];

					// 단어를 falsy한 값으로 바꿔서 비교하지 않게 한다.
					words[i] = null;

					// 재귀의 결과가 true가 나올때 까지 재귀한다.
					if (dfs(begin, words)) {
						
						// 항상 target과 1개 차이가 날 때를 체크하기 때문에 마지막 1번은 연산하지 않으므로 1을 더해준다.
						return answer + 1;
					}
				}
			}
			count = 0;
		}
		return false;
	}
	
	if (!words.includes(target)) {
		return 0;
	}

	return dfs(begin, words);
}