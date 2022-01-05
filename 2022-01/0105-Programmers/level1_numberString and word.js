// 숫자의 일부 자릿수를 영단어로 바꾸는 예시

// 숫자	영단어
// 0	zero
// 1	one
// 2	two
// 3	three
// 4	four
// 5	five
// 6	six
// 7	seven
// 8	eight
// 9	nine

// 1478 → "one4seveneight"
// 234567 → "23four5six7"
// 10203 → "1zerotwozero3"

// 제한사항
// 1 ≤ s의 길이 ≤ 50
// s가 "zero" 또는 "0"으로 시작하는 경우는 주어지지 않습니다.
// return 값이 1 이상 2,000,000,000 이하의 정수가 되는 올바른 입력만 s로 주어집니다.

function solution(s) {
  let answer = '';
  
  // 문자열을 split 합니다.
  let wordArr = s.split('');

  // 이전 단어의 기억을 갖기 위해 변수를 설정합니다.
  let pre = '';

  for (let i = 0; i < wordArr.length; i++) {
    
    // 현재인덱스의 요소가 Number로 바꿨을때 NaN이 아니라면 숫자를 더합니다
    if (!isNaN(Number(wordArr[i]))) {
      answer += wordArr[i];
    
    // Number로 바꿨을때 NaN이라면 -> 문자열이라면
    } else {
      if (wordArr[i] === 'n' && pre === 'o') {
        answer += 1;
        i += 1;
      } else if (wordArr[i] === 'z') {
        answer += 0;
        i += 3;
      } else if (wordArr[i] === 'w' && pre === 't') {
        answer += 2;
        i += 1;
      } else if (wordArr[i] === 'h' && pre === 't') {
        answer += 3;
        i += 3;
      } else if (wordArr[i] === 'o' && pre === 'f') {
        answer += 4;
        i += 2;
      } else if (wordArr[i] === 'i' && pre === 'f') {
        answer += 5;
        i += 2;
      } else if (wordArr[i] === 'i' && pre === 's') {
        answer += 6;
        i += 1;
      } else if (wordArr[i] === 'e' && pre === 's') {
        answer += 7;
        i += 3;
      } else if (wordArr[i] === 'i' && pre === 'e') {
        answer += 8;
        i += 3;
      } else if (wordArr[i] === 'i' && pre === 'n') {
        answer += 9;
        i += 2;
      }
    }
		// 이전 요소로 사용할 수 있게 현재 요소를 할당한다.
    pre = wordArr[i];
  }
  
  return Number(answer);
}