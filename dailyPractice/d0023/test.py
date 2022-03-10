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

# # P4 Task 17
# def Task17(p, n, m):
#     arr = []
#     for x in range(p):
#         for xn in range(n):
#             # print("A")
#             arr.append('A')
#         for xm in range(m):
#             # print("B")
#             arr.append('B')
#     return ''.join(arr)
#     # print("A")
# p = 2 
# n = 1 
# m = 0
# print(Task17(p, n, m)) 


# # U5 W2 P1 Task 1
# def U5W2P1_Task1(p, n, m):
#     arr = []
#     i = 0
#     for x in range(p):
#         if(i%3 == 0):
#             # print("X")
#             for x in range(p):
#                 arr.append('X')
#         else:
#             for xn in range(n):
#                 # print("A")
#                 arr.append('A')
#             for xm in range(m):
#                 # print("B")
#                 arr.append('B')
#         i += 1 
#     return ''.join(arr)
#     # print("A")
# p = 5
# n = 1 
# m = 0
# print(U5W2P1_Task1(p, n, m))

# U5 W2 P1 Task 2
# def U5W2P1_Task2(s):
#     if (s == ''):
#         return ''
#     arr = list(s)
#     # print(len(s))
#     output = []
#     for x in arr:
#         output.insert(0, x)
#     return "".join(output)

# # s = ''
# s = "abcdef"
# print(U5W2P1_Task2(s))

# U5 W2 P1 Task 3
# def U5W2P1_Task3(s):
#     output = []
#     if(s == ''):
#         return []
#     print(len(s))
#     for x in range(len(s)):
#         output.append(s[x])
#     return output

# s = "abcdef"
# s = "@\\_,6"
# print(U5W2P1_Task3(s))

# U5 W2 P1 Task 4
# def U5W2P1_Task4(a, v):
#     count = 0
#     # print("a =", a)
#     if(a ==[]):
#         return 0
#     else:
#         for x in a:
#             if(x == v):
#                 count += 1
#     return count

# a = []
# a = [1, 7, 2, 10, 7]
# v = 7
# print(U5W2P1_Task4(a, v))

# U5 W2 P1 Task 5
# def U5W2P1_Task5(a, b):
#     # l = len(a)
#     # print(l)
#     if ( len(a) != len(b)):
#         return False
#     for x in range(len(a)):
#         if(a[x] != b[x]):
#             return False
#     return True
    
# a = [1, 7, 2, 10, 7]
# b = [1, 7, 2, 10, 7]
# # a = [7, 2, 10, 7]
# # b = [1, 7, 2, 10, 7]
# print(U5W2P1_Task5(a, b))


# U5 W2 P1 Task 5
def U5W2P1_Task6(a, x):
    output = []
    # print(output)
    for i in range(len(a)):
        # print(i)
        if(a[i] != x ):
            output.append(a[i])
    return output

a = [1, 7, 2, 10, 7]
x = 7
print(U5W2P1_Task6(a, x))

print('------------end------------')
