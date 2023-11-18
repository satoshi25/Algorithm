"""
https://www.acmicpc.net/problem/3699
Baekjoon
3699 주차 빌딩

문제
주차 빌딩의 원리는 간단하다. 
차를 주차 타워의 입구에 있는 엘리베이터에 주차시키고 차에서 내린다. 
엘리베이터와 컨베이어 벨트는 빈 주차 공간을 찾아 그곳으로 이동시킨다. 
차를 찾으러 오기 전까지 차는 계속 그곳에 있는다. 
차를 찾으러 오면, 엘리베이터와 컨베이어 벨트는 해당하는 차를 찾아 다시 입구로 가져온다.

주차 빌딩의 레이아웃은 간단하다. 
빌딩에는 중앙 엘리베이터가 있고, 차는 엘리베이터를 이용해서 층 사이를 이동할 수 있다. 
각 층에는 거대한 원형 컨베이어 벨트가 있으며, 이 컨베이어 벨트 위에 차가 있다. 
벨트는 시계방향, 반시계방향으로 움직일 수 있다. 
엘리베이터가 어떤 층에 도착했을 때, 컨베이어 벨트의 일부가 되며, 
차는 엘리베이터를 통과해서 이동할 수 있다.

하루 일과가 끝날 때 쯤이면, 많은 사람들이 차를 다시 찾으러 주차 빌딩으로 온다. 
사람들은 온 순서대로 차를 찾을 수 있다. 
엘리베이터는 차가 있는 곳으로 이동하고, 컨베이어 벨트는 차를 엘리베이터에 싣고, 
다시 아래로 내려가 고객에게 차를 전달해준다. 
모든 손님이 차를 찾는데 걸리는 시간을 구하는 프로그램을 작성하시오. 
엘리베이터가 층을 이동하는데 걸리는 시간은 10초이고, 
컨베이어 벨트가 차 한 대 만큼 시게방향 또는 반시계방향으로 이동하는데 걸리는 시간은 5초이다. 


입력
첫째 줄에 테스트 케이스의 개수가 주어진다. 
테스트 케이스는 최대 100개이다. 
각 테스트 케이스의 첫째 줄에는 주차 빌딩의 높이 h와 컨베이어 벨트의 길이 l이 주어진다. 
(1 ≤ h ≤ 50, 2 ≤ l ≤ 50) 
다음 h개 줄에는 l개의 정수가 주어지며, 이 정수는 주차 빌딩에 들어있는 차의 정보이다. 
i번째 줄의 j번째 숫자는 i번 층의 j번 위치에 있는 차의 정보를 나타낸다. 
정수가 -1인 경우에는 그 칸이 비어있는 곳이고, 
다른 값인 r인 경우에는 r번째 손님이 찾아가는 차라는 의미이다. 
손님이 차를 1층에서 찾아가고, 엘리베이터는 첫 번째 위치에 있다. 
엘리베이터는 처음에 항상 비어있다. 
주차 빌딩에 차가 항상 존재하는 경우만 입력으로 주어진다.


출력
각 테스트 케이스마다 모든 손님이 차를 찾는데 걸리는 시간을 출력한다.


예제 입력 1 
2
1 5
-1 2 1 -1 3
3 6
-1 5 6 -1 -1 3
-1 -1 7 -1 2 9
-1 10 4 1 8 -1
예제 출력 1 
25
320
"""

import sys

sys.stdin = open("./input.txt")

input = lambda: sys.stdin.readline().rstrip()

test_cnt = int(input())


def cal_time(matrix, order_cnt, f_cnt, b_cnt):
    order_list = [""] * order_cnt
    cost_time = 0
    cur_idx = [0] * f_cnt

    for i, floor in enumerate(matrix):
        for j, el in enumerate(floor):
            if el != -1:
                order_list[el - 1] = [i, j]
    for i, el in enumerate(order_list):
        cost_time += el[0] * 2 * 10
        if cur_idx[el[0]] < el[1]:
            belt_time = (
                abs(el[1] - cur_idx[el[0]])
                if abs(el[1] - cur_idx[el[0]]) < abs((b_cnt - el[1]) + cur_idx[el[0]])
                else abs((b_cnt - el[1]) + cur_idx[el[0]])
            )
        else:
            belt_time = (
                abs(el[1] - cur_idx[el[0]])
                if abs(el[1] - cur_idx[el[0]]) < abs((b_cnt - cur_idx[el[0]]) + el[1])
                else abs((b_cnt - cur_idx[el[0]]) + el[1])
            )
        cur_idx[el[0]] = el[1]
        cost_time += belt_time * 5
    return cost_time


for _ in range(test_cnt):
    floor, belt = map(int, input().split())
    matrix = []
    max_order = 0
    for _ in range(floor):
        cur = list(map(int, input().split()))
        cur_max = max(cur)
        if max_order < cur_max:
            max_order = cur_max
        matrix.append(cur)
    print(cal_time(matrix, max_order, floor, belt))
