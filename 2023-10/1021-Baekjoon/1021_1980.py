"""
https://www.acmicpc.net/problem/1980
Baekjoon
1980 햄버거 사랑

문제
민혁이는 타워버거와 불고기버거를 매우 좋아한다. 
민혁이는 타워버거를 먹는데 n분이 걸리고, 불고기버거를 먹는데 m분이 걸린다. 
그는 t분 동안 햄버거를 최대한 많이 먹으려고 한다. 
햄버거를 먹는 도중에 t분이 끝나면 안 되고, 아무것도 안 먹고 있을 때는 콜라를 마신다. 
문제의 목적은 다음과 같다.

우선 콜라를 마시는 시간을 최소로 한다.
콜라를 마시는 시간이 같은 여러 가지 경우에는 햄버거를 가장 많이 먹을 수 있는 경우를 알아본다.


입력
첫 줄에 n, m, 주어진 시간 t가 주어진다. 세 수는 모두 1만 이하의 자연수이다.


출력
한 줄에 두 개의 수를 출력하는데, 첫 수는 먹은 햄버거의 개수이고, 
두 번째 수는 콜라를 마신 시간이다.


예제 입력 1 
3 5 55
예제 출력 1 
17 0

예제 입력 2 
3 5 54
예제 출력 2 
18 0

예제 입력 3 
3 5 7
예제 출력 3 
2 1

예제 입력 4 
3 5 8
예제 출력 4 
2 0
"""

import sys

sys.stdin = open("./input.txt")

n, m, t = map(int, input().split())

max_cnt = [0, 0]
min_d_cnt = [0, t]
i = 0
while True:
    if t - n * i < 0:
        break
    q, r = divmod(t - n * i, m)
    h_cnt = i + q
    if r == 0:
        if h_cnt > max_cnt[0]:
            max_cnt[0] = h_cnt
    else:
        if r <= min_d_cnt[1]:
            if r != min_d_cnt[1] or h_cnt > min_d_cnt[0]:
                min_d_cnt[0] = h_cnt
                min_d_cnt[1] = r
    i += 1

if max_cnt[0] > 0:
    print(f"{max_cnt[0]} {max_cnt[1]}")
else:
    print(f"{min_d_cnt[0]} {min_d_cnt[1]}")
