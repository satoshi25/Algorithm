"""
https://www.acmicpc.net/problem/4564
Baekjoon
4564 숫자 카드놀이

문제
맨 앞자리에 앉은 상근이는 수업시간이 아무리 지루해도 딴짓을 할 수가 없다. 
그런데 오늘은 너무 딴짓이 하고 싶다.
공책에 정인이에게 배운 숫자 카드놀이를 하려고 한다.
숫자 카드놀이를 하려면 먼저 자연수 S를 골라야 한다. 
그 다음, 각 자리를 모두 곱하면서 한 자리 수가 나오기 전까지 
계속해서 새로운 수를 만드는 게임이다.

예를 들어, 95로 시작한다면, 9 * 5 = 45를 얻게 된다. 
45도 두 자리 이상이기 때문에, 4 * 5 = 20를 얻게 된다. 
그 다음 2 * 0 = 0 이 되고, 0은 한 자리 숫자이기 때문에 게임은 끝나게 된다.

또, 396에서 시작한다면, 아래와 같은 과정을 거쳐 2로 끝나게 된다.
3 * 9 * 6 = 162 
1 * 6 * 2 = 12 
1 * 2 = 2 
자연수 S가 주어졌을 때, 숫자 카드놀이를 하는 과정을 출력하는 프로그램을 작성하시오.


입력
입력은 여러 테스트 케이스로 이루어져 있다. 
각 테스트 케이스는 숫자 카드놀이의 시작값 S로 이루어져 있다. (1 ≤ S ≤ 100000) 
S는 0으로 시작하지 않으며, 입력의 마지막 줄에는 0이 하나 주어진다.


출력
0이 아닌 입력에 대해서, 숫자 카드놀이가 끝나기 전 까지 나온 수를 공백으로 구분하여 출력한다. 
첫 값은 입력으로 주어진 값이다.


예제 입력 1 
95
396
28
4
40
0
예제 출력 1 
95 45 20 0
396 162 12 2
28 16 6
4
40 0
"""

import sys

sys.stdin = open("./input.txt")

input = lambda: sys.stdin.readline().rstrip()


def get_one_digit(num):
    n_list = []
    while len(num) != 1:
        n_list.append(num)
        result = 1
        for c in num:
            result *= int(c)
        num = str(result)
    n_list.append(num)
    return " ".join(n_list)


while True:
    cur = input()
    if cur == "0":
        break
    print(get_one_digit(cur))
