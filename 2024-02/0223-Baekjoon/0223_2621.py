'''
https://www.acmicpc.net/problem/2621
Baekjoon
2621 카드게임

문제
근우는 오늘 재미있는 카드 게임을 배우고 있다. 
카드는 빨간색, 파란색, 노란색, 녹색의 네 가지 색이 있고, 
색깔별로 1부터 9까지 숫자가 쓰여진 카드가 9장씩 있다. 
카드는 모두 36(=4x9)장이다. 
근우가 배운 카드 게임은 36장의  카드에서 5장을 뽑고, 
아래와 같은 규칙으로 정수를 계산하는 것이다.

각 카드는 다음과 같이 나타낸다. 
카드의 색깔은 영어 대문자 R, B, Y, G로 나타내는데, 
R은 빨간색, B는 파란색, Y는 노란색, G는 녹색을 뜻한다. 
예를 들어서 Y8은 노란색 8을 나타내고, 
B5는 파란색 5를 나타낸다.


<점수를 정하는 규칙>

카드 5장이 모두 같은 색이면서 숫자가 연속적일 때, 점수는 가장 높은 숫자에 900을 더한다. 
예를 들어, 카드가 Y4, Y3, Y2, Y5, Y6 일 때 점수는 906(=6+900)점이다.

카드 5장 중 4장의 숫자가 같을 때 점수는 같은 숫자에 800을 더한다. 
예를 들어, 카드가 B3, R3, B7, Y3, G3 일 때 점수는 803(=3+800)점이다.

카드 5장 중 3장의 숫자가 같고 나머지 2장도 숫자가 같을 때 
점수는 3장이 같은 숫자에 10을 곱하고 2장이 같은 숫자를 더한 다음 700을 더한다. 
예를 들어, 카드가 R5, Y5, G7, B5, Y7 일 때 점수는 757(=5x10+7+700)점이다.

5장의 카드 색깔이 모두 같을 때 점수는 가장 높은 숫자에 600을 더한다. 
예를 들어, 카드가 Y3, Y4, Y8, Y6, Y7 일 때 점수는 608(=8+600)점이다.

카드 5장의 숫자가 연속적일 때 점수는 가장 높은 숫자에 500을 더한다. 
예를 들어 R7, R8, G9, Y6, B5 일 때 점수는 509(=9+500)점이다.

카드 5장 중 3장의 숫자가 같을 때 점수는 같은 숫자에 400을 더한다. 
예를 들어 R7, Y7, R2, G7, R5 일 때 점수는 407(=7+400)점이다.

카드 5장 중 2장의 숫자가 같고 또 다른 2장의 숫자가 같을 때 
점수는 같은 숫자 중 큰 숫자에 10을 곱하고 같은 숫자 중 작은 숫자를 더한 다음 300을 더한다. 
예를 들어, R5, Y5, Y4, G9, B4 일 때 점수는 354(=5X10+4+300)점이다.

카드 5장 중 2장의 숫자가 같을 때 점수는 같은 숫자에 200을 더한다. 
예를 들어, R5, Y2, B5, B3, G4 일 때 점수는 205(=5+200)점이다.

위의 어떤 경우에도 해당하지 않을 때 점수는 가장 큰 숫자에 100을 더한다. 
예를 들어, R1, R2, B4, B8, Y5 일 때 점수는 108(=8+100)점이다.

입력으로 카드 5장이 주어질 때, 카드 게임의 점수를 구하는 프로그램을 작성하시오. 
두 가지 이상의 규칙을 적용할 수 있는 경우에는 가장 높은 점수가 카드 게임의 점수이다.


입력
첫째 줄부터 다섯째 줄까지 한 줄에 카드 하나씩 입력된다. 
카드의 색깔과 숫자 사이에는 빈 칸이 하나 있다.


출력
한 줄에 카드의 점수를 출력한다.


예제 입력 1 
B 3
B 7
R 1
B 2
Y 7
예제 출력 1 
207
'''

import sys

sys.stdin = open('./input.txt')

input = lambda: sys.stdin.readline().rstrip()
s_result, isConse = [True, True]
pre_s, pre_n = ['', '']
n_list, score_list, o_list = [[], [], []]
s_cnt = 1

for i in range(5):
	card, num = input().split()
	if pre_s != '' and pre_s != card:
		s_result = False
	n_list.append(int(num))
	pre_s = card
n_list.sort()

for i in range(5):
	if i != 0:
		if n_list[i] - n_list[i-1] != 1:
			isConse = False
		if n_list[i] != pre_n:
			o_list.append([s_cnt, n_list[i-1]])
			s_cnt = 1
		else:
			s_cnt += 1
	pre_n = n_list[i]
o_list.append([s_cnt, n_list[-1]])
o_list = sorted(o_list, key=lambda x: [x[0], x[1]], reverse=True)

if o_list[0][0] == 4:
	score_list.append(o_list[0][1] + 800)
elif o_list[0][0] == 3:
	score_list.append(o_list[0][1] + 400)
	if o_list[1][0] == 2:
		score_list.append(o_list[0][1] * 10 + o_list[1][1] + 700)
elif o_list[0][0] == 2 and o_list[1][0] == 2:
		score_list.append(o_list[0][1] * 10 + o_list[1][1] + 300)

for o in o_list:
	if o[0] == 2:
		score_list.append(o[1] + 200)
		break

if s_result: 
	score_list.append(n_list[-1] + 600)
	if isConse:
		score_list.append(n_list[-1] + 900)
if isConse:
	score_list.append(n_list[-1] + 500)
score_list.append(n_list[-1] + 100)

print(max(score_list))
