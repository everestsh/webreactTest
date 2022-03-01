#!/usr/bin/python3
print('----------start------------')

classmates = ['Michael', 'Bob', 'Tracy']
print(classmates)
print(len(classmates))
print(classmates[0])
print(classmates[1])
print(classmates[2])

print(classmates[-1])
print(classmates[-2])
print(classmates[-3])

classmates.append('Adam')
print(classmates)

classmates.insert(1, 'Jack')
print(classmates)

classmates.pop()
print(classmates)

classmates.pop(1)
print(classmates)

classmates[1] = 'Sarah'
print(classmates)

s = ['python', 'java', ['asp', 'php'], 'scheme']
print(s)
print(len(s))
L = []
print(L)
print(len(L))

t = (1, 2)
print(t)

t1 = (1,)
print(t1)

t2 = ('a', 'b', ['A', 'B'])
print(t2)
t2[2][0] = 'X'
t2[2][1] = 'Y'
print(t2)

age = 20
if age >= 18:
    print('your age is', age)
    print('adult')

age1 = 3
if age1 >= 18:
    print('your age1 is', age1)
    print('adult')
else:
    print('your age1 is', age1)
    print('teenager')

age2 = 20
if age2 >= 6:
    print('teenager age2')
elif age2 >= 18:
    print('adult')
else:
    print('kid')

s = input('birth: ')
birth = int(s)
if birth < 2000:
    print('00前')
else:
    print('00后')

print('------------end------------')

