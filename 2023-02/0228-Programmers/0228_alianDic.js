/*
알파벳이 담긴 배열 spell과 외계어 사전 dic이 매개변수로 주어집니다. 
spell에 담긴 알파벳을 한번씩만 모두 사용한 단어가 dic에 존재한다면 1, 
존재하지 않는다면 2를 return하도록 solution 함수를 완성해주세요.


제한사항
spell과 dic의 원소는 알파벳 소문자로만 이루어져있습니다.
2 ≤ spell의 크기 ≤ 10
spell의 원소의 길이는 1입니다.
1 ≤ dic의 크기 ≤ 10
1 ≤ dic의 원소의 길이 ≤ 10
spell의 원소를 모두 사용해 단어를 만들어야 합니다.
spell의 원소를 모두 사용해 만들 수 있는 단어는 dic에 두 개 이상 존재하지 않습니다.
dic과 spell 모두 중복된 원소를 갖지 않습니다.


입출력 예
spell                  dic	                                     result
["p", "o", "s"]	       ["sod", "eocd", "qixm", "adio", "soo"]	   2
["z", "d", "x"]	       ["def", "dww", "dzx", "loveaw"]	         1
["s", "o", "m", "d"]   ["moos", "dzx", "smm", "sunmmo", "som"]	 2
*/

function solution(spell, dic) {
  var answer = 0;
  let validate = true;

  for (let i = 0; i < dic.length; i++) {
    validate = true;
    let arr = dic[i].split('');
    for (let j = 0; j < spell.length; j++) {
      if (arr.indexOf(spell[j]) === -1) {
        validate = false;
        break;
      }
    }
    if (validate) {
      answer = 1;
      break;
    } else if (i === dic.length - 1 && validate === false) {
      answer = 2;
    }
  }

  return answer;
}
