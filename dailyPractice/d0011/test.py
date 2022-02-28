#!/usr/bin/python3
print('----------start------------')

name = input()

print('name = ', name)

print(r'''lin1
line2
line''')

print("True and True =", True and True)
print("True and False =", True and False)
print("False and False =", False and False)
print("5 > 3 and 3 > 1 =", 5 > 3 and 3 > 1)

print("True or True =", True or True)
print("True or False =", True or False)
print("False or False =", False or False)
print("5 > 3 or 3 > 1 =", 5 > 3 or 3 > 1)

print("not False =", not True)
print("not False =", not False)
print("not 1 > 2 =", not 1 > 2)

age = 19
if age >= 18:
    print('adult')
else:
    print('teenager')
print('------------end------------')


