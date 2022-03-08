#!/usr/bin/python3
print('----------start------------')

# def solution(n):
    # sum  = 0 
    # for x in range(n+1):
    #     sum = sum + x
    # return sum

# print(solution(5))

# def solution(n, m):
#     sum  = 0 
#     for x in range(n, m+1):
#         # sum = sum + x
#     return sum

# print(solution(5, 9))

# def solution(year):
#     if(not year%100):
#         return year/100
#     else:
#         return year//100 + 1
# print(solution(5))

def solution(inputString):
    return inputString[::-1] == inputString

print(solution("aabaa"))
print('------------end------------')
