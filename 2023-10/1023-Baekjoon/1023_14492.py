"""
https://www.acmicpc.net/problem/14492
Baekjoon
14492 부울행렬의 부울곱

문제
문제를 출제하던 욱제는 갑자기 괴랄한 문제를 내고 싶어졌다. 
불행하게도, 이번 대회에는 프로그래밍 뉴비들이 많기 때문에 그럴 수는 없었다. 
하지만 욱제는 신입생들을 괴롭히고픈 욕망을 포기할 수 없었다.

‘하하! 과연 신입생들이 이 문제를 풀 수 있을까?’

문제는 간단하다. N×N 크기의 두 부울행렬(0과 1로만 이루어진 행렬) 
A=[aij]와 B=[bij]가 주어졌을 때, 두 행렬에 대해 
부울곱 연산을 수행한 행렬 C=[cij]에 나타나는 1의 개수를 세는 것이다. 
부울곱 연산은 아래와 같이 수행된다.

cij = (ai1∧b1j)∨(ai2∧b2j)∨...∨(ain∧bnj)

xij는 X행렬의 i행j열 원소를 뜻하며 ∧는 논리곱(AND), ∨는 논리합(OR) 연산을 나타낸다. 
자, 어서 코딩하자!


입력
첫째 줄에 행렬의 크기 N(1 ≤ N ≤ 300)이 주어진다. 
이후 N개의 줄에 N×N의 부울행렬 A=[aij]와, 
다음 N개의 줄에 N×N의 부울행렬 B=[bij]가 주어진다.


출력
A☉B를 연산한 행렬 C에서 나타나는 1의 개수를 세어서 출력한다.


예제 입력 1 
3
1 1 0
0 1 0
0 0 1
1 0 0
1 1 1
0 0 1
예제 출력 1 
7

예제 입력 2 
2
0 1
1 1
1 1
0 0
예제 출력 2 
2
"""

import sys

sys.stdin = open("./input.txt")

size = int(input())
matrix_A = []
matrix_B = []
cnt = 0

for i in range(size * 2):
    if i < size:
        matrix_A.append(input().split())
    else:
        matrix_B.append(input().split())

for i in range(size):
    for j in range(size):
        for k in range(size):
            if matrix_A[i][k] == "1" and matrix_B[k][j] == "1":
                cnt += 1
                break

print(cnt)
