#!/usr/bin/python3
print('----------start------------')

# # Step 1
# # a = 1
# # s = "abcdef"
# # print("s[2] =", s[2])
# # x = 1+3
# # x = 1+3.0
# # x = '1'+'3'
# # # x = '1' +3  # Err
# # x = float('1.2')
# # x = None
# # x = bool(None)
# # print("x =", x, type(x))

# # Step 2
# def f(x):
#     return x * x 
# r = map(f, [1, 2, 3, 4, 5, 6, 7, 8, 9])
# print(list(r))

# def countL (s, letter):
#     count = 0
#     listS = list(s)
#     for x in listS:
#         if(x==letter):
#             count = count + 1
#     return count

# s = "abbb"
# letter = "b"
# print(countL(s, letter))
# n = 1234
# print( len(str(n)) )

# print('------------ast------------')
# def ast (s):
#     arr = []
#     # print(list(s))
#     for x in list(s):
#         arr.append('*')
#         arr.append(x)
        
#         # print(x)
#     arr.append('*')
#     str = "".join(arr)
#     return str

# s1 = "abc"
# print(ast(s1))
# print('------------letter larger------------')

# def letterLarger (s):
#     larger = ''
#     arr = list(s)
#     print(arr)
#     for x in list(s):
#         if(x > larger):
#             larger = x 
#     return larger
#     # print(arr)

# s1 = "eniac"
# print(letterLarger(s1))

# s2 = ""
# print(s2.ljust(5, "#"))
# print(s2)


# def sol(a, index):
#     if (type(a) != list) or type(index) != int :
#         return -999
#     elif (index > len(a)-1 or index <0) :
#         return -999
#     else:
#         return a[index]
# # a = [1,2,3,4]
# a = ''
# # print(a[3])
# # print(a[5])
# print(type(1))
# print(type(a) != list)
# print(sol(a, 3.5))

# # def ins(a, front, back):
# #     a.insert(a, front)
# #     a.append(back)
# #     return a
# # a = [1, 2, 3, 4]
# # front = 10
# # back = 50
# # print(ins(a, front, back))


# #  Task 6
# def task6(x):
#     output = 1
#     i = 0
#     if (x%7 == 0):
#         return x
#     while x :
#         output = output * (x + i)
#         if (output % 7 == 0):
#             return output
#         i += 1
# print(task6(7))

# # Task 7
# def Task7(a):
#     b = []
#     output = []
#     b.append(a.pop(0))
#     b.append(a.pop())
#     output.append(a)
#     output.append(b)
#     return output
# P4 Task 8
# def Task8 (a, x):
#     i = len(a)//2
#     print("i =", i)
#     a.insert(i , x)
#     return a
# a = [1, 2, 3]
# x = 99
# print(Task8(a, x))

# # P4 Task 9
# def Task9(a, v):
#     for x in a:
#         if(x == v):
#             return True
#     return False
# a = [1, 2, 3]
# print(Task9(a, 22))
# # P4 Task 10
# def Task10(a):
#     output = []
#     for x in a:
#         output.append(x * 2)
#     return output
# print(Task10(a))

# result = map(lambda n1, n2: n1 + n2, a, a)
# print(list(result))

# P4 Task 11
def Task11(a):
    sum = 0
    for x in a:
        sum = sum + x
    return sum
a = [1, 2, 3]
print(Task11(a))


# P4 Task 12
def Task12(n, m):
    # list2 = ["A"] * 5
    # print(list2)
    listA  = ["A"]*n
    listB  = ["B"]*m
    # listA.append(listB)
    listC = listA + listB
    return "".join(listC)
# def solution(n, m):
#     listA  = ["A"]*n
#     listB  = ["B"]*m
#     listC = listA + listB
#     return "".join(listC)
print(Task12(3,5))

# P4 Task 13
def Task13(s):
    arr =[]
    b = []
    i = 0
    if( not s):
        return ''
    arr = list(s) 
    for x in arr:
        if(i%2 == 0):
            b.append(x)
        i += 1
    # print(arr)
    return "".join(b)

s = "abc"
print(Task13(s))

print('------------end------------')
