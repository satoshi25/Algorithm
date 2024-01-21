'''
https://www.acmicpc.net/problem/5613
Baekjoon
5613 계산기 프로그램

문제
덧셈, 뺄셈, 곱셈, 나눗셈을 할 수 있는 계산기 프로그램을 만드시오.


입력
입력의 각 줄에는 숫자와 +, -, *, /, =중 하나가 교대로 주어진다. 
첫 번째 줄은 수이다. 
연산자의 우선 순위는 생각하지 않으며, 
입력 순서대로 계산을 하고, =가 주어지면, 그때까지의 결과를 출력한다. 
주어지는 수는 108 이하의 양의 정수이다. 
계산 중 결과는 0 또는 음수가 될 수 있지만, -108 ~ 108 범위를 넘지는 않는다. 
또, 나눗셈에서 소수점은 버린다. 
따라서, 100/3*3 = 99이다.

피제수가 음수일 때 나눗셈을 하는 경우는 입력으로 주어지지 않는다.


출력
첫째 줄에 계산 결과를 출력한다.


예제 입력 1 
1
+
1
=
예제 출력 1 
2

예제 입력 2 
10
-
21
*
5
=
예제 출력 2 
-55

예제 입력 3 
100
/
3
*
3
=
예제 출력 3 
99
'''

import sys
import re

sys.stdin = open('./input.txt')

input = lambda: sys.stdin.readline().rstrip()
oper = re.compile('[\+,\-,\*,\/]')
op, result = ['', 0]


def calculate(a, b, o):
    if o == '+':
        return a + b
    elif o == '-':
        return a - b
    elif o == '*':
        return a * b
    elif o == '/':
        if a < 0 or b < 0:
            return 0
        return a // b


while True:
    cur = input()
    if cur == '=':
        break
    is_oper = oper.search(cur)
    if is_oper:
        op = cur
    else:
        if op == '':
            result = int(cur)
        else:
            result = calculate(result, int(cur), op)

print(result)