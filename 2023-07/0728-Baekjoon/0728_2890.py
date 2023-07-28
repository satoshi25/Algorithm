"""
https://www.acmicpc.net/problem/2890
Baekjoon
2890 카약

문제
상근이는 카약 대회를 개최했다. 
대회는 전세계에 생중계되고, 위성이 경기장 전체를 촬영하고 있다. 
상근이는 위성 사진을 바탕으로 실시간 순위를 계산하는 프로그램을 만들려고 한다.

위성 사진은 R행 C열이다. 
모든 줄의 첫 번째 글자는 'S'이고 출발선을 의미한다. 
또, 마지막 글자는 'F'이고 이것은 결승선을 의미한다. 
대회에 참가한 팀은 총 9팀이고, 각 팀은 1부터 9까지 번호가 매겨져 있다. 
카약은 항상 열에 대해 연속하는 세 칸을 차지하며, 카약 번호로 표시한다. 
마지막으로 물은 '.'로 나타나 있다.

팀의 순위는 결승선으로부터 떨어진 거리로 측정한다. 
가까울수록 순위가 높다. 
만약, 두 팀이 결승선과 떨어진 거리가 같다면, 같은 등수이다.

입력
첫째 줄에 R과 C가 주어진다. 
다음 R개 줄에는 '.', 'S', 'F', '1'~'9'로 이루어진 위성 지도가 주어진다. 
한 줄에는 최대 한 개의 카약만 있고, 위성 사진에 있는 카약은 항상 9개이다. (10 ≤ R, C ≤ 50)

출력
출력은 총 9줄을 해야 한다. i번째 줄에는 i번 팀의 등수를 출력한다. (i=1~9)

예제 입력 1 
10 10
S.....111F
S....222.F
S...333..F
S..444...F
S.555....F
S666.....F
S.777....F
S..888...F
S...999..F
S........F
예제 출력 1 
1
2
3
4
5
6
5
4
3
예제 입력 2 
10 15
S..........222F
S.....111.....F
S...333.......F
S...555.......F
S.......444...F
S.............F
S......777....F
S..888........F
S........999..F
S...666.......F
예제 출력 2 
5
1
6
3
6
6
4
7
2
"""
import sys

sys.stdin = open("./input.txt")

import re

m, n = map(int, input().split(" "))
teams, kayak, locations = [[], re.compile("[1-9]"), [[0, 0]] * n]

for _ in range(m):
    teams.append(list(input()))

for team in teams:
    i = n - 1
    print("i", i)
    while i >= 0:
        if kayak.match(team[i]):
            print(team, team[i])
            locations[int(team[i])] = [int(team[i]), i]
            break
        i -= 1

# [팀번호, 위치]
locations.pop(0)
print(sorted(locations, key=lambda team: team[1], reverse=True))
# print(locations)
