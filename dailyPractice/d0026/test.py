#!/usr/bin/python3
print('----------start------------')

# # Step 1 is_equal
# ################################
# Step 3 name_string
# ################################
# U5 W2 P1 Task 10
# def U5W2P1_Task10(digits):
# print( U5W2P1_Task10(digits) )
# ################################
# ################################
# U5 W2 P1 Task 12
# def U5W2P1_Task12(arr):
# arr = [1,2,2,4]
# print( U5W2P1_Task12(arr) )
# ################################


# from collections.abc import Iterable

# print(isinstance([], Iterable))
# print(isinstance({}, Iterable))
# print(isinstance('abc', Iterable))
# print(isinstance((x for x in range(10)), Iterable))
# print(isinstance(100, Iterable))


# from collections.abc import Iterator
# print(isinstance((x for x in range(10)), Iterator))
# print(isinstance([], Iterator))
# print(isinstance({}, Iterator))
# print(isinstance('abc', Iterator))
# print(isinstance(iter([]), Iterator))
# print(isinstance(iter('abc'), Iterator))


# # Step 1 
# ################################
# it = iter([1, 2, 3, 4, 5])
# # 循环:
# while True:
#     try:
#         # 获得下一个值:
#         x = next(it)
#         print(x)
#     except StopIteration:
#         # 遇到StopIteration就退出循环
#         break

# def add(x, y, f):
#     return f(x) + f(y)

# print(add(-5, 6, abs))
# ################################

# # Step 2 
# ################################
def f(x):
    return x * x
r = map(f, [1, 2, 3, 4, 5, 6, 7, 8, 9])
print(list(r))

L = []
for n in [1, 2, 3, 4, 5, 6, 7, 8, 9]:
    L.append(f(n))
print(L)

print(list(map(str, [1, 2, 3, 4, 5, 6, 7, 8, 9])))

from functools import reduce
def add(x, y):
    return x+y
print(reduce(add, [1, 3, 5, 7, 9]))
def fn(x, y):
    return x*10 + y
print(reduce(fn, [1, 3, 5, 7, 9]))

def char2num(s):
    digits = {'0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9}
    return digits[s]
print(reduce(fn, map(char2num, '13579')))

def is_odd(n):
    return n % 2 == 1
print(list(filter(is_odd, [1, 2, 4, 5, 6, 9, 10, 15])))

def not_empty(s):
    return s and s.strip()
print(list(filter(not_empty, ['A', '', 'B', None, 'C', '  '])))

print('------------end------------')
