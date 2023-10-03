"""
https://www.acmicpc.net/problem/14491
Baekjoon
14491 9진수

문제
10진수를 9진수로 바꾸자.


입력
첫째 줄에 10진수 T(1 ≤ T ≤ 10,000)가 주어진다.


출력
T를 9진수로 변환한 수를 출력한다.


예제 입력 1 
100
예제 출력 1 
121
"""

import sys

sys.stdin = open("./input.txt")

result = ""
n = int(input())
quo, rem = 0, 0

if n < 9:
    print(n)

else:
    while n >= 9:
        quo, rem = divmod(n, 9)
        n = quo
        result = f"{rem}{result}"

    result = f"{quo}{result}"

    print(result)
