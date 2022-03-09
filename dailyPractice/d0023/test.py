#!/usr/bin/python3
print('----------start------------')

# # Step 1
# # P4 Task 14
# def Task14(s):
#     arr = []
#     output = []
#     vowels = 'aeiou'
#     # print( vowels.find('j')  )
#     i = 1 
#     for x in list(s):
#         # print(i)
#         i += 1
#         if(i%2 == 0):
#             # print("i =", i , "x =",x)
#             if(vowels.find(x) != -1):
#                 continue
#             else:
#                 output.append(x)
#     return ''.join(output)
# # s = "abcd"
# s = "abcdefg"
# print(Task14(s))

# # P4 Task 15
# def Task15(s):
#     arr = []
#     output = []
#     vowels = 'aeiou'
#     # print( vowels.find('j')  )
#     i = 1 
#     for x in list(s):
#         # print(i)
#         i += 1
#         if(i%2 == 0):
#             # print("i =", i , "x =",x)
#             if(vowels.find(x) != -1):
#                 continue
#             elif(x.isupper()):
#                 continue
#             else:
#                 output.append(x)
#     return ''.join(output)
# # s = "abcd"
# s = "abCdefg"
# print(Task15(s))

# P4 Task 16
# def Task16(n, width):
#     arr = list(str(n))
#     loopTime = width - len(arr)
#     print("arr =",arr, " loopTime =", loopTime)
#     if(len(arr) >= width):
#         return str(n)
#     else:
#         for x in range(loopTime):
#             arr.insert(0, "0")
#         return ''.join(arr)
# n =70
# width = 3
# print(Task16(n, width))
# P4 Task 17
def Task17(p, n, m):
    arr = []
    for x in range(p):
        for xn in range(n):
            # print("A")
            arr.append('A')
        for xm in range(m):
            # print("B")
            arr.append('B')
    return ''.join(arr)
    # print("A")


p = 2 
n = 1 
m = 0
print(Task17(p, n, m)) 




print('------------end------------')
