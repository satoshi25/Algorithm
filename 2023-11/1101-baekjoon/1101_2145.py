"""
https://www.acmicpc.net/problem/2145
Baekjoon
2145 숫자 놀이

문제
초등학생인 도겸이는 숫자를 좋아한다. 
어느 날 도겸이는 숫자 책을 보다가 간단한 놀이를 하나 생각해냈다. 
숫자 놀이의 규칙은 다음과 같다.

주어진 숫자의 각 자릿수를 더한다.
결과가 한 자릿수가 될 때 까지 규칙1을 반복한다.
예를들어, 숫자 673에 규칙을 적용해보면 결과는 7이 된다 
6 + 7 + 3 = 16, 1 + 6 = 7 

도겸이는 당신과 함께 숫자놀이를 하고싶어한다. 
도겸이가 주는 숫자들을 풀어보자.


입력
각 줄에 숫자 N이 주어진다. 
N은 100,000보다 작은 양의 정수이다. 
마지막 입력은 0이며, 0에 대한 결과는 출력하지 않는다.


출력
한 줄에 하나씩 한 자릿수 결과를 출력한다.


예제 입력 1 
673
51
1000
99
0
예제 출력 1 
7
6
1
9
"""

import sys

sys.stdin = open("./input.txt")

input = lambda: sys.stdin.readline().rstrip()

result = []
while True:
    cur = input()
    if cur == "0":
        break
    while len(cur) != 1:
        cur = str(sum(map(int, list(cur))))
    result.append(cur)

print("\n".join(result))
