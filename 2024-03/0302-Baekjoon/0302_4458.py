'''
https://www.acmicpc.net/problem/4458
Baekjoon
4458 첫 글자를 대문자로

문제
문장을 읽은 뒤, 줄의 첫 글자를 대문자로 바꾸는 프로그램을 작성하시오.


입력
첫째 줄에 줄의 수 N이 주어진다. 
다음 N개의 줄에는 문장이 주어진다. 
각 문장에 들어있는 글자의 수는 30을 넘지 않는다. 
모든 줄의 첫 번째 글자는 알파벳이다.


출력
각 줄의 첫글자를 대문자로 바꾼뒤 출력한다.


예제 입력 1 
5
powdered Toast Man
skeletor
Electra Woman and Dyna Girl
she-Ra Princess of Power
darth Vader
예제 출력 1 
Powdered Toast Man
Skeletor
Electra Woman and Dyna Girl
She-Ra Princess of Power
Darth Vader
'''

import sys

sys.stdin = open('./input.txt')

input = lambda: sys.stdin.readline().rstrip()

t_cnt = int(input())

for _ in range(t_cnt):
	st = input()
	print(st[0].upper() + st[1:])