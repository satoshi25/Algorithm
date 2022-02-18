// https://programmers.co.kr/learn/courses/30/lessons/64061

// 입출력 예
// board                                                          moves             result
// [[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]]	[1,5,3,5,1,2,1,4]	  4

function solution(board, moves) {
    
  let answer = 0;
  
  let box = [];
  
  for (let i = 0; i < moves.length; i++) {
      for (let j = 0; j < board.length; j++) {
          let pick = board[j][moves[i] - 1];
          if (pick !== 0) {
              box.push(pick);
              board[j][moves[i] - 1] = 0;
              break;
          }
      }
      let pre = 0;
      for (let k = 0; k < box.length; k++) {
          if (k === 0) {
              pre = box[k];
          } else {
              if (box[k] === pre) {
                  box.splice(k - 1, 2);
                  answer += 2;
                  break;
              }
          }
          pre = box[k];
      }
          
  }
  return answer;
}