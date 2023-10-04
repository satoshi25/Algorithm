"""
https://www.acmicpc.net/problem/1393
Baekjoon
1393 음하철도 구구팔

문제
최백준은 음하철도 구구팔에 탔다.
문제는 구구팔의 기장인 조교 김재홍이 반쯤 미쳐서 열차를 멈추지 않는다는 것이다. 
그래서 최백준은 달리고 있는 열차에서 뛰어내려야 한다.
그런데 뛰어내릴 때 정류장 까지 거리가 너무 멀면 마이 아플 수 있다.
그래서 철도가 정류장에 가장 많이 근접했을 때 뛰어내리고자 한다.
어디서 뛰어내려야 하는가?


입력
첫번째 줄에는 xs와 ys가 주어진다. 
이는 정류장의 위치가 (xs, ys)임을 의미한다.
두번째 줄에는 xe, ye, dx, dy가 주어진다. 
이는 현재 열차 위치가 (xe, ye)이고, 
열차가 1초마다 x가 증가하는 방향으로 dx만큼, y가 증가하는 방향으로 dy만큼 이동함을 의미한다.
주어지는 모든 수는 -100이상, 100이하의 정수이다.


출력
최백준이 뛰어내릴 위치의 x좌표와 y좌표를 출력한다. 뛰어내릴 위치의 좌표가 항상 정수인 입력만 주어진다.


예제 입력 1 
5 2
2 1 2 4
예제 출력 1 
3 3
"""

import sys

sys.stdin = open("./input.txt")

xg, yg = map(int, input().split())
xc, yc, dx, dy = map(int, input().split())

if dy == 0 and dx == 0:
    print(f"{xc} {yc}")

else:
    cur = ((xg - xc) ** 2 + (yg - yc) ** 2) ** 0.5
    next = ((xg - (xc + dx)) ** 2 + (yg - (yc + dy)) ** 2) ** 0.5

    if next > cur:
        print(f"{xc} {yc}")
    else:
        if dy == 0:
            print(f"{xg} {yc}")
        elif dx == 0:
            print(f"{xc} {yg}")
        else:
            c2 = -(dy / dx) * xc + yc
            c1 = (dx / dy) * xg + yg
            x = int((c1 - c2) * (dx * dy) / (dx**2 + dy**2))
            y = int((dy / dx) * x + c2)

            print(f"{x} {y}")
