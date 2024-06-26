"""
https://www.acmicpc.net/problem/15813
Baekjoon
15813 너의 이름은 몇 점이니?

문제
소윤이는 성필이에게 단단히 화가 났다. 
성필이가 자꾸 소윤이의 이름을 놀리는 것이다!

극대노한 소윤이는 이름에 대해 많은 검색을 하던 도중 "이름점수"라는 것을 발견하게 된다. 
이름 점수란, 알파벳 하나하나에 점수가 있고 
이름에 들어가는 모든 알파벳 점수를 합한 것이라고 한다. 
예를 들어 이름이 SUNG PIL 이라면,

A = 1점
B = 2점
C = 3점
...
Z = 26점인 점수판에 따라 
S(19)+U(21) + N(14) + G(7) + P(16) + I(9) + L(12) = 98점이다.
(즉, 점수는 알파벳 순서이다) 

소윤이는 SO YOON이므로 
S(19) + O(15) + Y(25) + O(15) + O(15) + N(14) = 103점으로 
성필이보다 "이름점수"가 높았다! 
그 사실을 알아챈 소윤이는 성필이에게 자신이 "이름점수"가 더 높다는 것을 전했고 
성필이는 아직 충격에서 헤어나오지 못했다고 한다.

이제 소윤이는 사람의 이름을 볼 때 마다 "이름점수"를 계산해본다. 
하지만 너무나 많은 사람을 만나기 때문에 계산하기가 귀찮다! 
귀찮아진 소윤이를 위해 "이름점수"를 계산하는 프로그램을 만들어 주자.


입력
첫 번째 줄에 이름의 길이가 주어진다. 
길이는 100자 이하이다

두 번째 줄에 이름이 띄어쓰기 없이 대문자로 주어진다.


출력
주어진 이름에 대한 "이름점수"를 출력해주자.


예제 입력 1 
7
SUNGPIL
예제 출력 1 
98

예제 입력 2 
6
SOYOON
예제 출력 2 
103
"""

import sys

sys.stdin = open("./input.txt")

input = lambda: sys.stdin.readline().rstrip()

n_dic = {}
for i, e in enumerate(list("ABCDEFGHIJKLMNOPQRSTUVWXYZ")):
    n_dic[e] = i + 1

t_cnt = int(input())

n_list = list(input())

n_score = 0
for n in n_list:
    n_score += n_dic[n]

print(n_score)
