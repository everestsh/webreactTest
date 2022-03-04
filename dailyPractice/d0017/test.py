#!/usr/bin/python3
print('----------start------------')

def my_abs(x):
    if x >= 0:
        return x
    else:
        return -x

print(my_abs(-99))

def nop():
    pass

age = 19
if age >= 18:
    pass

# def my_abs(x):
#     if not isinstance(x, (int, float)):
#         raise TypeError('bad operand type')
#     if x >= 0:
#         return x
#     else:
#         return -x

# my_abs(-99)

import math

def move(x, y, step, angle=0):
    nx = x + step * math.cos(angle)
    ny = y - step * math.sin(angle)
    return nx, ny

x, y = move(100, 100, 60, math.pi / 6)
print(x, y)

r = move(100, 100, 60, math.pi / 6)
print(x, y)


# def power(x, n):
#     s = 1
#     while n > 0:
#         n = n - 1
#         s = s * x
#     return s

# print(power(5,2))
# print(power(5,3))

def power(x, n=2):
    s = 1
    while n > 0:
        n = n - 1
        s = s * x
    return s
print(power(5,2))
print(power(5,3))
print(power(5))

print('---------------------------')
# def enroll(name, gender):
#     print('name:', name)
#     print('gender:', gender)
# enroll('Sarah', 'F')

def enroll(name, gender, age=6, city='Beijing'):
    print('name:', name)
    print('gender:', gender)
    print('age:', age)
    print('city:', city)
enroll('Sarah', 'F')
enroll('Bob', 'M', 7)
enroll('Adam', 'M', city='Tianjin')

print('---------------------------')

# def add_end(L=[]):
#     L.append('END')
#     return L
# # print(add_end([1, 2, 3]))
# # print(add_end(['x', 'y', 'z'])
# print(add_end())
# print(add_end())

# def add_end(L=None):
#     if L is None:
#         L = []
#     L.append('END')
#     return L
# # print(add_end())
# # print(add_end())
# print(add_end(None))
# print(add_end([1]))

# def calc(numbers):
#     sum = 0
#     for n in numbers:
#         sum = sum + n * n
#     return sum
# print(calc([1,2,3]))
# print(calc((1, 3, 5, 7)))

def calc(*numbers):
    sum = 0
    for n in numbers:
        sum = sum + n * n
    return sum
print(calc(1, 2))
print(calc())
nums = [1, 2, 3]
print(calc(nums[0], nums[1], nums[2]))

def person(name, age, **kw):
    print('name:', name, 'age:', age, 'other:', kw)
person('Michael', 30)
person('Bob', 35, city='Beijing')
person('Adam', 45, gender='M', job='Engineer')
extra = {'city': 'Beijing', 'job': 'Engineer'}
person('Jack', 24, **extra)


def person(name, age, **kw):
    if 'city' in kw:
        # 有city参数
        pass
    if 'job' in kw:
        # 有job参数
        pass
    print('name:', name, 'age:', age, 'other:', kw)

person('Jack', 24, city='Beijing', addr='Chaoyang', zipcode=123456)


print('------------end------------')

