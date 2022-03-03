#!/usr/bin/python3
print('----------start------------')

d = {'Michael': 95, 'Bob': 75, 'Tracy': 85}
print(d['Michael'])
d['Adam'] = 67
print(d['Adam'])
d['Jack'] = 90
print(d['Jack'])
d['Jack'] = 88
print(d['Jack'])

print('Thomas' in d)
d.get('Thomas')
print(d.get('Thomas', -1))
print(d)
d.pop('Bob')
print(d)
s = set([1, 2, 3])
print(s)

s = set([1, 1, 2, 2, 3, 3])
print(s)
s.add(4)
print(s)
s.remove(4)
print(s)
s1 = set([1, 2, 3])
s2 = set([2, 3, 4])
print("s1 & s2 =",s1 & s2)
print("s1 | s2 =",s1 | s2)
# 在Python中，字符串、整数等都是不可变的，因此，可以放心地作为key。而list是可变的，就不能作为key：
# set和dict的唯一区别仅在于没有存储对应的value，但是，set的原理和dict一样，所以，同样不可以放入可变对象

a = ['c', 'b', 'a']
a.sort()
print(a)

a = 'abc'
b = a.replace('a', 'A')
print("a", a)
print(b)

print(abs(-20))
print(max(2, 3, 1, -5))
# 函数名其实就是指向一个函数对象的引用，完全可以把函数名赋给一个变量，相当于给这个函数起了一个“别名”：
a = abs
print(a(-1))


n1 = 255

n2 = 1000

print(hex(n1))

print(hex(n2))

print('------------end------------')

