"""
https://www.acmicpc.net/problem/10407
Baekjoon
10407 2 타워

문제
2 타워의 높이 H는
     2
  ...
 2
2
에서 숫자 2가 나타나는 횟수로 정의된다. 
2 타워의 값은 해당 표현식의 값으로 정의된다. 
예를 들어, 높이 1의 2 타워 값은 2이고, 높이 2의 2 타워 값은 4이며, 높이 4의 2 타워 값은
2^{2^{2^{2}}} = 65536
이므로 높이 5의 2 타워 값은 265536이며 
이 값은 2003...6736이고 다 쓰기에는 여백이 부족하다.
H의 값이 커짐에 따라 2 타워의 값이 너무 커지므로, 
우리는 이 값을 3으로 나눈 나머지만이 궁금하다.


입력
입력의 첫째 줄에 높이 H가 주어진다. (1 ≤ H ≤ 10100)


출력
첫째 줄에 높이가 H인 2 타워의 값을 3으로 나눈 나머지를 출력하라.


예제 입력 1 
1
예제 출력 1 
2

예제 입력 2 
2
예제 출력 2 
1

예제 입력 3 
99999999999999999999
예제 출력 3 
1
"""

import sys

sys.stdin = open("./input.txt")

n = int(input())

if n < 2:
    print(2)
else:
    print(1)
