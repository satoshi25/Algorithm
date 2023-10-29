"""
https://www.acmicpc.net/problem/14915
Baekjoon
14915 진수 변환기

문제
정수 m, n을 입력 받아, 10진수 m을 n진수로 바꾸어 출력하는 프로그램을 작성하시오.


입력
첫 줄에서 정수 m, n을 입력 받는다. (0 ≤ m ≤ 1,000,000, 2 ≤ n ≤ 16)


출력
변환한 n진수의 수를 출력한다. 
11~16 진수의 경우 10 이상의 수는 A~F 문자를 사용한다. 
예를 들어, 10은 A, 11은 B, 12는 C, 13은 D, 14는 E, 15는 F를 사용한다.


예제 입력 1 
8 2
예제 출력 1 
1000

예제 입력 2 
15 4
예제 출력 2 
33

예제 입력 3 
248 16
예제 출력 3 
F8
"""

import sys

sys.stdin = open("./input.txt")

m, n = map(int, input().split())
n_dic = {"10": "A", "11": "B", "12": "C", "13": "D", "14": "E", "15": "F"}
num_str = []
while m >= n:
    q, r = divmod(m, n)
    if r > 9:
        num_str.append(n_dic[str(r)])
    else:
        num_str.append(str(r))
    m = q
if m > 9:
    num_str.append(n_dic[str(m)])
else:
    num_str.append(str(m))
print("".join(num_str[::-1]))
