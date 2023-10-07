"""
https://www.acmicpc.net/problem/16495
Baekjoon
16495 열 순서

문제
엑셀 프로그램은 각 열의 순서를 알파벳 조합으로 구분한다. 
예를 들어, 열의 순서와 각 열을 나타내는 문자열은 다음과 같다.

열 문자열  A B C … X  Y  Z   AA  AB  AC  …  AZ  BA…
열 순서   1 2 3 … 24 25 26  27  28  29  …  52  53…
열 문자열이 주어졌을 때 이에 대한 열 순서를 반환하는 코드를 작성하라.


입력
첫째 줄에 1개 이상의 알파벳 대문자로 이루어진 열 문자열이 주어진다. 
입력 문자열의 길이는 10을 넘지 않는다.


출력
첫째 줄에 열 순서를 출력한다.


예제 입력 1 
X
예제 출력 1 
24

예제 입력 2 
AZ
예제 출력 2 
52
"""

import sys

sys.stdin = open("./input.txt")

a_str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
s_dic = {}
for i, s in enumerate(a_str, 1):
    if s_dic.get(s) == None:
        s_dic[s] = i

col = input()
col_len = len(col)

num = 0
for c in col:
    num += s_dic[c] * (26 ** (col_len - 1))
    col_len -= 1

print(num)
