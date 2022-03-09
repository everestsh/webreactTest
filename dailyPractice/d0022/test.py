#!/usr/bin/python3
print('----------start------------')

# Step 1
# a = 1
# s = "abcdef"
# print("s[2] =", s[2])
# x = 1+3
# x = 1+3.0
# x = '1'+'3'
# # x = '1' +3  # Err
# x = float('1.2')
# x = None
# x = bool(None)
# print("x =", x, type(x))

# Step 2
def f(x):
    return x * x 
r = map(f, [1, 2, 3, 4, 5, 6, 7, 8, 9])
print(list(r))

def countL (s, letter):
    count = 0
    listS = list(s)
    for x in listS:
        if(x==letter):
            count = count + 1
    return count

s = "abbb"
letter = "b"
print(countL(s, letter))
n = 1234
print( len(str(n)) )

print('------------ast------------')
def ast (s):
    arr = []
    # print(list(s))
    for x in list(s):
        arr.append('*')
        arr.append(x)
        
        # print(x)
    arr.append('*')
    str = "".join(arr)
    return str

s1 = "abc"
print(ast(s1))
print('------------letter larger------------')

def letterLarger (s):
    larger = ''
    arr = list(s)
    print(arr)
    for x in list(s):
        if(x > larger):
            larger = x 
    return larger
    # print(arr)

s1 = "eniac"
print(letterLarger(s1))

s2 = ""
print(s2.ljust(5, "#"))
print(s2)


def sol(a, index):
    if (type(a) != list) or type(index) != int :
        return -999
    elif (index > len(a)-1 or index <0) :
        return -999
    else:
        return a[index]
# a = [1,2,3,4]
a = ''
# print(a[3])
# print(a[5])
print(type(1))
print(type(a) != list)
print(sol(a, 3.5))

def ins(a, front, back):
    a.insert(a, front)
    a.append(back)
    return a
a = [1, 2, 3, 4]
front = 10
back = 50
print(ins(a, front, back))

print('------------end------------')
