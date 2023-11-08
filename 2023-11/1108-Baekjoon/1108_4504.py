"""
https://www.acmicpc.net/problem/4504
Baekjoon
4504 배수 찾기

문제
정수 n(0 < n < 1000)과 수의 목록이 주어졌을 때, 
목록에 들어있는 수가 n의 배수인지 아닌지를 구하는 프로그램을 작성하시오.


입력
첫째 줄에 n이 주어진다. 
다음 줄부터 한 줄에 한 개씩 목록에 들어있는 수가 주어진다. 
이 수는 0보다 크고, 10,000보다 작다. 
목록은 0으로 끝난다.


출력
목록에 있는 수가 n의 배수인지 아닌지를 구한 뒤 예제 출력처럼 출력한다.


예제 입력 1 
3
1
7
99
321
777
0
예제 출력 1 
1 is NOT a multiple of 3.
7 is NOT a multiple of 3.
99 is a multiple of 3.
321 is a multiple of 3.
777 is a multiple of 3.
"""

import sys

sys.stdin = open("./input.txt")

input = lambda: sys.stdin.readline().rstrip()

f = int(input())

while True:
    n = int(input())
    if n == 0:
        break
    if n % f == 0:
        print(f"{n} is a multiple of {f}.")
    else:
        print(f"{n} is NOT a multiple of {f}.")
