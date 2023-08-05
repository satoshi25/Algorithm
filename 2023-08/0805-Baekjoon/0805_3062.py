"""
https://www.acmicpc.net/problem/3062
Baekjoon
3062 수 뒤집기

문제
수 124를 뒤집으면 421이 되고 이 두 수를 합하면 545가 된다. 
124와 같이 원래 수와 뒤집은 수를 합한 수가 좌우 대칭이 되는지 테스트 하는 프로그램을 작성하시오.

입력
입력의 첫 줄에는 테스트 케이스의 개수 T가 주어진다. 
각 테스트 케이스는 한 줄에 하나의 정수 N(10 ≤ N ≤ 100000)이 주어진다.

출력
각 테스트 케이스에 대해서 원래 수와 뒤집은 수를 합한 수가 
좌우 대칭이 되면 YES를 아니면 NO를 한 줄에 하나씩 출력한다.

예제 입력 1 
4
13
58
120
5056
예제 출력 1 
YES
NO
YES
NO
"""

import sys

sys.stdin = open("./input.txt")

l = int(input())


def comp_rev(s):
    rev_str = s[::-1]
    sum_str = str(int(s) + int(rev_str))
    l, r, y_n = [0, len(sum_str) - 1, "YES"]

    while l < r:
        if sum_str[l] != sum_str[r]:
            y_n = "NO"
            break
        l += 1
        r -= 1
    return y_n


for _ in range(l):
    print(comp_rev(input()))
