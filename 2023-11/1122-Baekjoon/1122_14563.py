"""
https://www.acmicpc.net/problem/14563
Baekjoon
14563 완전수

문제
어떠한 자연수 N에 대해서 N을 제외한 약수(진약수)의 합이 N이 되는 자연수를 완전수라고 한다. 
예를 들어, 6의 약수는 1, 2, 3, 6인데 1+2+3은 6이기 때문에 완전수이다. 
또 진약수의 합이 자기 자신보다 작은 경우를 부족수, 
진약수의 합이 자기 자신보다 큰 경우를 과잉수라고 한다.

이때, 어떤 수가 주어질 때 이 수가 완전수인지, 부족수인지, 
과잉수인지를 구하는 프로그램을 작성하시오.


입력
첫째 줄에 자연수의 개수 T가 주어진다. T은 1000보다 작은 자연수이다.
둘째 줄에는 공백을 사이에 두고 완전수인지 구해야 되는 자연수 N이 주어진다.(1 ≤ N < 10,000)


출력
T개 줄에 걸쳐서 각 자연수에 대해서 완전수면 ‘Perfect’, 부족수면 ‘Deficient’, 
과잉수면 ‘Abundant’를 출력한다.


예제 입력 1 
3
28 21 36
예제 출력 1 
Perfect
Deficient
Abundant
"""

import sys

sys.stdin = open("./input.txt")

n_cnt = int(input())

n_list = list(map(int, input().split()))


def validate_perfect_num(num):
    result = ""
    n_sum = 0
    limit = int(num**0.5) + 1
    for i in range(1, limit):
        if num % i == 0:
            n_sum += i
            if i != num // i:
                n_sum += num // i
    n_sum -= num
    if n_sum > num:
        result = "Abundant"
    elif n_sum < num:
        result = "Deficient"
    else:
        result = "Perfect"
    return result


for n in n_list:
    print(validate_perfect_num(n))
