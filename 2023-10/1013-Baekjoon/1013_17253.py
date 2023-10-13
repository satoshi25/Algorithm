"""
https://www.acmicpc.net/problem/17253
Baekjoon
17253 삼삼한 수 2

문제
준하는 3의 거듭제곱인 수만 사용하여 만들 수 있는 수를 보면 삼삼한 느낌을 받는다.
이 느낌을 정확히 설명하자면, 3의 거듭제곱인 수들을 겹치지 않고 한번씩만 더해서 
어떤 수 x를 만들 수 있다면 그 수는 삼삼하다고 한다. 
삼삼한 수는 3의 거듭제곱인 수가 반드시 하나 이상 포함되어야 한다.
예를 들어, 109는 30+33+34로 나타낼 수 있으므로 삼삼한 수이다. 
하지만 7과 18은 삼삼하지 않다.
준하는 삼삼한 수가 얼마나 더 있는 지 알아보려고 한다.


입력
첫째 줄에 9,223,372,036,854,775,807보다 작거나 같은 음이 아닌 정수 N이 입력된다.


출력
입력된 수가 삼삼하다면 YES, 그렇지 않다면 NO를 출력한다.


예제 입력 1 
109
예제 출력 1 
YES

예제 입력 2 
298
예제 출력 2 
NO
"""

import sys

sys.stdin = open("./input.txt")

n = int(input())
answer = "NO"
if n <= 3:
    if n == 1 or n == 3:
        answer = "YES"
    print(answer)
else:
    i = 1
    nums = [1]
    while True:
        cur = 3**i
        if cur > n:
            i -= 1
            break
        nums.append(cur)
        i += 1
    while n > 0 and i >= 0:
        if n >= nums[i]:
            n -= nums[i]
        i -= 1
    if n == 0:
        answer = "YES"
    print(answer)
