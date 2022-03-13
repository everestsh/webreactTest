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
# U5 W2 P1 Task 10   ?????
def U5W2P1_Task11(a, b):
    result = []
    resultInt = 0
    i = len(a)-1
    j = len(b)-1
    carry = 0
    while(i>=0 or j>=0):
        digitA = int(a[i]) if(i>=0) else 0
        digitB = int(b[j]) if(j>=0) else 0 
        i= i-1
        j= j-1
        # print(type(digitA), digitB)

        sum = digitA + digitB +carry
        print(i,digitA, digitB, carry, sum)
        if(sum>=2):
            carry = 1
            sum -= 2
        else:
            carry
        
        resultInt = sum + resultInt
        result.append(resultInt)
    
    # if(carry == 1):
    #     result = '1' +result
    return result


a = "1000"
# a = "12345678"
b = '11'

print( U5W2P1_Task11(a, b) )


# ################################
# U5 W2 P1 Task 12
# def U5W2P1_Task12(arr):
#     output = []
#     for i in range(len(arr)-2):
#         # print(i)
#         if(( arr[i]+arr[i+1] > arr[i+2] ) and ( arr[i]+arr[i+2] > arr[i+1] )and ( arr[i+1]+arr[i+2] > arr[i] ) ):
#             output.append(1)
#         else:
#             output.append(0)
#     return output

# arr = [1,2,2,4]
# print( U5W2P1_Task12(arr) )
print('------------end------------')
