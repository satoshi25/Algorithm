/*
구명보트는 작아서 한 번에 최대 2명씩 밖에 탈 수 없고, 무게 제한도 있습니다.
예를 들어, 사람들의 몸무게가 [70kg, 50kg, 80kg, 50kg]이고 
구명보트의 무게 제한이 100kg이라면 2번째 사람과 4번째 사람은 같이 탈 수 있지만 
1번째 사람과 3번째 사람의 무게의 합은 150kg이므로 
구명보트의 무게 제한을 초과하여 같이 탈 수 없습니다.

사람들의 몸무게를 담은 배열 people과 구명보트의 무게 제한 limit가 매개변수로 주어질 때, 
모든 사람을 구출하기 위해 필요한 구명보트 개수의 최솟값을 return 하도록 solution 함수를 작성해주세요.
*/

/*
제한사항
무인도에 갇힌 사람은 1명 이상 50,000명 이하입니다.
각 사람의 몸무게는 40kg 이상 240kg 이하입니다.
구명보트의 무게 제한은 40kg 이상 240kg 이하입니다.
구명보트의 무게 제한은 항상 사람들의 몸무게 중 최댓값보다 크게 주어지므로 사람들을 구출할 수 없는 경우는 없습니다.
*/

/*
people	         limit	return
[70, 50, 80, 50]	100	    3
[70, 80, 50]	    100	    3
*/

function solution(people, limit) {
	var answer = 0;
	let sortPeople = people.sort((a, b) => a - b);
	while (sortPeople.length !== 0) {
		if (sortPeople[0] + sortPeople[sortPeople.length-1] <= limit) {
			sortPeople.shift();
			sortPeople.pop();
			answer++;
		} else {
			sortPeople.pop();
			answer++;
		}
	}
	return answer;
}

// 이렇게 위와 같이 하였을때 통과는 하였지만 효율성 검사때 오래걸리는 현상을 보았다.
// shift()가 배열의 제일 앞요소를 빼고 인덱스 정리를 하기 때문에 효율성 검사에 영향을 미치는 것 같다.

function solution(people, limit) {
	var answer = 0;
	let sortPeople = people.sort((a, b) => a - b);
	let left = 0;
	let right = sortPeople.length - 1;
	while (left <= right) {
		if (sortPeople[left] + sortPeople[right] <= limit) {
			left++;
			right--;
			answer++;
		} else {
			right--;
			answer++;
		}
	}
	return answer;
}

// 위와 같이 배열의 요소 값을 변경하여 인덱스를 조정하지 않고 
// left, right 변수 안에 배열의 인덱스 값을 조정하여 작성하니 효율성에서 오래걸리지 않았다.