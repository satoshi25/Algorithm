/*
정수 배열 array가 매개변수로 주어질 때, 
7이 총 몇 개 있는지 return 하도록 solution 함수를 완성해보세요.
*/

/*
제한사항
1 ≤ array의 길이 ≤ 100
0 ≤ array의 원소 ≤ 100,000
*/

/*
array	result
[7, 77, 17]	4
[10, 29]	0
*/

function solution(array) {
	var answer = 0;
	for (let i = 0; i < array.length; i++) {
		let arr = String(array[i]).split('');
		for (let j = 0; j < arr.length; j++) {
			if (arr[j] === '7') {
				answer++;
			}
		}
	}
	return answer;
}