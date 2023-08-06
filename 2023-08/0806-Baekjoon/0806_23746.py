"""
https://www.acmicpc.net/problem/23746
Baekjoon 
23746 문자열 압축 해제

문제
특정 소문자 문자열 패턴을 대문자 한 글자로 압축하는 프로그램 
SPC(String Pattern Compressor)가 있다.

예를 들어, 다음과 같은 방법으로 압축하는 경우, “aabbaaac”는 “ABAC”로 압축된다.

| 소문자 문자열 패턴 | 대문자 |
|       aa       |  A  |
|       bba      |  B  |
|       c        |  C  |

압축 프로그램과 압축된 문자열이 주어지면, 압축되기 전 
문자열의 일부를 출력하는 프로그램을 작성하시오.


입력
첫 번째 줄에 압축 방법의 개수 N이 주어진다. (1≤ N ≤26)
두 번째 줄부터 N개의 줄에 소문자 문자열 패턴과 대응되는 대문자가 공백으로 구분되어 주어진다. 
각 소문자 문자열 패턴의 길이는 1,000을 넘지 않으며, 같은 대문자는 두 번 이상 주어지지 않는다.
N+1번째 줄에 압축된 문자열이 주어진다. 
압축된 문자열 길이는 1,000을 넘지 않는다.
마지막 줄에 두 정수 S와 E가 주어진다. (1 ≤ S ≤ E ≤ (압축되기 전 문자열 길이))


출력
압축되기 전 문자열의 S번째 문자에서 E번째 문자까지 출력한다.


예제 입력 1
3
aa A
bba B
c C
ABAC
4 6
예제 출력 1
baa


예제 입력 2
5
abcde A
abcde B
abcde C
abcde D
abcde E
ABCDE
1 25
예제 출력 2
abcdeabcdeabcdeabcdeabcde


예제 입력 3
4
e E
f F
g G
h H
EEEFEEE
4 5
예제 출력 3
fe
"""

import sys

sys.stdin = open("./input.txt")

cnt_dics = int(input())
str_dics = {}

for i in range(cnt_dics):
    low, up = input().split(" ")
    str_dics[up] = low

str_pass = input()
s, e = map(int, input().split())

solved_pass = ""
for code in str_pass:
    solved_pass += str_dics[code]

print(solved_pass[s - 1 : e])
