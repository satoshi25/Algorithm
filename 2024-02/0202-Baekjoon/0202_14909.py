'''
https://www.acmicpc.net/problem/14909
Baekjoon
14909 양수 개수 세기

문제
주어진 N개의 정수 중에서 양의 정수의 개수를 출력하는 프로그램을 작성하시오.


입력
첫째 줄에 최대 1,000,000개의 정수가 주어진다. 
입력으로 주어지는 정수는 -1,000,000보다 크거나 같고, 1,000,000보다 작거나 같다.


출력
첫째 줄에 양의 정수의 개수를 출력한다.


예제 입력 1 
3 9 11 32 8 2 6
예제 출력 1 
7

예제 입력 2 
-2 0 21 3 8 17 32 -8 7 0
예제 출력 2 
6

예제 입력 3 
0
예제 출력 3 
0
'''

import sys

sys.stdin = open('./input.txt')

input = lambda: sys.stdin.readline().rstrip()

n_list = input().split()

cnt = 0

for n in n_list:
	n = int(n)
	if n > 0:
		cnt += 1

print(cnt)
