"""
https://www.acmicpc.net/problem/18679
Baekjoon
18679 Banana

문제
After NASA discovered water on Mars, 
they decided to expand their exploration hoping to find some alien intelligence on the planet. 
After months of exploration, they were actually surprised to find out that the planet has been inhabited by minions.

NASA started communications with the minions and the first message they received was Mo amo Banana. 
At first, it was really hard to decipher the message but after sometime they managed to workout a dictionary that maps English words to Minionese words. 
You are going to help NASA build the translator to ease their communication with Minions for the good and prosperity of mankind and minionkind.

입력
The first line of input will contain a single integer N, 
the number of words in the dictionary (1 ≤ N ≤ 100). 
The following N lines will each contain a sentence of the format x = y where x is an English word and y is a Minionese word. 
The next line will contain an integer T, the number of test cases (1 ≤ T ≤ 100). 
Each test case will start with a line containing an integer K, the number of words in the sentence (1 ≤ K ≤ 100) and the next line will contain K space separated English words. 
All the English words in the test cases exist in the defined dictionary. 
Also, all the words consist only of English alphabet, and will be at most 20 characters long.

출력
For each test case, print a single line containing the space separated Minionese words after translation.

예제 입력 1 
4
I = mo
love = amo
icecream = gelatooo
banana = banana
2
3
I love banana
3
I love icecream
예제 출력 1 
mo amo banana
mo amo gelatooo
"""

import sys

sys.stdin = open("./input.txt")

words_cnt = int(input())
minion_dicts = {}

for _ in range(words_cnt):
    en_word, eq, mini_word = input().split(" ")
    minion_dicts[en_word] = mini_word

test_cnt = int(input())


for _ in range(test_cnt):
    sentence_word_cnt = int(input())
    word_list = input().split(" ")
    cur = ""
    for i in range(sentence_word_cnt):
        word = minion_dicts[word_list[i]]
        if cur == "":
            cur = word
        else:
            cur = f"{cur} {word}"
    print(cur)
