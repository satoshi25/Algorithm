"""
https://www.acmicpc.net/problem/17285
Baekjoon
17285 XORChic

문제
범기가 영수의 파일에 XOR 연산을 수행해버렸다!

영수의 파일은 문자열 S를 담고 있었고, 문자열 S는 알파벳 대문자로만 구성되어 있었다. 
파일에 XOR 연산을 수행하면, 파일이 담고 있는 문자열의 모든 문자에 대해서 
XOR 연산이 수행되어 파일 내용이 변경된다.

XOR 연산을 사용하려면, key가 필요하다. S = "ABCD", key = 10인 경우라면, 
XOR 연산을 수행한 문자열은 "KHIN"이 되어버린다. 
"A"의 아스키 코드는 65이고, 여기에 10과 XOR 연산을 수행하면 결과는 75가 된다. 
아스키 코드로 75는 "K"이기 때문에, "A"는 "K"로 암호화 되고, 
나머지 문자도 이와 같은 방식을 사용한다.

영수는 파일을 복호화하려고 하지만, 사용된 key의 값을 모르고 있다. 
파일의 처음 8글자가 "CHICKENS"로 항상 시작한다는 정보를 알고 있을 때, 
원래 파일로 복호화할 수 있을까?


입력
첫째 줄에 XOR 연산이 수행된 문자열 T가 주어진다. (10 ≤ T의 길이 ≤ 100)

문자열 T는 출력 가능한 문자(Printable character)로만 이루어져 있다.


출력
첫째 줄에 XOR 연산이 수행되기 이전의 문자열 S를 출력한다.


예제 입력 1 
U^_U]SXEPYDS@SDOB^_XQ
예제 출력 1 
CHICKENSFOREVERYTHING
"""

import sys

sys.stdin = open("./input.txt")

input = lambda: sys.stdin.readline().rstrip()
k = "CHICKEN"


def get_key(code, info):
    ascii_a = ord(code)
    ascii_b = ord(info)
    return ascii_a ^ ascii_b


def get_code(code, key):
    s = ""
    for c in code:
        ascii_c = ord(c)
        s += chr(ascii_c ^ key)
    return s


pw = input()

key = get_key(pw[0], k[0])
result = get_code(pw[7:], key)
print(k + result)
