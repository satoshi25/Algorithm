/*
https://www.acmicpc.net/problem/1620
Baekjoon
1620 나는야 포켓몬 마스터 이다솜

문제
다솜아 이제 진정한 포켓몬 마스터가 되기 위해 도감을 완성시키도록 하여라. 
일단 네가 현재 가지고 있는 포켓몬 도감에서 포켓몬의 이름을 보면 포켓몬의 번호를 말하거나, 
포켓몬의 번호를 보면 포켓몬의 이름을 말하는 연습을 하도록 하여라. 
나의 시험을 통과하면, 내가 새로 만든 도감을 주도록 하겠네.

입력
첫째 줄에는 도감에 수록되어 있는 포켓몬의 개수 N이랑 내가 맞춰야 하는 문제의 개수 M이 주어져. 
N과 M은 1보다 크거나 같고, 100,000보다 작거나 같은 자연수야.

둘째 줄부터 N개의 줄에 포켓몬의 번호가 1번인 포켓몬부터 N번에 해당하는 포켓몬까지 한 줄에 하나씩 입력으로 들어와.
포켓몬의 이름은 모두 영어로만 이루어져있고, 
또, 음... 첫 글자만 대문자이고, 나머지 문자는 소문자로만 이루어져 있어. 
아참! 일부 포켓몬은 마지막 문자만 대문자일 수도 있어. 
포켓몬 이름의 최대 길이는 20, 최소 길이는 2야. 
그 다음 줄부터 총 M개의 줄에 내가 맞춰야하는 문제가 입력으로 들어와. 
문제가 알파벳으로만 들어오면 포켓몬 번호를 말해야 하고, 
숫자로만 들어오면, 포켓몬 번호에 해당하는 문자를 출력해야해. 
입력으로 들어오는 숫자는 반드시 1보다 크거나 같고, N보다 작거나 같고, 
입력으로 들어오는 문자는 반드시 도감에 있는 포켓몬의 이름만 주어져. 그럼 화이팅!!!

출력
첫째 줄부터 차례대로 M개의 줄에 각각의 문제에 대한 답을 말해줬으면 좋겠어!!!. 
입력으로 숫자가 들어왔다면 그 숫자에 해당하는 포켓몬의 이름을, 
문자가 들어왔으면 그 포켓몬의 이름에 해당하는 번호를 출력하면 돼. 그럼 땡큐~

예제 입력 1 
26 5
Bulbasaur
Ivysaur
Venusaur
Charmander
Charmeleon
Charizard
Squirtle
Wartortle
Blastoise
Caterpie
Metapod
Butterfree
Weedle
Kakuna
Beedrill
Pidgey
Pidgeotto
Pidgeot
Rattata
Raticate
Spearow
Fearow
Ekans
Arbok
Pikachu
Raichu
25
Raichu
3
Pidgey
Kakuna
예제 출력 1 
Pikachu
26
Venusaur
16
14
*/

const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let pokeDexAndTest = require('fs')
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n');

let [, , result] = pokeDexAndTest.reduce(
  (acc, cur, idx) => {
    if (idx === 0) {
      let [dexCnt, testCnt] = cur.split(' ');
      acc[1][idx] = [+dexCnt, +testCnt];
    } else if (idx <= acc[1][0][0]) {
      acc[0][cur] = idx;
      acc[1][idx] = cur;
    } else {
      if (Number.isNaN(Number(cur))) {
        idx === acc[1][0][0] + acc[1][0][1]
          ? (acc[2] += acc[0][cur])
          : (acc[2] += acc[0][cur] + '\n');
      } else {
        idx === acc[1][0][0] + acc[1][0][1]
          ? (acc[2] += acc[1][cur])
          : (acc[2] += acc[1][cur] + '\n');
      }
    }
    return acc;
  },
  [{}, [], '']
);

console.log(result);
