'''
https://www.acmicpc.net/problem/1100
Baekjoon
1100 하얀 칸

문제
체스판은 8×8크기이고, 검정 칸과 하얀 칸이 번갈아가면서 색칠되어 있다. 
가장 왼쪽 위칸 (0,0)은 하얀색이다. 
체스판의 상태가 주어졌을 때, 하얀 칸 위에 말이 몇 개 있는지 출력하는 프로그램을 작성하시오.


입력
첫째 줄부터 8개의 줄에 체스판의 상태가 주어진다. 
‘.’은 빈 칸이고, ‘F’는 위에 말이 있는 칸이다.


출력
첫째 줄에 문제의 정답을 출력한다.


예제 입력 1 
.F.F...F
F...F.F.
...F.F.F
F.F...F.
.F...F..
F...F.F.
.F.F.F.F
..FF..F.
예제 출력 1 
1

예제 입력 2 
........
........
........
........
........
........
........
........
예제 출력 2 
0

예제 입력 3 
FFFFFFFF
FFFFFFFF
FFFFFFFF
FFFFFFFF
FFFFFFFF
FFFFFFFF
FFFFFFFF
FFFFFFFF
예제 출력 3 
32

예제 입력 4 
........
..F.....
.....F..
.....F..
........
........
.......F
.F......
예제 출력 4 
2
'''

import sys

sys.stdin = open('./input.txt')

input = lambda: sys.stdin.readline().rstrip()

matrix = []
w_cnt = 0

for i in range(8):
	cur = list(input())
	if i % 2 == 0:
		for j, c in enumerate(cur):
			if j % 2 == 0 and c == 'F':
				w_cnt += 1
	else:
		for k, rc in enumerate(cur):
			if k % 2 == 1 and rc == 'F':
				w_cnt += 1

print(w_cnt)