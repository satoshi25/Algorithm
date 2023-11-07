"""
https://www.acmicpc.net/problem/3208
Baekjoon
3208 gus

문제
A worm is going to eat chocolate in a form of a rectangle with M rows and N columns.
It starts eating at the upper left corner and eats the entire row to its end. 
It then turns clockwise and continues to eat the whole column (the last one). 
Upon reaching its end, the process is repeated, 
i.e. the worm turns clockwise and eats the entire last row. 
By repeating this process of eating the chocolate, worm will eat the whole chocolate.

Write a program that will compute the number of turns the worm made 
until it ate the whole chocolate.


입력
The first and only line of the input contains two integers, 
M and N, 2 ≤ M,N ≤ 100,. separated by a space character. 
M is number of rows and N is number of columns. 


출력
The first and only line of output should contain the number of turns 
a worm needs to make until it eats the whole chocolate.


예제 입력 1 
2 3
예제 출력 1 
2

예제 입력 2 
5 3
예제 출력 2 
5

예제 입력 3 
4 10
예제 출력 3 
6
"""

import sys

sys.stdin = open("./input.txt")

m, n = list(map(int, input().split()))

t_cnt = 0
if m == 2:
    t_cnt += m
else:
    if m > n:
        t_cnt = n * 2 - 1
    elif m < n:
        t_cnt = (m - 1) * 2
    else:
        t_cnt = n * 2 - 2
print(t_cnt)
