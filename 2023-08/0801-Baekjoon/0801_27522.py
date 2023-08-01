"""
https://www.acmicpc.net/problem/27522
Baekjoon
27522 카트라이더: 드리프트

문제
카트라이더: 드리프트 에는 크게 아이템전과 스피드전의 두 가지 모드가 있다. 
아이템전은 다양한 아이템을 사용할 수 있는 모드로, 
팀의 협동을 통한 전략적 플레이가 핵심이다. 
반면 스피드전은 드리프트를 통해 부스터를 모아 사용하는 모드로, 짜릿한 속도감을 즐길 수 있다.

당신은 스피드전 스쿼드의 승리 팀을 구하는 임무를 맡았다. 
스쿼드는 레드팀 4명과 블루팀 4명으로 이루어진 8명의 레이서가 플레이하는 모드이다. 
또한 스피드전에서는 각 팀원의 순위 점수의 합계가 높은 팀이 승리하며, 
만일 합계가 같다면 최고 순위가 가장 높은 팀이 승리한다. 
참고로 아래 순위 점수표를 확인해보면, 
8명의 레이서가 모두 서로 다른 시각에 완주한 경우 순위 점수의 합계가 반드시 다르다.

원래 1위 레이서가 완주한 순간부터 10초가 지나기 전에 완주하지 못하면 리타이어되지만, 
이 문제에서는 모든 레이서의 실력이 뛰어나기 때문에 아무도 리타이어하지 않는다. 
또한 모든 레이서가 반드시 서로 다른 시각에 완주한다. 
스피드전 스쿼드에 참가한 8명의 레이서에 대해 완주 기록과 속한 팀이 주어졌을 때, 
아래 순위 점수표를 참고하여 승리팀이 어디인지 판단해보자.

표 1. 카트라이더: 드리프트 스피드전 순위 점수
순위	1st	2nd	3rd	4th	5th	6th	7th	8th	Retire
점수	 10	  8	  6	  5	  4	  3	  2	  1	     0

입력
첫째 줄부터 8개의 줄에 걸쳐 한 줄에 한 명씩 각 레이서의 완주 기록과 속한 팀이 공백을 사이에 두고 주어진다.

레이서의 완주 기록은 M:SS:sss와 같은 형식으로 주어진다.
분(M)은 0 이상 9 이하의 정수, 초(SS)는 0 이상 59 이하의 정수, 
밀리초(sss)는 0 이상 999 이하의 정수로 자릿수가 부족한 경우 앞에 0을 붙여 나타낸다.
모든 레이서는 0:00:001 이상 9:59:999 이하의 서로 다른 시각에 완주한다. 
리타이어가 발생하지 않는 입력만 주어진다.
레이서가 속한 팀은 레드팀인 경우 R, 블루팀인 경우 B로 주어진다.


출력
레드팀이 승리하였다면 Red를, 블루팀이 승리하였다면 Blue를 출력한다.

예제 입력 1 
1:52:682 B
1:50:201 R
1:49:003 B
1:49:735 B
1:50:257 R
1:51:134 R
1:49:236 R
1:53:932 B
예제 출력 1 
Red
"""

import sys

sys.stdin = open("./input.txt")

rank_score = {0: 10, 1: 8, 2: 6, 3: 5, 4: 4, 5: 3, 6: 2, 7: 1}
scores, result = [[], "Red"]
for _ in range(8):
    score, team = input().split(" ")
    h, m, ms = score.split(":")
    scores.append([h, m, ms, team])

sorted_rank = sorted(scores, key=lambda el: [el[0], el[1], el[2]])
team_score = {"R": 0, "B": 0}
for i in range(8):
    team_score[sorted_rank[i][3]] += rank_score[i]

if team_score["R"] < team_score["B"]:
    result = "Blue"

print(result)