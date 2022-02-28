#!/usr/bin/python3
print('----------start------------')


# def max(a, b):
#     if(a>b):
#         return a
#     else:
#         return b
# a = 4
# b =7
# print(max(a, b))

def area(width, height):
    return width * height

def print_welcome(name) :
    print("welcome ", name)

print_welcome("mj")
w=4
h=5
print("width =", w, "height =", h, " area =", area(w,h))

def printme(str):
    print(str)
    return
printme("我要调用用户自定义函数!")
printme("再次调用同一函数")

print('------------end------------')


