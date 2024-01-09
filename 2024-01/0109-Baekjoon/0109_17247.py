'''
https://www.acmicpc.net/problem/17247
Baekjoon
17247 택시 거리

문제
택시 거리는 바둑판 모양의 도로망을 가진 도시에서 
점 A에서 B까지의 최단 거리를 구할 경우 도로를 따라서만 가는 가장 짧은 거리를 뜻한다.

위의 사진에서는 빨간색 선이 택시거리이다. 
즉, 점 A의 좌표가 (x1, y1)이고 점 B의 좌표를 (x2, y2)라고 했을 때, 
두 장소 사이의 택시 거리 D는 다음과 같다.

D = |x_2 - x_1| + |y_2 - y_1|

인접한 0과 0, 0과 1, 1과 1 사이의 거리를 1이라고 할 때, 
두 1 사이의 거리를 구하는 프로그램을 작성하시오.


입력
첫 줄엔 문자열의 높이 N과 가로 M이 주어진다. (2 ≤ N, M ≤ 1,000) 이다.
두 번째 줄부터 M개의 숫자 0또는 1이 예제 입력과 같이 N개의 줄에 걸쳐 입력된다.
1는 항상 두 개만 입력된다.


출력
주어진 숫자들에서 1과 1사이의 택시 거리를 구하시오.


예제 입력 1 
3 4
1 0 0 0
0 0 0 0
0 0 0 1
예제 출력 1 
5
'''

import sys

sys.stdin = open('./input.txt')

input = lambda: sys.stdin.readline().rstrip()

r, c = map(int, input().split())
f, s = [False, False]

for i in range(r):
	cur = list(input().split())
	if '1' in cur:
		idx = cur.index('1')
	else:
		idx = -1
	if idx != -1:
		if f == False:
			f = [i, idx]
		else:
			s = [i, idx]

d = abs(f[0] - s[0]) + abs(f[1] - s[1])
print(d)
