"""
https://www.acmicpc.net/problem/11809
Baekjoon
11809 YODA

문제
A long, long time ago in a galaxy far, 
far away a big collision of integers is taking place right now. 
What happens when two integers collide? 
During collision, each digit of one number compares 
itself to the corresponding digit of the other number 
(the least significant digit with the other’s least significant digit, and so on). 
The smaller digit “falls out” of the number containing it.
Additionally, if the digits are the same, nothing happens. 
If a number doesn’t consist of a corresponding digit, 
then we consider it to be zero. 
After all comparisons of corresponding digits, 
the leftover digits in the number come closer and create a new number. 
For example:

4 5 6 3 2 8   ->   4   6 3 2 8   ->   46328
2 8 4 3 1 5   ->     8   3       ->   83 

Write a programme that will, for two given integers, 
determine their values after collision. 
If it happens that all the digits of one number fell out, 
then for that number output the message “YODA”.


입력
The first line of input contains the integer N (1 ≤ N ≤ 109), 
one of the integers from the task. 
The second line of input contains the integer M (1 ≤ N ≤ 109), 
one of the integers from the task.


출력
The first line of output must contain the new value of 
the first given integer from the task. 
The second line of output must contain the new value of 
the second given integer from the task.


예제 입력 1 
300
500
예제 출력 1 
0
500

예제 입력 2 
65743
9651
예제 출력 2 
673
95

예제 입력 3 
2341
6785
예제 출력 3 
YODA
6785

"""

import sys

sys.stdin = open("./input.txt")

input = lambda: sys.stdin.readline().rstrip()

a = list(input())
b = list(input())

a_cnt = len(a)
b_cnt = len(b)
limit = a_cnt if a_cnt <= b_cnt else b_cnt
for i in range(1, limit + 1):
    if int(b[-i]) != int(a[-i]):
        if int(b[-i]) > int(a[-i]):
            a[-i] = ""
        else:
            b[-i] = ""

a_convert = "YODA" if "".join(a) == "" else int("".join(a))
b_convert = "YODA" if "".join(b) == "" else int("".join(b))

print(a_convert)
print(b_convert)
