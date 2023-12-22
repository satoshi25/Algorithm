'''
https://www.acmicpc.net/problem/14730
Baekjoon
14730 謎紛芥索紀 (small)

문제
성민이는 이번 학기에 미적분학 과목을 수강하고 있다. 
다항함수의 미분 단원 과제를 하던 도중 미분을 하기가 귀찮아진 성민이는 
미분하려는 함수 f(x)가 주어지면, 미분 된 함수 f’(x)를 
자동으로 구해주는 프로그램을 만들어서 계산을 줄일 생각을 하였다. 
우리도 성민이가 원하는 프로그램을 한번 같이 만들어보도록 하자.


입력
첫째 줄에는 항의 개수 N(1 ≤ N ≤ 100)이 주어진다.
둘째 줄부터 N개 줄에 걸쳐서 항의 계수 C(-100 ≤ C ≤ 100, C ≠ 0)와 
항의 차수 K(0 ≤ K ≤ 1000)가 항의 차수가 큰 순서대로 주어진다. 
항의 차수가 같은 항은 2개 이상 존재하지 않는다.


출력
f’(1)의 값을 첫째 줄에 출력한다.


예제 입력 1 
3
3 3
2 2
1 1
예제 출력 1 
14
'''

import sys

sys.stdin = open('./input.txt')

input = lambda: sys.stdin.readline().rstrip()

n = int(input())
f1 = 0

for _ in range(n):
	k, sq = map(int, input().split())
	f1 += k * sq

print(f1)