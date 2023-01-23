/*
String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아, 
"김서방은 x에 있다"는 String을 반환하는 함수, solution을 완성하세요. 
seoul에 "Kim"은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.
*/

/*
제한 사항
seoul은 길이 1 이상, 1000 이하인 배열입니다.
seoul의 원소는 길이 1 이상, 20 이하인 문자열입니다.
"Kim"은 반드시 seoul 안에 포함되어 있습니다.
*/

/*
seoul	              return
["Jane", "Kim"]	    "김서방은 1에 있다"
*/

function solution(seoul) {
	let x = seoul.indexOf('Kim')
	var answer = `김서방은 ${x}에 있다`;
	return answer;
}

// 따옴표로 문자열을 표현하는 방법과 백틱의 템플릿 리터럴을 이해하고 사용해야겠다.