"""
https://www.acmicpc.net/problem/1747
Baekjoon
1747 소수&팰린드롬

문제
어떤 수와 그 수의 숫자 순서를 뒤집은 수가 일치하는 수를 팰린드롬이라 부른다. 
예를 들어 79,197과 324,423 등이 팰린드롬 수이다.

어떤 수 N (1 ≤ N ≤ 1,000,000)이 주어졌을 때, N보다 크거나 같고, 
소수이면서 팰린드롬인 수 중에서, 가장 작은 수를 구하는 프로그램을 작성하시오.


입력
첫째 줄에 N이 주어진다.


출력
첫째 줄에 조건을 만족하는 수를 출력한다.


예제 입력 1 
31
예제 출력 1 
101
"""

import sys

sys.stdin = open("./input.txt")

start = int(input())

end = 2000000

n_list = [False, False] + [True] * (end - 1)
p_list = []
p_p = 0


def validate_palin(num):
    str_num = str(num)
    l = 0
    r = len(str_num) - 1
    is_palin = True
    while l <= r:
        if str_num[l] != str_num[r]:
            is_palin = False
            break
        l += 1
        r -= 1
    return is_palin


for i, n in enumerate(n_list, 0):
    if i > int(end**0.5):
        break
    if n == True:
        palin = validate_palin(i)
        if palin == True and i >= start:
            p_p = i
            break
        limit = end // i
        for m in range(2, limit + 1):
            if n_list[i * m] == True:
                n_list[i * m] = False

if p_p != 0:
    print(p_p)
else:
    for i, n in enumerate(n_list, 0):
        if n == True and i >= start:
            if validate_palin(i):
                p_p = i
                print(p_p)
                break
