/*
게임에는 up, down, left, right 방향키가 있으며 
각 키를 누르면 위, 아래, 왼쪽, 오른쪽으로 한 칸씩 이동합니다. 
예를 들어 [0,0]에서 up을 누른다면 캐릭터의 좌표는 [0, 1], 
down을 누른다면 [0, -1], left를 누른다면 [-1, 0], right를 누른다면 [1, 0]입니다.

방향키의 배열 keyinput와 맵의 크기 board이 매개변수로 주어집니다. 
캐릭터는 항상 [0,0]에서 시작할 때 키 입력이 모두 끝난 뒤에 
캐릭터의 좌표 [x, y]를 return하도록 solution 함수를 완성해주세요.
*/

/*
board은 [가로 크기, 세로 크기] 형태로 주어집니다.
board의 가로 크기와 세로 크기는 홀수입니다.
board의 크기를 벗어난 방향키 입력은 무시합니다.
0 ≤ keyinput의 길이 ≤ 50
1 ≤ board[0] ≤ 99
1 ≤ board[1] ≤ 99
keyinput은 항상 up, down, left, right만 주어집니다.
*/

/*
keyinput	                                 board	  result
["left", "right", "up", "right", "right"]	[11, 11]	[2, 1]
["down", "down", "down", "down", "down"]	[7, 9]   	[0, -4]
*/

function solution(keyinput, board) {
	var answer = [];
	let leftright = 0;
	let updown = 0;
	let hormax = (board[0] - 1) / 2;
	let vermax = (board[1] - 1) / 2;
	
	for (let i = 0; i < keyinput.length; i++) {
		if (keyinput[i] === 'left') {
			if (leftright !== -hormax) {
				leftright -= 1;    
			}
		} else if (keyinput[i] === 'right') {
			if (leftright !== hormax) {
				leftright += 1;    
			}
		} else if (keyinput[i] === 'down') {
			if (updown !== -vermax) {
				updown -= 1;    
			}
		} else if (keyinput[i] === 'up') {
			if (updown !== vermax) {
				updown += 1;
			}
		}
	}
	answer.push(leftright);
	answer.push(updown);
	return answer;
}