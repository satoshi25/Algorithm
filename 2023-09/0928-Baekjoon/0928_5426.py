"""
https://www.acmicpc.net/problem/5426
Baekjoon
5426 비밀 편지

문제
선영이는 남자친구를 위해 연애 편지를 썼다. 
선영이는 편지가 남들에게 읽히는 것을 막기 위해서 편지를 암호화하려고 한다.

먼저, 편지의 내용을 정사각형에 작성한다. 그 다음, 시계방향으로 90도 회전시킨다. 
그 다음, 첫 행부터 마지막 행까지 순서대로 다시 편지를 작성한다. 
선영이는 싸이월드 세대이기 때문에, 편지에 띄어쓰기를 쓰지 않는다.

예를 들어, 편지의 내용이 "RosesAreRedVioletsAreBlue"인 경우에, 
암호화한 편지는 "eedARBtVrolsiesuAoReerles" 이 된다.

R o s e s           e e d A R
A r e R e           B t V r o
d V i o l     ->    l s i e s
e t s A r           u A o R e
e B l u e           e r l e s

선영이가 암호화한 편지가 주어졌을 때, 원래 내용을 구하는 프로그램을 작성하시오.


입력
첫째 줄에 테스트 케이스의 개수가 주어진다. 
테스트 케이스의 수는 최대 100개이다.
각 테스트 케이스는 한 줄로 이루어져 있으며, 암호화된 편지가 주어진다. 
편지는 알파벳 소문자와 대문자로만 이루어져 있으며, 
길이는 1보다 크거나 같고, 10,000보다 작거나 같으며, 항상 제곱수이다.


출력
각 테스트 케이스마다 원래 메시지를 출력한다.


예제 입력 1 
3
RSTEEOTCP
eedARBtVrolsiesuAoReerles
EarSvyeqeBsuneMa
예제 출력 1 
TOPSECRET
RosesAreRedVioletsAreBlue
SquaresMayBeEven
"""

import sys

sys.stdin = open("./input.txt")

t_cnt = int(input())


def get_matrix(s):
    l = len(s)
    n = int(l**0.5)

    matrix = []
    i = 0
    for _ in range(n):
        row = []
        for _ in range(n):
            row.append(s[i])
            i += 1
        matrix.append(row)
    return [matrix, n]


def trans_matrix(m_list, n):
    n_list = []
    for i in range(n - 1, -1, -1):
        row = []
        for j in range(n):
            row.append(m_list[j][i])
        n_list.append(row)
    return n_list


def get_password(m_list, n):
    s = ""
    for i in range(n):
        for j in range(n):
            s += m_list[i][j]
    return s


def decode_password(s):
    matrix, n = get_matrix(s)
    m_list = trans_matrix(matrix, n)
    decoded_password = get_password(m_list, n)
    return decoded_password


for _ in range(t_cnt):
    print(decode_password(input()))
