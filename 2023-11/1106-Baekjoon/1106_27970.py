"""
https://www.acmicpc.net/problem/27970
Baekjoon
27970 OX

문제
O와 X로 이루어진 문자열이 주어진다. 
모든 문자를 X로 만들 때까지 다음 연산을 반복할 때, 시행하는 연산의 횟수를 구하시오.

- 문자열의 가장 왼쪽에 있는 O를 X로 바꾸고, 그보다 왼쪽에 있는 X를 전부 O로 바꾼다.


입력
첫째 줄에 O와 X로 이루어진 문자열이 주어진다. 문자열의 길이는 1 이상 100,000 이하이다.


출력
첫째 줄에 연산의 횟수를 10^9 + 7로 나눈 나머지를 출력한다.


예제 입력 1 
OXO
예제 출력 1 
5

예제 입력 2 
X
예제 출력 2 
0

예제 입력 3 
OXXOXOXOXOOXXXXOXOOOXOOXXOOOXOXOXOXO
예제 출력 3 
876151662
"""

import sys

sys.stdin = open("./input.txt")

ox = list(input())

b_num = list(map(lambda x: "0" if x == "X" else "1", ox))[::-1]

print(int("".join(b_num), 2) % (10**9 + 7))
