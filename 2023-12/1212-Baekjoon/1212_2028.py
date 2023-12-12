"""
https://www.acmicpc.net/problem/2028
Baekjoon
2028 자기복제수

문제
어떤 자연수 N을 제곱했을 때, 그 제곱수의 맨 뒷자리에 원래의 수 N이 다시 나타나면, 
우리는 그 수 N을 자기복제수라고 한다.

예를 들면, 5의 제곱은 52는 25이고 
25의 맨 뒷자리에 원래의 수 5가 나타나므로 5는 자기복제수이다. 
또 다른 예로, 76의 제곱은 5776이고 5776의 맨 뒷자리에 76이 나타나므로 
76 또한 자기복제수이다.

자연수 N이 주어졌을 때, 그 수가 자기복제수인지 아닌지를 알아내는 프로그램을 작성하시오.


입력
입력의 첫 줄에는 테스트 케이스의 개수 T (1 ≤ T ≤ 20)가 주어진다. 
각 테스트 케이스는 한 줄로 이루어져 있으며, 자연수 N (1 ≤ N ≤ 1000)이 주어진다.


출력
각 테스트 케이스에 대해, 주어진 자연수가 자기복제수이면 YES를 아니면 NO를 출력한다.


예제 입력 1 
4
1
6
76
89
예제 출력 1 
YES
YES
YES
NO
"""

import sys

sys.stdin = open("./input.txt")

input = lambda: sys.stdin.readline().rstrip()

t_cnt = int(input())

for _ in range(t_cnt):
    cur = input()
    n, size = [int(cur), len(cur)]
    sq = str(n**2)
    print("YES") if int(sq[-size:]) == n else print("NO")
