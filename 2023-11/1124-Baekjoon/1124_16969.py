"""
https://www.acmicpc.net/problem/16969
Baekjoon
16969 차량 번호판 2

문제
상도시의 차량 번호판 형식이 주어졌을 때, 가능한 차량 번호판의 개수를 구해보자.

번호판에 사용할 수 있는 숫자는 0, 1, 2, ..., 8, 9이다.
사용할 수 있는 문자는 a, b, c, d, ..., y, z이다.
차량 번호판의 형식은 최대 1,000,000글자이고, c와 d로 이루어진 문자열로 나타낼 수 있다.
c는 문자가 위치하는 자리, d는 숫자가 위치하는 자리이다.
같은 문자 또는 숫자가 연속해서 2번 나타나면 안 된다.
예를 들어, 형식이 "cd"이면, a1, d4, h5, k4 등이 가능하다. 
형식이 "dd"인 경우에 01, 10, 34, 69는 가능하지만, 
00, 11, 55, 66은 같은 숫자가 2번 연속해서 불가능하다.


입력
첫째 줄에 차량 번호판의 형식이 주어진다. 
형식은 길이가 1,000,000보다 작거나 같으며, c와 d로만 이루어져 있다.


출력
첫째 줄에 가능한 차량 번호판의 개수를 1,000,000,009로 나눈 나머지를 출력한다.


예제 입력 1 
dd
예제 출력 1 
90

예제 입력 2 
cc
예제 출력 2 
650

예제 입력 3 
dcdd
예제 출력 3 
23400

예제 입력 4 
ccdccccdcdddcdcdcccdcc
예제 출력 4 
978919018
"""

import sys

sys.stdin = open("./input.txt")

order = input()
p_cnt = 1
c_repeated, d_repeated = 0, 0

for i in order:
    if i == "c":
        d_repeated = 0
        c_repeated += 1
        if c_repeated > 1:
            p_cnt *= 25
        else:
            p_cnt *= 26
    else:
        d_repeated += 1
        c_repeated = 0
        if d_repeated > 1:
            p_cnt *= 9
        else:
            p_cnt *= 10
    p_cnt %= 1000000009

print(p_cnt)
