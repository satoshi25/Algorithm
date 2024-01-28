'''
https://www.acmicpc.net/problem/4388
Baekjoon
4388 받아올림

문제
어린이에게 여러자리 숫자의 덧셈을 가르칠 때는 
오른쪽 자리부터 왼쪽으로 하나씩 계산하는 방법을 가르쳐준다. 
이때, 받아올림이 발생하게 되며 아이들은 여기서 혼란에 빠진다.

받아올림이란 영어로는 carry라고 하며, 
한 자리를 더했을 때, 두 자리라면, 1을 왼쪽 자리로 올려주는 것을 뜻한다.

두 수가 주어졌을 때, 이러한 받아올림이 몇 번 발생하는지 구하는 프로그램을 작성하시오.


입력
입력은 여러 개의 테스트 케이스로 이루어져 있다. 
각 테스트 케이스는 10자리 이내의 양의 정수 또는 0이 주어진다. 
입력의 마지막 줄에는 0 0이 있다.


출력
각 테스트 케이스에 대해서, 입력으로 주어진 두 수를 더할때 나오는 받아올림의 개수를 출력한다.


예제 입력 1 
123 456
555 555
123 594
0 0
예제 출력 1 
0
3
1
'''

import sys

sys.stdin = open('./input.txt')

input = lambda: sys.stdin.readline().rstrip()

while True:
	a, b = input().split()
	if a == '0' and b == '0':
		break
	m_len = len(a) if len(a) >= len(b) else len(b)
	a = (m_len - len(a)) * '0' + a
	b = (m_len - len(b)) * '0' + b
	cnt = 0
	ten = 0
	for i in range(m_len-1, -1, -1):
		if int(a[i]) + int(b[i]) + ten >= 10:
			ten = 1
			cnt += 1
		else:
			ten = 0
	print(cnt)
