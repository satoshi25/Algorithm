'''
https://www.acmicpc.net/problem/17173
Baekjoon
17173 배수들의 합

문제
신원이는 백준에서 배수에 관한 문제를 풀다가 감명을 받아 새로운 문제를 만들어보았다. 
자연수 N과 M개의 자연수 Ki가 주어진다. 
Ki중 적어도 하나의 배수이면서 1 이상 N 이하인 수의 합을 구하여라.


입력
첫 번째 줄에 N과 M가 주어진다. (2 ≤ N ≤ 1000, 1 ≤ M < N)

그다음 줄에 M개의 정수 Ki가 주어진다. (2 ≤ Ki ≤ 1000)

동일한 Ki는 주어지지 않으며, 오름차순으로 정렬되어있다.


출력
배수들의 합을 출력한다.


예제 입력 1 
10 2
2 3
예제 출력 1 
42

예제 입력 2 
1000 3
3 5 7
예제 출력 2 
272066
'''

import sys

sys.stdin = open('./input.txt')

input = lambda: sys.stdin.readline().rstrip()

n, m = map(int, input().split())

k_list = list(map(int, input().split()))
n_sum = 0

for i in range(1, n+1):
    for k in k_list:
        if i % k == 0:
            n_sum += i
            break

print(n_sum)