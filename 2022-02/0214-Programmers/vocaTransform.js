// https://programmers.co.kr/learn/courses/30/lessons/43163

// 1, 4

function solution(begin, target, words) {
    
	let answer = 0;
	const length = words.length;
	const num = begin.length;

	const dfs = (begin, words) => {

		let validCount = 0;

		for (let i = 0; i < num; i++) {
			if (begin[i] === target[i]) {
				validCount++;
			}
		}

		if (validCount === num - 1) {
			return true;
		}

		for (let i = 0; i < length; i++) {
			let count = 0;
			if (words[i]) {
				for (let j = 0; j < num; j++) {
					if (begin[j] === words[i][j]) {
						count++;
					}
				}

				if (count === num - 1) {
					answer++;
					begin = words[i];
					words[i] = null;
					if (dfs(begin, words)) {
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