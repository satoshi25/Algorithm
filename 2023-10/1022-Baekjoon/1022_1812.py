"""
https://www.acmicpc.net/problem/1812
Baekjoon
1812 사탕

문제
N(3≤N≤999, N은 홀수)명의 학생들이 원 모양으로 둘러앉아 있다. 
각 학생들은 모두 몇 개의 사탕(≤100,000)을 가지고 있는데 
그 개수는 사람마다 다를 수 있고, 사탕을 아예 가지고 있지 않을 수도 있다. 
물론 사탕의 개수는 음이 아닌 정수이다.

편의상 학생들에게 번호를 매기는데, 반시계 방향으로 
1번 학생, 2번 학생, …, N번 학생으로 번호를 매겼다. 
1번 학생 오른쪽엔 2번 학생, 2번 학생 오른쪽엔 3번 학생이 앉아 있는 것이고, 
마지막 N번 학생 오른쪽엔 1번 학생이 앉아 있게 된다.

우리는 인접한 두 학생이 가지고 있는 사탕의 수의 합을 안다. 
즉 1번 학생과 2번 학생이 가지고 있는 사탕의 수의 합, 
2번 학생과 3번 학생이 가지고 있는 사탕의 수의 합, …, N-1번 학생과 
N번 학생이 가지고 있는 사탕의 수의 합, 
마지막으로 N번 학생과 1번 학생의 가지고 있는 사탕의 수의 합을 안다. 
이때, 각 학생이 가지고 있는 사탕의 수를 구하는 프로그램을 작성하시오.


입력
첫째 줄에 N(3 ≤ N ≤ 999, N은 홀수)이 주어진다. 
둘째 줄부터 N개의 줄에 걸쳐 1번 학생과 2번 학생이 가지고 있는 사탕의 수의 합, 
2번 학생과 3번 학생이 가지고 있는 사탕의 수의 합, …, N-1번 학생과 
N번 학생이 가지고 있는 사탕의 수의 합, 
마지막으로 N번 학생과 1번 학생의 가지고 있는 사탕의 수의 합이 순서대로 주어진다.


출력
첫째 줄부터 N개의 줄에 걸쳐 1번 학생이 가지고 있는 사탕의 수, 
2번 학생이 가지고 있는 사탕의 수, …, N번 학생이 가지고 있는 
사탕의 수를 순서대로 출력한다. 
출력하는 수는 음이 아닌 정수들이어야 하며, 
항상 답이 존재하는 경우만이 입력으로 주어진다고 가정해도 좋다.


예제 입력 1 
3
5
7
6
예제 출력 1 
2
3
4
"""

import sys

sys.stdin = open("./input.txt")

s_cnt = int(input())
sum_list = []
total_c = 0
total_minus_last = 0

for i in range(s_cnt):
    cur = int(input())
    sum_list.append(cur)
    total_c += cur
    if i % 2 == 0 and i != s_cnt - 1:
        total_minus_last += cur


last = total_c // 2 - total_minus_last
first = sum_list[-1] - last
s_list = [str(first)]

for i, c in enumerate(sum_list, 0):
    if i != s_cnt - 1:
        candy = sum_list[i] - int(s_list[-1])
        s_list.append(str(candy))

print("\n".join(s_list))
