#!/usr/bin/python3
print('----------start------------')


a = 'd001'
str_list = list(a)
print("a = ", a)
str_list.insert(1,'EE')
print("str_list = ", str_list)
na = ''.join(str_list)
print("new a =", na)

print('------------end------------')

