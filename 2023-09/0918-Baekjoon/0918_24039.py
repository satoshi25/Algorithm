"""
https://www.acmicpc.net/problem/24039
Baekjoon
24039 2021은 무엇이 특별할까?

문제

백준 온라인 저지의 송년대회 Good Bye BOJ, 
2021!의 개최일은 2021년 12월 31일이다. 
원이는 대회가 개최된다는 사실이 기뻐 제목을 뚫어져라 보다가 2021이 무언가 특별하다는 사실을 깨달았다.

그렇다. 2021은 연속한 두 소수 43과 47의 곱이다. 
다음에 이런년도가 오려면 무려 470년 뒤인 2491년이 되어야 한다. 
원이는 어떤 수가 연속한 두 소수의 곱으로 이루어져 있으면 특별한 수라 부르기로 하였다.

주어진 수보다 큰 특별한 수 중 가장 작은 수를 구하는 프로그램을 작성하시오.


입력
첫 번째 줄에 주어진 수 
N이 주어진다.


출력
첫 번째 줄에 
N보다 큰 특별한 수 중 가장 작은 수를 출력하여라.


제한
1 <= N <= 10,000
N은 정수이다.


예제 입력 1 
2020
예제 출력 1 
2021

예제 입력 2 
2021
예제 출력 2 
2491
"""

import sys

sys.stdin = open("./input.txt")

num = int(input())
primes = [2]
pre, cur = primes[-1], 3


def get_prime(num, p_list):
    is_prime = True
    for p in p_list:
        if num % p == 0:
            is_prime = False
    return is_prime


while True:
    prime = get_prime(cur, primes)
    if prime:
        if cur * pre > num:
            break
        else:
            primes.append(cur)
            pre = primes[-1]
    cur += 1

print(cur * pre)
