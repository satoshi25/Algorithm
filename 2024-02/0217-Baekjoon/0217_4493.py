'''
https://www.acmicpc.net/problem/4493
Baekjoon
4493 가위 바위 보?

문제
가위 바위 보는 두 명이서 하는 게임이다. 
보통 미리 정해놓은 수 만큼 게임을 하고, 
많은 게임을 이긴 사람이 최종 승자가 된다.

가위 바위 보를 한 횟수와 매번 두 명이 무엇을 냈는지가 주어졌을 때, 
최종 승자를 출력하는 프로그램을 작성하시오.

바위는 가위를 이긴다.
가위는 보를 이긴다.
보는 바위를 이긴다.


입력
첫째 줄에는 테스트 케이스의 개수 t(0 < t < 1000)가 주어진다. 
각 테스트 케이스의 첫째 줄에는 가위 바위 보를 한 횟수 n(0 < n < 100)이 주어진다. 
다음 n개의 줄에는 R, P, S가 공백으로 구분되어 주어진다. 
R, P, S는 순서대로 바위, 보, 가위이고 첫 번째 문자는 Player 1의 선택, 
두 번째 문자는 Player 2의 선택이다.


출력
각 테스트 케이스에 대해서 승자를 출력한다. (Player 1 또는 Player 2) 
만약, 비겼을 경우에는 TIE를 출력한다.


예제 입력 1 
3
2
R P
S R
3
P P
R S
S R
1
P R
예제 출력 1 
Player 2
TIE
Player 1
'''

import sys

sys.stdin = open('./input.txt')

input = lambda: sys.stdin.readline().rstrip()

t_cnt = int(input())

def rps_game(p1, p2):
	result = ''
	if p1 == 'R':
		if p2 == 'R':
			result = -1
		elif p2 == 'P':
			result = 1
		else:
			result = 0
	elif p1 == 'P':
		if p2 == 'R':
			result = 0
		elif p2 == 'P':
			result = -1
		else:
			result = 1
	else:
		if p2 == 'R':
			result = 1
		elif p2 == 'P':
			result = 0
		else:
			result = -1
	return result

for _ in range(t_cnt):
	p_list = [0, 0]
	r_cnt = int(input())
	for _ in range(r_cnt):
		one, two = input().split()
		w_p = rps_game(one, two)
		if w_p >= 0:
			p_list[w_p] += 1
	if p_list[0] > p_list[1]:
		print('Player 1')
	elif p_list[0] < p_list[1]:
		print('Player 2')
	else:
		print('TIE')
