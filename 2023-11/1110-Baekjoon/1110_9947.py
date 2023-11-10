"""
https://www.acmicpc.net/problem/9947
Baekjoon
9947 Coin tossing

문제
When I was at school, many, many years ago, 
we used to play a simple game involving tossing a coin. 
The first player would call "heads" or "tails", 
the second would toss the coin. 
The first player gained a point for every correct call, 
the second player gained one for every incorrect call. 
When we got bored, we added up the scores!


입력
Input for this problem will consist of a number of games. 
Each game will begin with a line containing 2 names of no more than 
20 letters each and separated by a space. 
The second line of each game will contain a single positive integer, 
n, specifying the number of recorded coin tosses (0 < n <= 1000). 
n coin tosses follow, each on a single lines containing 2 characters 
(either 'H' or 'T' – "heads" or "tails"), separated by a space. 
The first character denotes the call and the second denotes the result. 
Input will be terminated by a line containing just # #.


출력
Output will be one line for each game. 
The line will give the name of the first player 
(as recorded in the input), followed by the first player's score, 
followed by the name of the second player, 
followed by the second player's score. 
Entries on a line will be separated by a single space.


예제 입력 1 
Sally John
5
H H
H T
H H
T T
T H
Eloise Ahmed
4
H T
T T
H H
T H
# #
예제 출력 1 
Sally 3 John 2
Eloise 2 Ahmed 2
"""

import sys

sys.stdin = open("./input.txt")

input = lambda: sys.stdin.readline().rstrip()

while True:
    player1, player2 = input().split()
    if player1 == "#":
        break
    cnt = int(input())
    score1, score2, i = 0, 0, 0
    while i < cnt:
        call, result = input().split()
        if call == result:
            score1 += 1
        else:
            score2 += 1
        i += 1
    print(f"{player1} {score1} {player2} {score2}")
