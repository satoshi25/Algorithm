"""
https://www.acmicpc.net/problem/2490
Baekjoon
2490 윷놀이

문제
우리나라 고유의 윷놀이는 네 개의 윷짝을 던져서 배(0)와 등(1)이 나오는 숫자를 세어 
도, 개, 걸, 윷, 모를 결정한다. 
네 개 윷짝을 던져서 나온 각 윷짝의 배 혹은 등 정보가 주어질 때 
도(배 한 개, 등 세 개), 개(배 두 개, 등 두 개), 
걸(배 세 개, 등 한 개), 윷(배 네 개), 모(등 네 개) 중 
어떤 것인지를 결정하는 프로그램을 작성하라.


입력
첫째 줄부터 셋째 줄까지 각 줄에 각각 한 번 던진 윷짝들의 상태를 나타내는 
네 개의 정수(0 또는 1)가 빈칸을 사이에 두고 주어진다.


출력
첫째 줄부터 셋째 줄까지 한 줄에 하나씩 결과를 
도는 A, 개는 B, 걸은 C, 윷은 D, 모는 E로 출력한다.


예제 입력 1 
0 1 0 1
1 1 1 0
0 0 1 1
예제 출력 1 
B
A
B
"""

import sys

sys.stdin = open("./input.txt")

input = lambda: sys.stdin.readline().rstrip()
s_list = ["E", "A", "B", "C", "D"]
for _ in range(3):
    cur = input().split()
    cnt = 0
    for c in cur:
        if c == "0":
            cnt += 1
    print(s_list[cnt])
