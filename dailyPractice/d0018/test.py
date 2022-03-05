#!/usr/bin/python3
print('----------start------------')

# 参数定义的顺序必须是：必选参数、默认参数、可变参数、命名关键字参数和关键字参数。

def f1(a, b, c=0, *args, **kw):
    print('a =', a, 'b =', b, 'c =', c, 'args =', args, 'kw =', kw)

def f2(a, b, c=0, *, d, **kw):
    print('a =', a, 'b =', b, 'c =', c, 'd =', d, 'kw =', kw)

f1(1, 2)
f1(1, 2, c=3)
f1(1, 2, 3, 'a', 'b')
f1(1, 2, 3, 'a', 'b', x=99)
f2(1, 2, d=99, ext=None)

args = (1, 2, 3, 4)
kw = {'d': 99, 'x': '#'}
f1(*args, **kw)
args = (1, 2, 3)
kw = {'d': 88, 'x': '#'}
f1(*args, **kw)

# 默认参数一定要用不可变对象，如果是可变对象，程序运行时会有逻辑错误！
# *args是可变参数，args接收的是一个tuple；
# **kw是关键字参数，kw接收的是一个dict。

# L = []
# n = 1
# while n <= 99:
#     L.append(n)
#     n = n + 2
#     print(n)

# L = ['Michael', 'Sarah', 'Tracy', 'Bob', 'Jack']
# r = []
# n = 3
# for i in range(n):
#     r.append(L[i])
# print(r)
# print(L[0:3])
# print(L[:3])
# print(L[1:3])
# print(L[-2:])
# print(L[-2:-1])
# L = list(range(100))
# print(L)
# print(L[:10])
# print(L[-10:])
# print(L[10:20])
# print(":10:2 =", L[:10:2])
# print("::5 =", L[::5])
# print("::5 =", L[::5])
# print("(0, 1, 2, 3, 4, 5)[:3] = ", (0, 1, 2, 3, 4, 5)[:3] )
print("ABCDEFG =", 'ABCDEFG'[:3])
print("ABCDEFG =", 'ABCDEFG'[::2])

d = {'a': 1, 'b': 2, 'c': 3}
for key in d:
    print(key)

for ch in 'ABC':
    print(ch)

from collections.abc import Iterable

print(isinstance('abc', Iterable)) 

print(isinstance([1,2,3], Iterable))

print(isinstance(123, Iterable))

for i, value in enumerate(['A', 'B', 'C']):
    print(i, value)

for x, y in [(1, 1), (2, 4), (3, 9)]:
    print(x, y)


print('------------end------------')
