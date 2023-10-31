"""
https://www.acmicpc.net/problem/3896
Baekjoon
3896 소수 사이 수열

문제
연속한 소수 p와 p+n이 있을 때, 
그 사이에 있는 n-1개의 합성수(소수나 1이 아닌 양의 정수)는 
길이가 n인 소수 사이 수열라고 부른다.

양의 정수 k가 주어졌을 때, 
k를 포함하는 소수 사이 수열의 길이를 구하는 프로그램을 작성하시오. 
k를 포함하는 소수 사이 수열이 없을 때는 길이가 0이다.

예를 들어, 소수 23과 29의 소수 사이 수열은 {24, 25, 26, 27, 28}이고, 길이는 6이다.


입력
첫째 줄에 테스트 케이스의 개수 T가 주어진다. 
테스트 케이스는 한 줄로 이루어져 있고, 한 줄에 정수 k가 주어진다. 
각각의 정수는 1보다 크고, 100000번째 소수(1299709)와 작거나 같다.


출력
각각의 테스트 케이스에 대해서 k가 합성수라면 k를 포함하는 소수 사이 수열의 길이를 출력한다. 
그렇지 않으면 0을 출력한다.


예제 입력 1 
5
10
11
27
2
492170
예제 출력 1 
4
0
6
0
114
"""

import sys

sys.stdin = open("./input.txt")

input = lambda: sys.stdin.readline().rstrip()

t_cnt = int(input())
k_list = []

for _ in range(t_cnt):
    k_list.append(int(input()))

k_max = 2 * max(k_list)
k_limit = int((k_max) ** 0.5)

n_list = [False, False] + [True] * k_max
p_list = []
for i in range(k_max):
    if n_list[i] == True:
        p_list.append(i)
        for j in range(2, k_max // i):
            n_list[i * j] = False

p_list = [i for i, e in enumerate(n_list) if e == True]

result = []


def find_cnt(n):
    for i, p in enumerate(p_list):
        if n == p:
            return 0
        else:
            if n < p:
                return p - p_list[i - 1]


for k in k_list:
    result.append(str(find_cnt(k)))

print("\n".join(result))
