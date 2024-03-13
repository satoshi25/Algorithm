'''
https://www.acmicpc.net/problem/2774
Baekjoon
2774 아름다운 수

문제
윤정이는 뭐든지 아름다운 것이 좋다고 생각한다. 
그래서 윤정이는 사물을 볼 때 자신이 정한 방법으로 아름다운 정도를 평가한다. 
윤정이는 수를 볼 때도 이런 아름다운 수의 정도를 따지는데, 
윤정이에게 있어서 아름다운 수의 정도는 그 수를 이루고 있는 10진수의 서로 다른 숫자의 개수를 의미한다.  
예를 들어 122이라는 수는 1과 2 라는 2개의 숫자로 이루어져 있으므로 아름다운 정도가 2가 된다. 
윤정이의 방법으로 여러 수들의 아름다운 정도를 알아보자.


입력
첫째 줄에는 테스트 케이스의 개수 T가 주어진다. 
다음 줄부터는 아름다운 정도를 알고 싶은 수 X(1 ≤ X ≤ 1000000000)가 주어진다.


출력
각각의 테스트 케이스마다 X의 아름다운 정도를 한 줄에 하나씩 입력으로 주어진 순서대로 출력한다.


예제 입력 1 
2
7
122
예제 출력 1 
1
2
'''

import sys

sys.stdin = open('./input.txt')

input = lambda: sys.stdin.readline().rstrip()

t_cnt = int(input())

for _ in range(t_cnt):
	num_s = input()
	n_list = [False] * 10
	cnt = 0
	for s in num_s:
		if n_list[int(s)] == False:
			n_list[int(s)] = True
			cnt += 1
	print(cnt)