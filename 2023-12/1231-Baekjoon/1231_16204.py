'''
https://www.acmicpc.net/problem/16204
Baekjoon
16204 카드 뽑기

문제
앞 면에 O와 X가 적혀있는 카드 N개가 있다. 
N개의 카드 중 M개의 카드의 앞면에는 O가 한 개 적혀있고, 
나머지 N-M개의 카드의 앞면에는 X가 한 개 적혀있다. 
카드의 뒷 면은 두 종류의 카드 모두 같은 모양이라 구분할 수 없다.

카드의 뒷 면에 O나 X를 하나씩 적으려고 한다. 
이 때, O는 K개, X는 N-K개 적으려고 한다.

앞 면과 뒷 면에 같은 모양이 적혀있는 카드의 최대 개수를 구하는 프로그램을 작성하시오.


입력
첫째 줄에 N, M, K가 주어진다. (1 ≤ N ≤ 1,000,000, 0 ≤ M, K ≤ N)


출력
첫째 줄에 앞 면과 뒷 면에 같은 모양이 적혀있는 카드의 최대 개수를 출력한다.


예제 입력 1 
4 3 2
예제 출력 1 
3

예제 입력 2 
10 0 10
예제 출력 2 
0

예제 입력 3 
5 3 3
예제 출력 3 
5

예제 입력 4 
7 5 2
예제 출력 4 
4
'''

import sys

sys.stdin = open('./input.txt')

input = lambda: sys.stdin.readline().rstrip()

n, fo, bo = list(map(int, input().split()))

fx = n - fo
bx = n - bo
o_cnt = fo if fo <= bo else bo
x_cnt = fx if fx <= bx else bx

print(o_cnt + x_cnt)


