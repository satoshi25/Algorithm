'''
https://www.acmicpc.net/problem/1356
Baekjoon
1356 유진수

문제
유진수는 어떤 수를 10진수로 표현한 뒤 그 수를 두 부분으로 나눴을 때, 
앞부분 자리수의 곱과 뒷부분 자리수의 곱이 같을 때를 말한다.

예를 들어, 1221은 유진수이다. 
12와 21로 나눴을 때, 앞부분 자리수의 곱 1*2는 뒷부분 자리수의 곱 2*1과 같기 때문이다. 
1236도 마찬가지로 유진수이다. 
하지만, 1234는 아니다. 
수를 나눌 때 항상 연속된 자리수를 나눠야하고, 각 부분에 적어도 한자리는 있어야 한다.

예를 들어, 12345는 총 4가지 방법으로 나눌 수 있다. 
1-2345, 12-345, 123-45, 1234-5 어떤 수 N이 주어질 때, 
이 수가 유진수인지 아닌지 구하는 프로그램을 작성하시오.


입력
첫째 줄에 수 N이 주어진다. 
이 수는 2,147,483,647보다 작거나 같은 자연수이다.


출력
첫째 줄에 N이 유진수이면 YES, 아니면 NO를 출력한다.


예제 입력 1 
1236
예제 출력 1 
YES

예제 입력 2 
1
예제 출력 2 
NO

예제 입력 3 
1221
예제 출력 3 
YES

예제 입력 4 
4729382
예제 출력 4 
NO

예제 입력 5 
42393338
예제 출력 5 
YES
'''

import sys

sys.stdin = open('./input.txt')

input = lambda: sys.stdin.readline().rstrip()

num = list(input())
t_m = 1
m_list = []
ujin_num = 'NO'
zero_cnt = 0

if len(num) > 1:
    for n in num:
        if n == '0':
            zero_cnt += 1
        t_m *= int(n)
        m_list.append(t_m)
    if zero_cnt > 0:
        if zero_cnt != 1:
            ujin_num = 'YES'
    else:
        for m in m_list:
            if t_m // m == m:
                ujin_num = 'YES'
                break

print(ujin_num)

