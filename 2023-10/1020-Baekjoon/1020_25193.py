"""
https://www.acmicpc.net/problem/25193
Baekjoon
25193 곰곰이의 식단 관리

문제
곰곰이는 치킨을 좋아한다. 그러다 보니 매 끼니에 치킨을 먹고 있다. 
당신은 곰곰이의 트레이너로서 곰곰이의 식단을 관리해주기로 했다.
곰곰이가 N일간 먹어야 할 음식들의 리스트가 주어졌을 때, 
리스트의 순서를 원하는 대로 조정하여 
곰곰이가 연속으로 치킨을 먹는 날의 최댓값을 가장 작게 만들려고 한다.
곰곰이의 건강을 위해 위와 같은 프로그램을 작성해 보자.


입력
첫 번째 줄에 식단을 정할 일수 N(1 <= N <= 100,000)이 주어진다.
두 번째 줄에 음식의 리스트인 길이 N의 문자열 S가 주어진다. 
문자열은 영어 대문자로만 이루어져 있다. 
Si가 C인 경우, i번째 음식이 치킨이며, 그 외의 경우에는 다른 음식이다.


출력
곰곰이가 연속으로 치킨을 먹는 날의 최댓값의 최솟값을 구하여라.


예제 입력 1 
7
CCHCCCK
예제 출력 1 
2

예제 입력 2 
4
CCCC
예제 출력 2 
4

예제 입력 3 
5
ACCCC
예제 출력 3 
2
"""

import sys

sys.stdin = open("./input.txt")

diet_cnt = int(input())

diet_list = list(input())

c_cnt = diet_list.count("C")
not_c_cnt = diet_cnt - c_cnt

result = (
    c_cnt // (not_c_cnt + 1) + 1
    if c_cnt % (not_c_cnt + 1) != 0
    else c_cnt // (not_c_cnt + 1)
)
print(result)
