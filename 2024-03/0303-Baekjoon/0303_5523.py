'''
https://www.acmicpc.net/problem/5523
Baekjoon
5523 경기 결과

문제
A와 B가 게임을 한다. 게임은 N번의 라운드로 이루어져 있다. 
각 라운드에서는, 더 많은 점수를 얻은 사람이 그 라운드의 승자가 된다. 
즉, A의 점수가 B의 점수보다 크면 i번째 라운드는 A의 승리이며, 
B의 점수가 A의 점수보다 크면 i번째 라운드는 B의 승리이다. 
무승부인 경우에는 아무도 승리하지 않는다.

N번의 라운드에서의 A와 B의 점수가 주어졌을 때, 
A가 이긴 횟수와, B가 이긴 횟수를 출력하는 프로그램을 만들어라.


입력
첫째 줄에는 정수 N(1 ≤ N ≤ 1,000,000)이 주어진다.

둘째 줄부터는 정수 Ai, Bi (0 ≤ Ai, Bi ≤ 100)가 공백을 사이에 두고 차례대로 주어진다.


출력
첫째 줄에 A가 이긴 횟수와 B가 이긴 횟수를 차례대로 출력하라.


예제 입력 1 
4
100 0
5 6
40 50
74 75
예제 출력 1 
1 3

예제 입력 2 
5
20 20
3 95
60 59
40 40
20 19
예제 출력 2 
2 1
'''

import sys

sys.stdin = open('./input.txt')

input = lambda: sys.stdin.readline().rstrip()

r_cnt = int(input())
ab = [0, 0]

for _ in range(r_cnt):
    a, b = map(int, input().split())
    if a > b:
        ab[0] += 1
    elif a < b:
        ab[1] += 1

print(*ab)