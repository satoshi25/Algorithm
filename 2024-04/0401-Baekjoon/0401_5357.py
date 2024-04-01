'''
https://www.acmicpc.net/problem/5357
Baekjoon
5357 Dedupe

문제
Redundancy in this world is pointless. 
Let’s get rid of all redundancy. 
For example AAABB is redundant. 
Why not just use AB? Given a string, 
remove all consecutive letters that are the same.


입력
The first line in the data file is an integer 
that represents the number of data sets to follow. 
Each data set is a single string. 
The length of the string is less than 100. 
Each string only contains uppercase alphabetical letters.


출력
Print the deduped string.


예제 입력 1 
3
ABBBBAACC
AAAAA
ABC
예제 출력 1 
ABAC
A
ABC
'''

import sys

sys.stdin = open('./input.txt')

input = lambda: sys.stdin.readline().rstrip()

t_cnt = int(input())

def edit(word):
	w_list = list(word)
	result = ''
	pre = ''
	for w in w_list:
		if w != pre:
			result += w
		pre = w
	return result

for _ in range(t_cnt):
    print(edit(input()))