"""
https://www.acmicpc.net/problem/5347
Baekjoon
5347 LCM

문제
두 수 a와 b가 주어졌을 때, a와 b의 최소 공배수를 구하는 프로그램을 작성하시오.


입력
첫째 줄에 테스트 케이스의 개수 n이 주어진다. 
다음 n개 줄에는 a와 b가 주어진다. 
a와 b사이에는 공백이 하나 이상 있다. 
두 수는 백만보다 작거나 같은 자연수이다.


출력
각 테스트 케이스에 대해서 입력으로 주어진 두 수의 최소공배수를 출력한다.

예제 입력 1 
3
15 21
33 22
9 10
예제 출력 1 
105
66
90
"""

import sys

sys.stdin = open("./input.txt")


def get_lcm(a, b):
    multiple = a * b
    while b != 0:
        c = a % b
        a = b
        b = c
    return multiple // a


input_len = int(input())

for _ in range(input_len):
    a, b = list(map(int, input().split()))
    print(get_lcm(a, b))
