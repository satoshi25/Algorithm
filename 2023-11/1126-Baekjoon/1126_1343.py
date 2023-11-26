"""
https://www.acmicpc.net/problem/1343
Baekjoon
1343 폴리오미노

문제
민식이는 다음과 같은 폴리오미노 2개를 무한개만큼 가지고 있다. AAAA와 BB

이제 '.'와 'X'로 이루어진 보드판이 주어졌을 때, 
민식이는 겹침없이 'X'를 모두 폴리오미노로 덮으려고 한다. 
이때, '.'는 폴리오미노로 덮으면 안 된다.

폴리오미노로 모두 덮은 보드판을 출력하는 프로그램을 작성하시오.


입력
첫째 줄에 보드판이 주어진다. 
보드판의 크기는 최대 50이다.


출력
첫째 줄에 사전순으로 가장 앞서는 답을 출력한다. 
만약 덮을 수 없으면 -1을 출력한다.


예제 입력 1 
XXXXXX
예제 출력 1 
AAAABB

예제 입력 2 
XX.XX
예제 출력 2 
BB.BB

예제 입력 3 
XXXX....XXX.....XX
예제 출력 3 
-1

예제 입력 4 
X
예제 출력 4 
-1

예제 입력 5 
XX.XXXXXXXXXX..XXXXXXXX...XXXXXX
예제 출력 5 
BB.AAAAAAAABB..AAAAAAAA...AAAABB
"""

import sys

sys.stdin = open("./input.txt")

board = input()
b_size = len(board)
poliomino = ""
x_cnt = 0

for i, x in enumerate(board):
    if x == "X":
        x_cnt += 1
        if x_cnt == 4:
            poliomino += "AAAA"
            x_cnt -= 4
    else:
        if x_cnt == 2:
            poliomino += "BB"
            x_cnt = 0
        poliomino += "."
        if x_cnt != 0:
            poliomino = "-1"
            break

if poliomino == "-1":
    print(poliomino)
else:
    if x_cnt == 2:
        poliomino += "BB"
    elif x_cnt != 0:
        poliomino = "-1"
    print(poliomino)
