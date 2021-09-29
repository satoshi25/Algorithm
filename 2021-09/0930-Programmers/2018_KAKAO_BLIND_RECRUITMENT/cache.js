// 입력 형식
// 1. 캐시 크기(cacheSize)와 도시이름 배열(cities)을 입력받는다.
// 2. cacheSize는 정수이며, 범위는 0 ≦ cacheSize ≦ 30 이다.
// 3. cities는 도시 이름으로 이뤄진 문자열 배열로, 최대 도시 수는 100,000개이다.
// 4. 각 도시 이름은 공백, 숫자, 특수문자 등이 없는 영문자로 구성되며, 대소문자 구분을 하지 않는다. 도시 이름은 최대 20자로 이루어져 있다.

// 출력 형식
// 입력된 도시이름 배열을 순서대로 처리할 때, "총 실행시간"을 출력한다.

// 캐시 교체 알고리즘은 LRU(Least Recently Used)를 사용한다.
// cache hit일 경우 실행시간은 1이다.
// cache miss일 경우 실행시간은 5이다.

// 입출력
// 입력 : 3	["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"]	출력 : 50
// 입력 : 3	["Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul"]	출력 : 21
// 입력 : 2	["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"]	출력 : 60
// 입력 : 5	["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"]	출력 : 52
// 입력 : 2 ["Jeju", "Pangyo", "NewYork", "newyork"]	출력 : 16
// 입력 : 0	["Jeju", "Pangyo", "Seoul", "NewYork", "LA"]	출력 : 25

function solution(cacheSize, cities) {
    
	// 캐시 사이즈가 0일 때 저장하지 않기 때문에
	// 처리시간은 모두 5로 계산 되어 cities * 5를 리턴한다.
	if (cacheSize === 0) {
			return cities.length * 5;
	}

	// 수행시간
	let answer = 0;

	// 캐시사이즈만큼 저장할 queue(캐시)를 생성한다.
	let queue = new Array(cacheSize).fill(0);

	// queue(캐시)에 넣고 뺄 함수를 선언한다.
	let enq = (e) => queue.push(e);
	let deq = () => queue.shift();
	let spl = (index) => queue.splice(index, 1);
	
	// 반복문을 돌면서 도시가 담겨있는 배열을 돌면서 처리 시간을 구한다.
	for (let i = 0; i < cities.length; i++) {

			// queue(캐시) 배열에 cities의 현재 인덱스 값이 무엇인지 구한다.
			let temp = queue.indexOf(cities[i].toLowerCase());
		
			// queue(캐시) 배열에 현재 도시가 없다면
			if (temp === -1) {
					
					// queue(캐시)의 제일 앞의 값을 빼고
					deq();

					// 현재의 도시를 마지막에 넣는다.
					// 대소문자 구분을 위해 넣을 때 소문자로 변환해서 넣는다.
					enq(cities[i].toLowerCase());

					// queue(캐시)에 없는 값이기 때문에 처리시간 5를 더한다.
					answer += 5;

			// queue(캐시)배열에 현재 도시가 있다면
			} else {
			
					// 인덱스의 값으로 queue(캐시)에서 요소를 제거한다.
					spl(temp);

					// queue(캐시)의 마지막에 현재 도시를 넣는다.
					enq(cities[i].toLowerCase());

					// queue(캐시)에 있기 때문에 처리시간 1을 더한다.
					answer += 1;
			}
	}

	// 계산된 수행시간을 리턴한다.
	return answer;
}