#!/usr/bin/python3
print('----------start------------')

# # Step 1 is_equal
# ################################
# Step 3 name_string
# ################################
# U5 W2 P1 Task 10
# def U5W2P1_Task10(digits):
# print( U5W2P1_Task10(digits) )
# ################################
# ################################
# U5 W2 P1 Task 12
# def U5W2P1_Task12(arr):
# arr = [1,2,2,4]
# print( U5W2P1_Task12(arr) )
# ################################

# ################################
# ################################


# print(int('12345'))

# print(int('12345', base=8))

# print(int('12345', base=16)

def int2(x, base=2):
    return int(x, base)

print(int2('1000000'))
print(int2('1010101'))
print( int2('1000000', base=10))

#  python 3 中判断两个对象是否相等
import operator
print(operator.eq("hello","name"))
print(operator.eq("hello","hello"))


str1 = "12345"
list1 = list(str1)
print(list1)


print('------------end------------')
