'''
https://www.acmicpc.net/problem/8949
Baekjoon
8949 대충 더해

문제
강민이는 동생 희주를 위해 수학 문제를 만들고 있다. 
희주는 매일 연습하고 열심히 공부했지만, 아직도 더하기를 끝내지 못했다.

숫자를 더할 때, 오른쪽부터 왼쪽으로 가면서 숫자를 하나씩 더한다. 
그런데 희주는 귀찮아서 "받아 올림"을 하지 않고 그냥 두 숫자의 합을 적어버린다.

예를 들면, 희주는 숫자 123과 2495를 아래와 같이 더한다.

       1  2  3 
 +  2  4  9  5 
----------------
    2  5 11  8
그래서 답을 적을 때 25118을 적는 것이었다.

만약 모든 숫자를 다 이렇게 더한다면 결과가 어떻게 나오는 지 프로그램으로 작성하시오.


입력
두 정수 A, B가 공백을 두고 주어진다. 
A와 B는 1과 1,000,000 사이의 정수이다.


출력
희주 방식대로 더한 결과를 출력한다.


예제 입력 1 
512 444
예제 출력 1 
956

예제 입력 2 
123 2495
예제 출력 2 
25118

예제 입력 3 
99999 99999
예제 출력 3 
1818181818
'''

import sys

sys.stdin = open('./input.txt')

input = lambda: sys.stdin.readline().rstrip()

a, b = input().split()
min_len = 0
sum_list = ['']
r_list = []
if len(a) <= len(b):
	min_len = len(a)
	sum_list = sum_list * len(a)
	r_list = list(b[:len(b) - len(a)])
else:
	min_len = len(b)
	sum_list = sum_list * len(b)
	r_list = list(a[:len(a) - len(b)])

idx = min_len
for i in range(min_len):
	sum_list[-(i+1)] = int(a[-(i+1)]) + int(b[-(i+1)])

sum_list = list(map(str, r_list + sum_list))
print("".join(sum_list))



