"""
https://www.acmicpc.net/problem/7575
Baekjoon
7575 바이러스

문제
새로운 컴퓨터 바이러스가 발견되어서 이를 치료하는 백신 프로그램을 개발하려고 한다. 
백신 프로그램을 개발하기 위해서는 바이러스 코드를 알아야 하는데, 
감염된 프로그램들에 공통으로 존재하는 부분이 바이러스로 의심되는 부분이다. 
(프로그램의 코드는 양의 정수들의 나열로 표현된다.) 
단, 바이러스는 자신이 탐지되는 것을 막기 위해서, 자신의 코드를 반대로 기입하기도 한다. 
또한, 프로그램들의 코드 일부가 우연히 같을 수 있기 때문에, 
공통으로 나타나는 코드의 길이가 K 이상인 경우에만 바이러스 코드로 추정한다.

프로그램 1: 10 8 23 93 21 42 52 22 13 1 2 3 4
프로그램 2: 1 3 8 9 21 42 52 22 13 41 42
프로그램 3: 9 21 42 52 13 22 52 42 12 21
예를 들어, K = 4이고, 바이러스에 감염된 3개의 프로그램의 코드가 위와 같다고 하면, 
길이가 4인 "42 52 22 13" 코드가 프로그램 1과 2에 나타나고, 
"13 22 52 42"이 프로그램 3에 나타나므로 이 코드는 바이러스로 추정된다.

바이러스에 감염된 프로그램이 N 개 주어졌을 때, 
바이러스 코드로 추정되는 부분이 있는지 여부를 판정하는 프로그램을 작성하시오.


입력
첫 번째 줄에는 감염된 프로그램의 개수 N 과 
바이러스 코드 추정을 위한 최소 길이를 나타내는 정수 K 가 주어진다. 
단, 2 ≤ N ≤ 100이고, 4 ≤ K ≤ 1,000이다. 
두 번째 줄부터 각 프로그램에 대한 정보가 주어지는데, 
먼저 i 번째 프로그램의 길이를 나타내는 정수 Mi가 주어지고, 
다음 줄에 프로그램 코드를 나타내는 Mi개의 양의 정수가 공백을 사이에 두고 주어진다. 
단, 10 ≤ Mi ≤ 1,000이고, 프로그램 코드를 나타내는 각 정수의 범위는 1이상 10,000 이하이다.


출력
바이러스 코드로 추정되는 부분이 있으면 YES를 출력하고, 없으면 NO를 출력해야 한다.


예제 입력 1 
3 4
13
10 8 23 93 21 42 52 22 13 1 2 3 4
11
1 3 8 9 21 42 52 22 13 41 42
10
9 21 42 52 13 22 52 42 12 21
예제 출력 1 
YES
"""

import sys

sys.stdin = open("./input.txt")

import re

n, k = list(map(int, input().split()))
codes = []
idx, min, result = [0, 1000, "NO"]

for i in range(n):
    cnt = int(input())
    if min > cnt:
        min = cnt
        idx = i
    codes.append(input())

stand = codes[i].split()

pat_list = []
for i in range(min - k + 1):
    cur = stand[i : i + k]
    pat_list.append(cur)

for pat in pat_list:
    virus = "NO"
    for code in codes:
        p = re.compile(" ".join(pat))
        r = re.compile(" ".join(pat[::-1]))
        if p.search(code) and virus:
            virus = True
        elif r.search(code) and virus:
            virus = True
        else:
            virus = False
    if virus:
        result = "YES"

print(result)
