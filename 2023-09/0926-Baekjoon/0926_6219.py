"""
https://www.acmicpc.net/problem/6219
Baekjoon
6219 소수의 자격

문제
농부 존은 소들에게 소수로 차례차례 번호를 매기는 중이다. 
베시는 이 번호에서 숫자 D가 몇 번이나 등장하는지 궁금해졌다.

베시를 도와 범위 A..B(A와 B 포함)내에서 숫자 D를 포함하는 소수의 개수를 구해보자.

소수는 두개의 자연수(1과 자기자신)로만 나누어 떨어지는 자연수를 말한다. 
소수의 예로는 2,3,5,7,11,13,17,19,23,29.. 가 있다.


입력
세 정수 A, B, D가 주어진다.


출력
주어진 범위 내에서 숫자 D를 포함하는 소수의 개수를 출력한다.


제한
1 ≤ A ≤ B ≤ 4,000,000
B ≤ A + 2,000,000


예제 입력 1 
10 15 3
예제 출력 1 
1
"""

import sys
import math
import re

sys.stdin = open("./input.txt")

a, b, d = map(int, input().split())
is_d = re.compile(f"{d}")


def get_prime(b):
    primes = []
    if b <= 1:
        return primes
    lim = int(math.sqrt(b)) + 1
    nums = [False] * 2 + [True] * (b - 1)
    for i in range(2, lim):
        for j in range(2, b // i + 1):
            nums[i * j] = False
    for i, num in enumerate(nums, 0):
        if num:
            primes.append(i)
    return primes


cnt = 0
prime_list = get_prime(b)

for p in prime_list:
    if p >= a and is_d.search(str(p)) != None:
        cnt += 1

print(cnt)
