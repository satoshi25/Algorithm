'''
https://www.acmicpc.net/problem/28061
Baekjoon
28061 레몬 따기

문제
성우는 숲에서 레몬을 따와야 한다. 
숲은 하나의 수직선으로 표현할 수 있고, 
여기에는 레몬 나무 N그루가 x = 1부터 x = N 까지 일정한 간격으로 자라 있다. 
성우는 현재 x = 0에 있으며, 집은 x = N + 1에 있다. 
x = i에 위치한 나무에는 a_i개의 레몬이 자라 있다. 
성우는 집에 돌아갈 때까지 매번 다음 중 하나를 선택하여 행동한다.

채집: 나무에 자라있는 레몬을 모두 딴다. 이 행동은 최대 한 번 할 수 있다.
이동: 현재 위치가 x = i라면, x = i + 1로 이동한다.
하지만 레몬을 담을 보따리에는 구멍이 뚫려 있었다. 
성우가 이동행동 2할 때마다, 
보따리에 레몬이 담겨 있다면 보따리에 담긴 레몬이 1개 빠져나오고, 이는 다시 주울 수 없다. 
성우가 집에 들고 갈 수 있는 레몬의 최대 개수를 구해주자!


입력
첫째 줄에 나무의 수 N이 주어진다. 
(1 <= N <= 2 * 10^5)

둘째 줄에는 x = i에 위치한 나무에 자라 있는 레몬의 개수 a_i가 차례대로 주어진다. 
(1 <= a_i <= 10^9)


출력
성우가 집에 들고 갈 수 있는 레몬의 최대 개수를 출력한다.


예제 입력 1 
3
2 3 4
예제 출력 1 
3

예제 입력 2 
4
100 97 90 12
예제 출력 2 
96
'''

import sys

sys.stdin = open('./input.txt')

input = lambda: sys.stdin.readline().rstrip()

t_cnt = int(input())
f_list = list(map(int, input().split()))
f_max = 0

for i, f in enumerate(f_list):
    cur_f = f - (t_cnt - i)
    if cur_f > f_max:
        f_max = cur_f

print(f_max)