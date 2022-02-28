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
print('------------end------------')
#Python的浮点数也没有大小限制，但是超出一定范围就直接表示为inf（无限大）

