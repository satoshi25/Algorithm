"""
https://www.acmicpc.net/problem/27111
Baekjoon
27111 출입 기록

문제
위병소에서 근무하는 헌병은 오늘 근무를 끝마치고 보안 점검을 위해 출입 기록을 살펴보던 중, 
오늘 출입 기록의 일부가 누락되었다는 사실을 깨달았다!

오늘 기록된 출입 기록은 총 N개이며, 출입 기록은 반드시 출입자가 출입한 시간순으로 기록된다.

i번째 출입 기록은 두 개의 정수 ai, bi 로 기록되는데, ai는 출입하는 사람의 번호를 의미하며,
bi가 1이면 부대로 들어갔다는 뜻이고 bi가 0이면 부대에서 나왔다는 뜻이다. 
또한, 출입 기록을 시작하기 전과 출입 기록을 끝낸 후에는 부대 내에 아무도 없었다고 한다.

오늘의 출입 기록을 토대로 오늘 하루동안 누락된 출입 기록의 최소 개수를 구하여라.


입력
첫 번째 줄에 출입 기록의 개수 N이 주어진다. (1 ≤ N ≤ 200,000)

두 번째 줄부터 N+1번째 줄까지, 
i번째 출입 기록을 나타내는 정수 ai와 bi가 공백으로 구분되어 주어진다.
(1 ≤ ai ≤ 200,000; 0 ≤ bi ≤ 1)

출력
오늘 하루 동안 누락된 출입 기록의 최소 개수를 출력한다.

예제 입력 1 
8
1 1
2 1
1 1
4 1
3 0
5 1
4 0
1 0
예제 출력 1 
4

예제 입력 2 
4
100 1
345 1
345 0
100 0
예제 출력 2 
0
"""

import sys

sys.stdin = open("./input.txt")

input = lambda: sys.stdin.readline().rstrip()

log_cnt = int(input())
log_dict = {}
lose_cnt = 0

for _ in range(log_cnt):
    num, in_out = map(int, input().split())
    if (in_out == 0 and log_dict.get(num) == None) or (
        in_out == 1 and log_dict.get(num) == 1
    ):
        lose_cnt += 1
    else:
        if log_dict.get(num) == None and in_out == 1:
            log_dict[num] = in_out
        elif log_dict.get(num) == 1 and in_out == 0:
            del log_dict[num]
        else:
            log_dict[num] = in_out
p_cnt = len(log_dict.keys())
print(lose_cnt + p_cnt)
