"""
https://www.acmicpc.net/problem/16944
Baekjoon
16944 강력한 비밀번호

문제
큐브러버는 문제가 안 풀릴때 게임을 만들면서 머리속으로 문제를 푸는 법을 생각한다. 
드디어 게임이 완성되었고, 이 게임의 이름은 "리듬 테트리스"이다. 
"리듬 테트리스"는 리듬 게임과 테트리스를 동시에 하는 재미있는 게임이다. 
문제에 여백이 부족해 게임을 할 수 있는 사이트의 링크는 생략한다.

리듬 테트리스를 하려면 먼저 회원 가입을 해야 한다. 
유저는 이메일과 비밀번호를 입력해야 하고, 비밀번호는 아래 규칙을 지켜야 한다.

비밀번호는 알파벳 소문자, 대문자, 숫자, 특수문자로만 이루어져 있다.
비밀번호는 6글자 이상이어야 한다.
숫자는 하나 이상 포함되어야 한다.
알파벳 소문자는 하나 이상 포함되어야 한다.
알파벳 대문자는 하나 이상 포함되어야 한다.
특수 문자는 하나 이상 포함되어야 한다. 
사용할 수 있는 특수 문자는 !@#$%^&*()-+이다.
구사과는 리듬 테트리스를 하기 위해 회원 가입을 하려고 한다. 
문자열 S를 비밀번호로 사용하려고 하지만, 리듬 테트리스의 비밀번호 규칙을 지키지 않을 수도 있다.

문자열 S가 주어졌을 때, 
리듬 테트리스의 비밀번호 규칙을 지키려면 S의 뒤에 추가해야 하는 글자의 최소 개수를 구해보자.


입력
첫째 줄에 문자열의 길이 N(1 ≤ N ≤ 100), 둘째 줄에 문자열 S가 주어진다. 
S는 알파벳 소문자, 대문자, 특수문자(!@#$%^&*()-+), 숫자로만 이루어져 있다.


출력
첫째 줄에 리듬 테트리스의 비밀번호 규칙을 지키기 위해 추가해야 하는 문자의 최소 개수를 출력한다.


예제 입력 1 
7
Koosaga
예제 출력 1 
2

예제 입력 2 
7
koosaga
예제 출력 2 
3

예제 입력 3 
7
k@@saga
예제 출력 3 
2

예제 입력 4 
7
K0@saga
예제 출력 4 
0
"""

import sys

sys.stdin = open("./input.txt")

import re

spe_pass = re.compile("[!@#$%^&*()-+]")
num_pass = re.compile("[0-9]")
up_pass = re.compile("[A-Z]")
low_pass = re.compile("[a-z]")

l = int(input())
s = input()

req_cnt = 0

if not spe_pass.search(s):
    req_cnt += 1
if not up_pass.search(s):
    req_cnt += 1
if not low_pass.search(s):
    req_cnt += 1
if not num_pass.search(s):
    req_cnt += 1

if (l + req_cnt) < 6:
    req_cnt += 6 - (l + req_cnt)

print(req_cnt)