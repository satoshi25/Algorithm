"""
https://www.acmicpc.net/problem/5212
Baekjoon
5212 지구 온난화

문제
푸르고 아름다운 남해에는 많은 섬이 장관을 이루고 있다. 
그림이 아니면 볼 수 없을 것 같은 아름다운 장관을 
실제로 볼 수 있는 다도해로 상근이는 여행을 떠났다.

다도해에 도착한 상근이는 서울에서 보던 것과는 다른 풍경에 큰 충격을 받았다. 
지구 온난화로 인해 해수면이 상승해 섬의 일부가 바다에 잠겨버렸다.

서울로 다시 돌아온 상근이는 이렇게 지구 온난화가 계속 될 경우 
남해의 지도는 어떻게 바뀔지 궁금해졌다.

다도해의 지도는 R*C 크기의 그리드로 나타낼 수 있다. 
'X'는 땅을 나타내고, '.'는 바다를 나타낸다.

50년이 지나면, 인접한 세 칸 또는 네 칸에 바다가 있는 땅은 모두 잠겨버린다는 사실을 알았다.

상근이는 50년 후 지도를 그려보기로 했다. 
섬의 개수가 오늘날보다 적어질 것이기 때문에, 지도의 크기도 작아져야 한다. 
지도의 크기는 모든 섬을 포함하는 가장 작은 직사각형이다. 
50년이 지난 후에도 섬은 적어도 한 개 있다. 
또, 지도에 없는 곳, 지도의 범위를 벗어나는 칸은 모두 바다이다.


입력
첫째 줄에 지도의 크기 R과 C (1 ≤ R, C ≤ 10)가 주어진다. 
다음 R개 줄에는 현재 지도가 주어진다.


출력
50년 후의 지도를 출력한다.


예제 입력 1 
5 3
...
.X.
.X.
.X.
...
예제 출력 1 
X

예제 입력 2 
3 10
..........
..XXX.XXX.
XXX.......
예제 출력 2 
.XX...X
XX.....
"""

# 5212 지구 온난화

import sys

sys.stdin = open("./input.txt")

input = lambda: sys.stdin.readline().rstrip()

row, column = map(int, input().split())

t_map = []

matrix = []
c_cnt = 0
while c_cnt != row + 2:
    matrix.append(["."] * (column + 2))
    c_cnt += 1

t_map.append(["."] * (column + 2))

for _ in range(row):
    piece = list(input())
    t_map.append(["."] + piece + ["."])
t_map.append(["."] * (column + 2))
i_max, i_min = 0, row + 2
j_max, j_min = 0, column + 2

for i in range(row):
    for j in range(column):
        s_cnt = 0
        t, b, r, l = [i, j + 1], [i + 2, j + 1], [i + 1, j + 2], [i + 1, j]
        if t_map[i + 1][j + 1] == "X":
            if t_map[t[0]][t[1]] == ".":
                s_cnt += 1
            if t_map[b[0]][b[1]] == ".":
                s_cnt += 1
            if t_map[r[0]][r[1]] == ".":
                s_cnt += 1
            if t_map[l[0]][l[1]] == ".":
                s_cnt += 1
            if s_cnt < 3:
                matrix[i + 1][j + 1] = "X"
                if i_max < i + 1:
                    i_max = i + 1
                if i_min > i + 1:
                    i_min = i + 1
                if j_max < j + 1:
                    j_max = j + 1
                if j_min > j + 1:
                    j_min = j + 1

for n in range(row + 2):
    matrix[n] = matrix[n][j_min : j_max + 1]
matrix = matrix[i_min : i_max + 1]

for m_row in matrix:
    print("".join(m_row))
