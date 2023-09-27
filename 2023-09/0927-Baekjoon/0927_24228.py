"""
https://www.acmicpc.net/problem/24228
Baekjoon
24228 젓가락

문제
젓가락통에 
N 종류의 젓가락이 종류별로 충분히 많이 들어있다. 
당신은 이 젓가락통에서 무작위로 젓가락을 뽑아서 R개의 짝을 맞춰야 한다. 
최악의 경우 몇 개의 젓가락을 뽑아야 하는가?


입력
두 개의 정수 
N, R이 주어진다. 
(1 ≤ N,R ≤ 10^18) 


출력
최악의 경우 뽑아야 하는 젓가락의 개수를 출력한다.


예제 입력 1 
2 1
예제 출력 1 
3
"""

import sys

sys.stdin = open("./input.txt")

c, p = map(int, input().split())

print((p - 1) * 2 + c + 1)
