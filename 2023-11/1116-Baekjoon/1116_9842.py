"""
https://www.acmicpc.net/problem/9842
Baekjoon
9842 Prime

문제
A prime number is a natural number which has exactly 
two distinct natural number divisors: 1 and itself. 
The first prime number is 2. 
Can you write a program that computes the nth prime number, 
given a number n ≤ 10000?


입력
The input contains just one number which is the number 
n as described above. 
The maximum value of n is 10000.


출력
The output consists of a single integer that is the nth prime number.


예제 입력 1 
30
예제 출력 1 
113
"""

import sys

sys.stdin = open("./input.txt")

n_th = int(input())

k = 0
limit = 2000000
n_list = [False, False] + [True] * limit
target = 0

for i, n in enumerate(n_list):
    if n == True:
        k += 1
        if k == n_th:
            target = i
            break
        for j in range(2, limit // i + 1):
            n_list[i * j] = False

print(target)
