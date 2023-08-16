"""
https://www.acmicpc.net/problem/1212
Baekjoon
1212 8진수 2진수

문제
8진수가 주어졌을 때, 2진수로 변환하는 프로그램을 작성하시오.

입력
첫째 줄에 8진수가 주어진다. 주어지는 수의 길이는 333,334을 넘지 않는다.

출력
첫째 줄에 주어진 수를 2진수로 변환하여 출력한다. 
수가 0인 경우를 제외하고는 반드시 1로 시작해야 한다.

예제 입력 1 
314
예제 출력 1 
11001100
"""

# 1번
ten, two = [int(input(), 8), []]

while ten != 0:
    quo, re = divmod(ten, 2)
    ten = quo
    two.append(str(re))

print("".join(two[::-1]))

# 2번
print(bin(int(input(), 8))[2:])
