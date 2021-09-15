function solution(n, computers) {
	let answer = 0;
	let visited = [];
	
	const bfs = (computers, index, visited) => {
			
			let queue = [];
			let enq = (el) => queue.push(el);
			let deq = () => queue.shift();

			enq(index);
			visited[index] = true;

			while (queue.length > 0) {
					let cur = deq();
					for (let i = 0; i < n; i++) {
							if(computers[cur][i] === 1 && !visited[i]) {
									enq(i);
									visited[i] = true;
							}
					}
			}
	}
	
	for (let i = 0; i < n; i++) {
			if (!visited[i]) {
					bfs(computers, i, visited);
					answer++;    
			}
	}
	
	return answer;
}

// [1, 1, 0]
// [1, 1, 0]
// [0, 0, 1]
// 0 = 0 / 2
// 2개

// [1, 1, 0]
// [1, 1, 1] 
// [0, 1, 1]
// 0 = 1
// 1 = 2
// 0 = 1 = 2
// 1개