"""
https://www.acmicpc.net/problem/10996
Beakjoon
10996 별 찍기 - 21

문제
예제를 보고 규칙을 유추한 뒤에 별을 찍어 보세요.

입력
첫째 줄에 N(1 ≤ N ≤ 100)이 주어진다.

출력
첫째 줄부터 차례대로 별을 출력한다.

예제 입력 1 
1
예제 출력 1 
*

예제 입력 2 
2
예제 출력 2 
*
 *
*
 *

예제 입력 3 
3
예제 출력 3 
* *
 *
* *
 *
* *
 *

예제 입력 4 
4
예제 출력 4 
* *
 * *
* *
 * *
* *
 * *
* *
 * *
"""

import sys

sys.stdin = open("./input.txt")

num = int(input())

result = ""
for i in range(num * 2):
    for j in range(num):
        if i % 2 == 0:
            if j % 2 == 0:
                result += "*"
            else:
                result += " "
        else:
            if j % 2 == 0:
                result += " "
            else:
                result += "*"
        if j == num - 1 and i != num * 2 - 1:
            result += "\n"

if num == 1:
    print("*")
else:
    print(result)
