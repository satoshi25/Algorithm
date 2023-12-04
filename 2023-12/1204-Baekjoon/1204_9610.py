"""
https://www.acmicpc.net/problem/9610
Baekjoon
9610 사분면

문제
2차원 좌표 상의 여러 점의 좌표 (x,y)가 주어졌을 때, 
각 사분면과 축에 점이 몇 개 있는지 구하는 프로그램을 작성하시오.

                      Y
											^
											|
				  Q2          |         Q1
											|
											|
<----------------------------------------------> X
                      |
											|
				  Q3					|         Q4
											|
											v


입력
첫째 줄에 점의 개수 n (1 ≤ n ≤ 1000)이 주어진다.
다음 n개 줄에는 점의 좌표 (xi, yi)가 주어진다. (-106 ≤ xi, yi ≤ 106)


출력
각 사분면과 축에 점이 몇 개 있는지를 예제 출력과 같은 형식으로 출력한다.


예제 입력 1 
5
0 0
0 1
1 1
3 -3
2 2
예제 출력 1 
Q1: 2
Q2: 0
Q3: 0
Q4: 1
AXIS: 2
"""

import sys

sys.stdin = open("./input.txt")

input = lambda: sys.stdin.readline().rstrip()

dot_cnt = int(input())

q1, q2, q3, q4, axis = 0, 0, 0, 0, 0

for _ in range(dot_cnt):
    cur = list(map(int, input().split()))
    if cur[0] == 0 or cur[1] == 0:
        axis += 1
    elif cur[0] > 0:
        if cur[1] > 0:
            q1 += 1
        else:
            q4 += 1
    else:
        if cur[1] > 0:
            q2 += 1
        else:
            q3 += 1

print(f"Q1: {q1}")
print(f"Q2: {q2}")
print(f"Q3: {q3}")
print(f"Q4: {q4}")
print(f"AXIS: {axis}")
