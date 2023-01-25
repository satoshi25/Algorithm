/*
입력으로는 str1과 str2의 두 문자열이 들어온다. 각 문자열의 길이는 2 이상, 1,000 이하이다.
입력으로 들어온 문자열은 두 글자씩 끊어서 다중집합의 원소로 만든다. 이때 영문자로 된 글자 쌍만 유효하고, 기타 공백이나 숫자, 특수 문자가 들어있는 경우는 그 글자 쌍을 버린다. 예를 들어 "ab+"가 입력으로 들어오면, "ab"만 다중집합의 원소로 삼고, "b+"는 버린다.
다중집합 원소 사이를 비교할 때, 대문자와 소문자의 차이는 무시한다. "AB"와 "Ab", "ab"는 같은 원소로 취급한다.
*/


function solution(str1, str2) {
	var answer = 0;
	let word = /\w/;
	let arr1 = [];
	let arr2 = [];
	let uni = [];
	let inter = [];
	
	let str1Arr = str1.split('').filter(el => {
			if (isNaN(Number(el))) {
					if (word.test(el) && el !== ' ' && el !== undefined) {
							return el;
					}
			}
	}).map(el => el.toLowerCase());
	let str2Arr = str2.split('').filter(el => {
			if (isNaN(Number(el))) {
					if (word.test(el) && el !== ' ' && el !== undefined) {
							return el;
					}
			}
	}).map(el => el.toLowerCase());

	
	for (let i = 0; i < str1Arr.length; i++) {
			if (str1Arr[i] !== undefined && str1Arr[i+1] !== undefined) {
					arr1.push(str1Arr[i] + str1Arr[i+1])
			}
	}
	for (let i = 0; i < str2Arr.length; i++) {
			if (str2Arr[i] !== undefined && str2Arr[i+1] !== undefined) {
					arr2.push(str2Arr[i] + str2Arr[i+1])
			}
	}
	
	uni = arr1.concat(arr2);
	console.log(uni)
	for (let i = 0; i < arr1.length; i++) {
			for (let j = 0; j < arr2.length; j++) {
					if (!uni[arr2[j]]) {
							uni[arr2[j]] = 1;
					}
					if (arr1[i] === arr2[j]) {
							inter.push(arr2[j]);
					}
			}
			if (!uni[arr2[i]]) {
					uni[arr1[i]] = 1;
			}
	}
	
	
	return answer;
}