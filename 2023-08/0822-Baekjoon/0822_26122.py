"""
https://www.acmicpc.net/problem/26122
Baekjoon
26122 가장 긴 막대 자석


문제
막대 자석 문자열은 문자 N과 S로만 구성되면서 다음과 같은 조건을 만족하는 문자열이다: 
막대 자석 문자열에 등장하는 N의 개수와 S의 개수는 동일하며, 
문자열의 앞쪽 절반을 구성하는 문자는 모두 N이거나 모두 S이다. 
예를 들어, NS, NNSS, SSSNNN 등은 막대 자석 문자열이지만, 
SNS, NNNSS, NSNS 등은 막대 자석 문자열이 아니다.

윤이는 문자 N과 S로 구성된 문자열을 가지고 있다. 
윤이는 이 문자열의 부분 문자열 중에서 가장 긴 막대 자석 문자열을 찾고자 한다. 
부분 문자열이란 문자열의 연속된 일부를 의미한다. 
윤이가 주어진 문자열의 부분 문자열 중에서 찾을 수 있는 
가장 긴 막대 자석 문자열의 길이는 얼마인지 구하시오.


입력
첫 번째 줄에 문자열의 길이 K가 주어진다. (1 <= K<= 300,000)
두 번째 줄에 문자 N과 S로만 구성된 길이 K의 문자열이 주어진다.


출력
주어진 문자열의 부분 문자열 중에서 가장 긴 막대 자석 문자열의 길이를 출력한다. 
만약 막대 자석 문자열을 찾을 수 없다면, 대신 0을 출력한다.


예제 입력 1 
8
NSSSNNSN
예제 출력 1 
4

예제 입력 2 
5
NNNNN
예제 출력 2 
0
"""

import sys

sys.stdin = open("./input.txt")

s_len = int(input())

magnetic = input()

cur = {
    "S": 0,
    "N": 0,
}
cnt, pre = 0, ""

for i, m in enumerate(magnetic, 0):
    if m != pre:
        cur[m] = 0
    cur[m] += 1
    if cur["N"] != 0 and cur["S"] != 0:
        if cur["N"] < cur["S"]:
            if cur["N"] >= cnt:
                cnt = cur["N"]
        else:
            if cur["S"] >= cnt:
                cnt = cur["S"]
    pre = m

print(cnt * 2)
