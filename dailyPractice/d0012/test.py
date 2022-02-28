#!/usr/bin/python3
print('----------start------------')

print("10/3  =", 10/3)
print("10//3 =", 10//3)
print("10%3  =", 10%3)

print("A =", ord("A"))
print("中 =", ord("中"))
print("66 =", chr(66))
print("25991 =", chr(25991))
print( '\u4e2d\u6587')
print('encode', 'ABC'.encode('ascii'))
print('encode', '中文'.encode('utf-8'))
print('encode', 'ABC'.encode('ascii'))

print("decode", b'ABC'.decode('ascii'))
print("decode", b'\xe4\xb8\xad\xe6\x96\x87'.decode('utf-8'))

# 如果bytes中只有一小部分无效的字节，可以传入errors='ignore'忽略错误的字节：
print("decode", b'\xe4\xb8\xad\xff'.decode('utf-8', errors='ignore'))

print("计算:", len('ABC'))
print("计算:", len('中文'))

print("计算:", len(b'\xe4\xb8\xad\xe6\x96\x87'))
print("计算:", len('中文'.encode('utf-8')))
print("计算:", len('中文'))

print('Age: %s. Gender: %s' % (25, True))
print('growth rate: %d %%' % 7)
print('Hello, {0}, 成绩提升了 {1:.1f}%'.format('小明', 17.125))

r = 2.5
s= 3.14*r**2
print(f'The area of a circle with radius {r} is {s:.2f}')
#格式化字符串的方法是使用以f开头的字符串，称之为f-string，它和普通字符串不同之处在于，字符串如果包含{xxx}，就会以对应的变量替换：
#{r}被变量r的值替换，{s:.2f}被变量s的值替换，并且:后面的.2f指定了格式化参数（即保留两位小数），因此，{s:.2f}的替换结果是19.62。
print('------------end------------')
#Python的浮点数也没有大小限制，但是超出一定范围就直接表示为inf（无限大）

