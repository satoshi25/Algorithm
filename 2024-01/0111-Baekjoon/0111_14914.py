'''
https://www.acmicpc.net/problem/14914
Baekjoon
14914 사과와 바나나 나눠주기

문제
아름이는 친구들과 사과와 바나나를 많이 가지고 있지만, 
과일을 좋아하지 않아서 자신의 분량을 남겨두지 않고 친구들에게 모두 나누어 준다. 
아름이는 항상 공평하게 사과와 바나나를 나누어 주며, 절대 잘라서 주지 않는다.

예를 들어, 사과 8개와 바나나 4개를 가지고 있다면, 
공평하게 나누어 주는 방법은 다음과 같이 3가지 경우 밖에 없다.

한 친구가 사과 8개와 바나나 4개를 모두 받는다.
두 친구가 각각 사과 4개와 바나나 2개씩을 받는다.
네 친구가 각각 사과 2개와 바나나 1개씩을 받는다.
아름이가 나누어 줄 수 있는 모든 경우를 출력하는 함수를 작성하시오.


입력
첫째 줄에 사과의 개수 a와 바나나의 개수 b가 주어진다. (1 ≤ a, b ≤ 1,000)


출력
아름이가 나누어 줄 수 있는 경우를 모두 출력해야 하며, 
각 경우마다 친구의 수, 사과 개수, 바나나 개수 차례로 한 줄에 각각 빈칸으로 구분하여 출력한다. 
각 경우마다 중복없이 한 번만 출력되어야 하며, 경우의 순서는 친구의 수가 증가하는 순으로 한다.


예제 입력 1 
4 8
예제 출력 1 
1 4 8
2 2 4
4 1 2
'''

import sys

sys.stdin = open('./input.txt')

input = lambda: sys.stdin.readline().rstrip()

a, b = map(int, input().split())

def get_gcd(a, b):
	while b != 0:
		t = a % b
		a = b
		b = t
	return a

g = get_gcd(a, b)
f_list = []

for i in range(1, g+1):
	if g % i == 0:
		f_list.append(i)
		
if not g in f_list:
	f_list.append(g)

for f in f_list:
	print(f"{f} {a // f} {b // f}")