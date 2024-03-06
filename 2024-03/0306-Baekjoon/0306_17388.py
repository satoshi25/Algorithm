'''
https://www.acmicpc.net/problem/17388
Baekjoon
17388 와글와글 숭고한

문제
숭고한 알고리즘 캠프가 다가오고 있고 방학이 되어서까지도 각 대학들의 협업은 계속되고 있다. 
그럼에도 불구하고 운영진들과 강사진들이 각자의 일정 때문에 바빠 계획에 차질이 조금씩 생기고 있다. 
숭고한 알고리즘 캠프의 대표인 창호는 효율적인 일처리를 위해 엄정한 평가를 내리기로 하였다.

창호는 숭고한 알고리즘 캠프의 구성원인 숭실대학교(Soongsil University), 
고려대학교(Korea University), 한양대학교(Hanyang University)의 참여도를 수치화하였다. 
창호가 보기에 세 대학교의 참여도의 합이 100 이상이면 일처리가 잘 되고 있기에 안심할 수 있지만, 
100 미만이면 창호는 참여도가 가장 낮은 대학의 동아리에게 무언의 압박을 넣을 예정이다. 
숭고한 알고리즘 캠프의 성공을 빌며 창호의 고민을 해결해주자.


입력
첫 번째 줄에 숭실대학교의 참여도, 고려대학교의 참여도, 한양대학교의 참여도를 의미하는 
세 자연수 S, K, H가 공백으로 구분되어 주어진다. (0 ≤ S, K, H ≤ 100)

세 대학의 참여도는 모두 다르다.


출력
첫 번째 줄에 일처리가 잘 되고 있어 무언의 압박이 필요가 없으면 (따옴표를 제외하고) “OK”를 출력한다.

그 외에는 첫 번째 줄에 무언의 압박이 필요한 동아리가 속한 대학의 영문 이름의 첫 단어를 출력한다. 
영문 이름 표기는 지문에 나온 것을 따른다.

예제 입력 1 
31 41 59
예제 출력 1 
OK

예제 입력 2 
1 2 3
예제 출력 2 
Soongsil

예제 입력 3 
19 8 9
예제 출력 3 
Korea

예제 입력 4 
45 33 21
예제 출력 4 
Hanyang
'''

import sys

sys.stdin = open('./input.txt')

input = lambda: sys.stdin.readline().rstrip()

su, ku, hu = map(int, input().split())
score_list = [su, ku, hu]
if su + ku + hu >= 100:
	print('OK')
else:
	idx = score_list.index(min(score_list))
	result = 'Soongsil' if idx == 0 else 'Korea' if idx == 1 else 'Hanyang'
	print(result)