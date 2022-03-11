#!/usr/bin/python3
print('----------start------------')

# # Step 1 is_equal
# obj_one = {
#   "name": "Benny",
#   "phone": "3325558745",
#   "email": "benny@edabit.com"
# }
# obj_o = {
#   "name": "Benny",
#   "phone": "3325558745",
#   "email": "benny@edabit.com"
# }
# obj_two = {
#   "name": "Jason",
#   "phone": "9853759720",
#   "email": "jason@edabit.com"
# }
# for x in obj_one:
#     # print(x)
#     print(obj_one[x]== obj_o[x] )

# def is_equal(obj_one, obj_two):
# 	for x in obj_one:
# 		if(obj_one[x] != obj_two[x]):
# 			return False
# 		else:
# 			return True
	
# # Step 2 is_equal

# l = [1,2,0,4,0,56,6,0,7,0]
# for  x in range(len(l)-1):
#     print(x)

# def get_first_value(number_list):
#     # print(number_list)
#     for x in number_list:
#         # print(x)
#         # print(type(x)== int)
#         if(type(x) != int):
#             return -1
#     return number_list[0]

# print(get_first_value([1, 2, 3]))

# ################################
# Step 3 name_string
# def name_string(name):
#     b = "Edabit"
#     result = name + b
#     return result
# name = "wendy"
# print(name_string(name))

# ################################
# Step 4 total_amount_adjectives
# def total_amount_adjectives(dct):
#     # for x in dct:
#     #     print(x)
#     return len(dct)
# dct = { "a": "moron" }
# print(total_amount_adjectives(dct))

# ################################
# Step 5 to_int
# def to_int(txt):
#     return int(txt)
# print(to_int('4567'))

# def to_str(num):
# 	return str(num)
# print(to_int(1234))

# print(-13 % 64)
# print(50 % 25)
# print(-6 % 3)


# U5 W2 P1 Task 7
# def U5W2P1_Task7(a, filter_list):
#     output = []
#     # print(output)
#     if(filter_list ==[]):
#         return a
#     for j in range(len(filter_list)):
#         for i in range(len(a)):
#             if(a[i] == filter_list[j] ):
#                 a[i] = ''
#     for x in a:
#         if(x != ''):
#             output.append(x)
#     return output
    
# a = [1, 7, 2, 10, 7]
# filter_list =  [2, 7]
# print(U5W2P1_Task7(a, filter_list))


# U5 W2 P1 Task 8
# def U5W2P1_Task8(n, m):
#     arr = []
#     output = []
#     for x in range(n):
#         for y in range(m):
#             arr.append("A")
#         output.append(''.join(arr))
#         arr  = []
#     return output
# n = 3
# m = 2
# print(U5W2P1_Task8(n, m ))

# U5 W2 P1 Task 9
# def U5W2P1_Task9(elements):
#     length = len(elements)
#     # print(length)
#     for i in range(length):
#         count = 0
#         # print(i)
#         for j in range(length):
#             # print(j)
#             if(elements[j] == j+1):
#                 count += 1
#                 # print("#")
#         if(count == length): return i
#         elements.append(elements.pop(0))
#     return -1
        

# # elements = [1, 4, 2, 3]
# elements = [2, 3, 4, 1]
# # elements = [1,2,3,4]
# # elements = [3, 4, 5, 1, 2]

# print( U5W2P1_Task9(elements) )


# U5 W2 P1 Task 10
def U5W2P1_Task10(digits):
    
    length  = len(digits)
    arr = [] 
    strArr = []
    output = []
    # print(length)
    for x in range(length):
        arr.append(str(digits[x]))
        # print( x )
    # print( list(str(int(''.join(arr)) + 1)) )
    strArr = list(str(int(''.join(arr)) + 1))
    for n in strArr:
        output.append( int(n) )
        

    # str = ''.join()
    # print( o)
    return output

# digits = [0,1,2,3]
# digits = [0,1,2,0]
digits = [9,9,9,9]
# digits = [9,9,9,9.1]
# digits = [9,9,9,undefined]
# digits = [undefined,9,9,undefined]
# digits = ['0']
# digits = [0,0,0]
# digits = [0,0,1]
# digits = []
print( U5W2P1_Task10(digits) )


print('------------end------------')
