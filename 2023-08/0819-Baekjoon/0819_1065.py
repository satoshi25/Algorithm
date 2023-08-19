"""
https://www.acmicpc.net/problem/1065
Baekjoon
1065 한수

문제
어떤 양의 정수 X의 각 자리가 등차수열을 이룬다면, 그 수를 한수라고 한다. 
등차수열은 연속된 두 개의 수의 차이가 일정한 수열을 말한다. 
N이 주어졌을 때, 1보다 크거나 같고,
N보다 작거나 같은 한수의 개수를 출력하는 프로그램을 작성하시오. 

123 한수O       135 한수O       152 한수X


입력
첫째 줄에 1,000보다 작거나 같은 자연수 N이 주어진다.


출력
첫째 줄에 1보다 크거나 같고, N보다 작거나 같은 한수의 개수를 출력한다.


예제 입력 1 
110
예제 출력 1 
99

예제 입력 2 
1
예제 출력 2 
1

예제 입력 3 
210
예제 출력 3 
105

예제 입력 4 
1000
예제 출력 4 
144

예제 입력 5 
500
예제 출력 5 
119
"""

# import sys

# sys.stdin = open("./input.txt")

n: int = int(input())
cnt: int = 0


def check_one_num(num: int) -> bool:
    s, tf = str(num), True
    l = len(s)
    d = int(s[0]) - int(s[1])
    for i in range(l - 1):
        if int(s[i]) - int(s[i + 1]) != d:
            tf = False
            break
    return tf


if n <= 99:
    cnt = n
else:
    cnt = 99
    while n > 99:
        if check_one_num(n):
            cnt += 1
        n -= 1

print(cnt)
