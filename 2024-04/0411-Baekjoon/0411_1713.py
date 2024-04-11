"""
https://www.acmicpc.net/problem/1713
Baekjoon
1713 후보 추천하기

문제
월드초등학교 학생회장 후보는 일정 기간 동안 전체 학생의 추천에 의하여 정해진 수만큼 선정된다. 
그래서 학교 홈페이지에 추천받은 학생의 사진을 게시할 수 있는 사진틀을 후보의 수만큼 만들었다. 
추천받은 학생의 사진을 사진틀에 게시하고 추천받은 횟수를 표시하는 규칙은 다음과 같다.

학생들이 추천을 시작하기 전에 모든 사진틀은 비어있다.
어떤 학생이 특정 학생을 추천하면, 추천받은 학생의 사진이 반드시 사진틀에 게시되어야 한다.
비어있는 사진틀이 없는 경우에는 현재까지 추천 받은 횟수가 가장 적은 학생의 사진을 삭제하고, 
그 자리에 새롭게 추천받은 학생의 사진을 게시한다. 
이때, 현재까지 추천 받은 횟수가 가장 적은 학생이 두 명 이상일 경우에는 
그러한 학생들 중 게시된 지 가장 오래된 사진을 삭제한다.
현재 사진이 게시된 학생이 다른 학생의 추천을 받은 경우에는 추천받은 횟수만 증가시킨다.
사진틀에 게시된 사진이 삭제되는 경우에는 해당 학생이 추천받은 횟수는 0으로 바뀐다.
후보의 수 즉, 사진틀의 개수와 전체 학생의 추천 결과가 추천받은 순서대로 주어졌을 때, 
최종 후보가 누구인지 결정하는 프로그램을 작성하시오.


입력
첫째 줄에는 사진틀의 개수 N이 주어진다. (1 ≤ N ≤ 20) 
둘째 줄에는 전체 학생의 총 추천 횟수가 주어지고, 
셋째 줄에는 추천받은 학생을 나타내는 번호가 빈 칸을 사이에 두고 추천받은 순서대로 주어진다. 
총 추천 횟수는 1,000번 이하이며 학생을 나타내는 번호는 1부터 100까지의 자연수이다.


출력
사진틀에 사진이 게재된 최종 후보의 학생 번호를 증가하는 순서대로 출력한다.


예제 입력 1 
3
9
2 1 4 3 5 6 2 7 2
예제 출력 1 
2 6 7
"""

import sys

sys.stdin = open("./input.txt")

input = lambda: sys.stdin.readline().rstrip()

p_cnt = int(input())
r_cnt = int(input())
p_dic = {}
p_dic_cnt = 0
r_list = list(map(int, input().split()))

for r in r_list:
    if p_dic_cnt < p_cnt:
        if r not in p_dic:
            p_dic[r] = 1
            p_dic_cnt += 1
        else:
            p_dic[r] += 1
    else:
        if r not in p_dic:
            p_v_list = list(p_dic.values())
            min_p = min(p_v_list)
            min_cnt = len(list(filter(lambda x: x == min_p, p_v_list)))
            for key, value in p_dic.items():
                if min_p == value:
                    p_dic.pop(key)
                    p_dic[r] = 1
                    break
        else:
            p_dic[r] += 1

result = sorted(list(p_dic.keys()))
print(*result)
