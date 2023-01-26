/*
입력으로는 str1과 str2의 두 문자열이 들어온다. 각 문자열의 길이는 2 이상, 1,000 이하이다.
입력으로 들어온 문자열은 두 글자씩 끊어서 다중집합의 원소로 만든다. 이때 영문자로 된 글자 쌍만 유효하고, 기타 공백이나 숫자, 특수 문자가 들어있는 경우는 그 글자 쌍을 버린다. 예를 들어 "ab+"가 입력으로 들어오면, "ab"만 다중집합의 원소로 삼고, "b+"는 버린다.
다중집합 원소 사이를 비교할 때, 대문자와 소문자의 차이는 무시한다. "AB"와 "Ab", "ab"는 같은 원소로 취급한다.
*/


function solution(str1, str2) {
	var answer = 0;
	let word = /[a-zA-Z0-9]/;
	let arr1 = [];
	let arr2 = [];
	let uni = [];
	let inter = [];

	for (let i = 0; i < str1.length; i++) {
		if (str1[i] !== undefined && str1[i+1] !== undefined) {
			arr1.push(str1[i] + str1[i+1])
		}
	}
	for (let i = 0; i < str2.length; i++) {
		if (str2[i] !== undefined && str2[i+1] !== undefined) {
			arr2.push(str2[i] + str2[i+1])
		}
	}
	arr1 = arr1.filter(el => {
		if (isNaN(Number(el[0])) && word.test(el[0]) && isNaN(Number(el[1])) && word.test(el[1])) {
			return el;
		}
	});
	arr2 = arr2.filter(el => {
		if (isNaN(Number(el[0])) && word.test(el[0]) && isNaN(Number(el[1])) && word.test(el[1])) {
			return el;
		}
	});

	// console.log(arr1, arr2)
	if (arr1.length === 0 && arr2.length === 0) {
		return 65536;
	}

	uni = arr1.concat(arr2);
	let uniLow = uni.map(el => el.toLowerCase());

	let arr2Low = arr2.map(el => el.toLowerCase());

	for (let i = 0; i < arr1.length; i++) {
		let idx = arr2Low.indexOf(arr1[i].toLowerCase());
		if (idx > -1) {
			inter.push(arr1[i]);
			arr2Low.splice(idx, 1);
		}
	}    


	for (let i = 0; i < inter.length; i++) {
		let idx = uniLow.indexOf(inter[i].toLowerCase());
		uni.splice(idx, 1);
	}    
	
	// console.log(uni, inter)
	answer = Math.floor((inter.length / uni.length) * 65536);
	return answer;
}