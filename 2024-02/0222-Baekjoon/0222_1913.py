'''
https://www.acmicpc.net/problem/1913
Baekjoon
1913 달팽이

문제
홀수인 자연수 N이 주어지면, 
다음과 같이 1부터 N2까지의 자연수를 
달팽이 모양으로 N×N의 표에 채울 수 있다.

9	2	3
8	1	4
7	6	5

25	10	11	12	13
24	9	2	3	14
23	8	1	4	15
22	7	6	5	16
21	20	19	18	17

N이 주어졌을 때, 이러한 표를 출력하는 프로그램을 작성하시오. 
또한 N2 이하의 자연수가 하나 주어졌을 때, 그 좌표도 함께 출력하시오. 
예를 들어 N=5인 경우 6의 좌표는 (4,3)이다.


입력
첫째 줄에 홀수인 자연수 N(3 ≤ N ≤ 999)이 주어진다. 
둘째 줄에는 위치를 찾고자 하는 N2 이하의 자연수가 하나 주어진다.


출력
N개의 줄에 걸쳐 표를 출력한다. 
각 줄에 N개의 자연수를 한 칸씩 띄어서 출력하면 되며, 자릿수를 맞출 필요가 없다. 
N+1번째 줄에는 입력받은 자연수의 좌표를 나타내는 두 정수를 한 칸 띄어서 출력한다.


예제 입력 1 
7
35
예제 출력 1 
49 26 27 28 29 30 31
48 25 10 11 12 13 32
47 24 9 2 3 14 33
46 23 8 1 4 15 34
45 22 7 6 5 16 35
44 21 20 19 18 17 36
43 42 41 40 39 38 37
5 7
'''

import sys

sys.stdin = open('./input.txt')

input = lambda: sys.stdin.readline().rstrip()

n = int(input())
search_num = int(input())
matrix = []

for _ in range(n):
    matrix.append([False] * n)
num = n * n
order_list = ['d', 'r', 'u', 'l']
r, c, o = [0, 0, 0]
s_rc = [0, 0]

while num > 0:
	if order_list[o] == 'd':
		for i in range(n):
			if matrix[i][c] == False:
				matrix[i][c] = str(num)
				if num == search_num:
					s_rc[0] = i + 1
					s_rc[1] = c + 1
				num -= 1
				r = i
			else:
				if i > n/2:
					break
	elif order_list[o] == 'r':
		for j in range(n):
			if matrix[r][j] == False:
				matrix[r][j] = str(num)
				if num == search_num:
					s_rc[0] = r + 1
					s_rc[1] = j + 1
				num -= 1
				c = j
			else:
				if j > n/2:
					break
	elif order_list[o] == 'u':
		for k in range(n-1, -1, -1):
			if matrix[k][c] == False:
				matrix[k][c] = str(num)
				if num == search_num:
					s_rc[0] = k + 1
					s_rc[1] = c + 1
				num -= 1
				r = k
			else:
				if k < n/2:
					break
	elif order_list[o] == 'l':
		for l in range(n-1, -1, -1):
			if matrix[r][l] == False:
				matrix[r][l] = str(num)
				if num == search_num:
					s_rc[0] = r + 1
					s_rc[1] = l + 1
				num -= 1
				c = l
			else:
				if l < n/2:
					break
	o += 1
	o %= 4

matrix_str = list(map(lambda x: " ".join(x), matrix))
print("\n".join(matrix_str))
print(*s_rc)