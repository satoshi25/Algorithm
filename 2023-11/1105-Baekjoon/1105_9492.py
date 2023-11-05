"""
https://www.acmicpc.net/problem/9492
Baekjoon
9492 Perfect Shuffle

문제
A Perfect Shuffle of a deck of cards is executed by dividing the deck 
exactly in half, and then alternating cards from the two halves, 
starting with the top half. 

---------------           ---------------            ---------------
|      A      |           |      A      |            |      A      |
---------------           ---------------            ---------------
|      B      |           |      B      |            |      D      |
---------------           ---------------            ---------------
|      C      |     ->    |      C      |     ->     |      B      |
---------------           ---------------            ---------------
|      D      |                                      |      E      |
---------------           ---------------            ---------------
|      E      |           |      D      |            |      C      |
---------------           ---------------            ---------------
                          |      E      |
                          ---------------

Given a deck of cards, perform a Perfect Shuffle. 
If there is an odd number of cards, 
give the top half split one more card than the bottom half.


입력
There will be several test cases in the input. 
Each test case will begin with a line with a single integer n 
(1≤n≤1,000), 
indicating the number of cards. 
On each of the next n lines will be a string 
from 1 to 80 characters in length, which is the name of a card. 
It will contain only capital letters and dashes. 
Within a test case, all card names will be unique. 
Input will end with a line with a single 0.


출력
For each test case, output n lines, 
consisting of the deck after a perfect shuffle. 
Output no extra spaces. 
Do not print a blank line between answers.


예제 입력 1 
4
ACE
KING
QUEEN
JACK
5
SKIP
DRAW-TWO
REVERSE
WILD
WILD-DRAW-FOUR
0
예제 출력 1 
ACE
QUEEN
KING
JACK
SKIP
WILD
DRAW-TWO
WILD-DRAW-FOUR
REVERSE
"""

import sys

sys.stdin = open("./input.txt")

input = lambda: sys.stdin.readline().rstrip()

i = 0
limit = 0
c_list = []


def shuffle(c_list):
    cnt = len(c_list)
    t_list = []
    if cnt % 2 == 1:
        a_list = c_list[: cnt // 2 + 1]
        b_list = c_list[cnt // 2 + 1 :]
        for i in range(cnt // 2):
            t_list.append(a_list[i])
            t_list.append(b_list[i])
        t_list.append(a_list[-1])
    else:
        a_list = c_list[: cnt // 2]
        b_list = c_list[cnt // 2 :]
        for i in range(cnt // 2):
            t_list.append(a_list[i])
            t_list.append(b_list[i])
    return t_list


while True:
    cur = input()
    if cur.isdigit():
        if i != 0:
            print("\n".join(shuffle(c_list)))
            c_list = []
        if cur == "0":
            break
        limit = int(cur)
    else:
        c_list.append(cur)
    i += 1
