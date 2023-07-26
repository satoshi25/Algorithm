"""
https://www.acmicpc.net/problem/11536
Baekjoon
11536 줄 세우기

문제
악독한 코치 주혁은 선수들을 이름 순으로 세우는 것을 좋아한다. 
더 악독한 것은 어떤 순서로 서야할지도 알려주지 않았다! 
선수들의 이름이 주어질 때 어떤 순서로 이루어져있는지 확인해보자.

입력
첫째 줄에 N개의 이름이 주어진다. (2 ≤ N ≤ 20)
다음 N개의 줄에는 각 선수들의 이름이 주어진다. 
이름은 2 이상 12 이하의 대문자로만 이루어져있다. 
선수의 이름은 중복되지 않는다.

출력
이름이 증가하는 순으로 나타나면 INCREASING, 
감소하는 순이면 DECREASING을 한 줄에 출력한다. 
만약 위의 두 경우가 아니라면 NEITHER를 출력한다.

예제 입력 1 
5
JOE
BOB
ANDY
AL
ADAM
예제 출력 1 
DECREASING

예제 입력 2 
11
HOPE
ALI
BECKY
JULIE
MEGHAN
LAUREN
MORGAN
CARLI
MEGAN
ALEX
TOBIN
예제 출력 2 
NEITHER
"""

import sys

sys.stdin = open("./input.txt")

l = int(input())
names = []
i_d, i, result = [[0, 0], 1, ""]

for _ in range(l):
    names.append(input())

while i < l:
    if names[i - 1] < names[i]:
        i_d[0] += 1
    else:
        i_d[1] += 1
    i += 1

if i_d[0] > 0 and i_d[1] > 0:
    result = "NEITHER"
elif i_d[1] > 0:
    result = "DECREASING"
else:
    result = "INCREASING"

print(result)
