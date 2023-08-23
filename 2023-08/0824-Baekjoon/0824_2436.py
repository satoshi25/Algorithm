"""
https://www.acmicpc.net/problem/2436
Baekjoon
2436 공약수

문제
어떤 두 자연수에 공통인 약수들 중에서 가장 큰 수를 최대공약수라고 하고, 
두 자연수의 공통인 배수들 중에서 가장 작은 수를 최소공배수라고 한다. 

예를 들어, 두 자연수 12와 90의 최대공약수는 6이며, 최소공배수는 180이다.
이와 반대로 두 개의 자연수 A, B가 주어졌을 때, 
A를 최대공약수로, B를 최소공배수로 하는 두 개의 자연수를 구할 수 있다. 
그러나, 이러한 두 개의 자연수 쌍은 여러 개 있을 수 있으며, 또한 없을 수도 있다. 

예를 들어, 최대공약수가 6이며 최소공배수가 180인 두 정수는 
위의 예에서와 같이 12와 90일 수도 있으며, 30과 36, 18과 60, 혹은 6과 180일 수도 있다. 
그러나, 최대공약수가 6이며 최소공배수가 20인 두 자연수는 있을 수 없다.

두 개의 자연수가 주어졌을 때, 이 두 수를 최대공약수와 최소공배수로 하는 
두 개의 자연수를 구하는 프로그램을 작성하시오. 


입력
첫째 줄에 두 개의 자연수가 빈칸을 사이에 두고 주어진다. 
첫 번째 수는 어떤 두 개의 자연수의 최대공약수이고, 두 번째 수는 그 자연수들의 최소공배수이다. 
입력되는 두 자연수는 2 이상 100,000,000 이하이다.


출력
첫째 줄에는 입력되는 두 자연수를 최대공약수와 최소공배수로 하는 
두 개의 자연수를 크기가 작은 수부터 하나의 공백을 사이에 두고 출력한다. 
입력되는 두 자연수를 최대공약수와 최소공배수로 하는 두 개의 자연수 쌍이 여러 개 있는 경우에는 
두 자연수의 합이 최소가 되는 두 수를 출력한다.


예제 입력 1 
6 180
예제 출력 1 
30 36

예제 입력 2 
2 86486400
예제 출력 2 
11648 14850
"""

import sys

sys.stdin = open("./input.txt")

gc, lc = list(map(int, input().split()))
num = gc * lc


def is_gcd(x, y, g, l):
    a, b, t_f = x, y, False
    if a < b:
        c = b
        b, a = a, c
    while b != 0:
        c = a % b
        a, b = b, c
    gcd = a
    lcm = (x * y) / a
    if gcd == g and lcm == l:
        t_f = True
    return t_f


factors = []
for i in range(1, int(num ** (1 / 2)) + 1):
    if num % i == 0:
        j = num // i
        if j <= lc and i <= lc:
            factors.append([i, j])

result = []
for factor in factors:
    if is_gcd(factor[0], factor[1], gc, lc):
        result.append([factor[0], factor[1], factor[0] + factor[1]])
result = list(map(str, sorted(result, key=lambda el: el[2])[0][:2]))

print(" ".join(result))
