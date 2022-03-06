#!/usr/bin/python3
print('----------start------------')

# # 生成list [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]可以用list(range(1, 11))：
# print(list(range(1, 11)))

# # 但如果要生成[1x1, 2x2, 3x3, ..., 10x10]怎么做？方法一是循环：
# L = []
# for x in range(1, 11):
#     L.append(x * x)
# print("L =", L)
# #  2
# print("L =", [x * x for x in range(1, 11)])

# print([x * x for x in range(1, 11) if x % 2 == 0])

# print([m + n for m in 'ABC' for n in 'XYZ'])

# import os # 导入os模块，模块的概念后面讲到
# print([d for d in os.listdir('.')]) # os.listdir可以列出文件和目录

# d = {'x': 'A', 'y': 'B', 'z': 'C' }
# for k, v in d.items():
#     print(k, '=', v)

# d = {'x': 'A', 'y': 'B', 'z': 'C' }
# print([k + '=' + v for k, v in d.items()])

print('---------------------------')

L = ['Hello', 'World', 'IBM', 'Apple']
print([s.lower() for s in L])

print([x for x in range(1, 11) if x % 2 == 0])

print([x if x % 2 == 0 else -x for x in range(1, 11)])

x = 'abc'
y = 123
print(isinstance(x, str))
print(isinstance(y, str))

print('------------end------------')
