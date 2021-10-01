



#N^2
def sumZero(num_list):
    for i in range(len(num_list)-1):
        if num_list[i] > 0: break
        for j in range(i+1, len(num_list)):
            if num_list[i] + num_list[j] == 0:
                return [num_list[i], num_list[j]]
    return -1



print(sumZero([-3, -2, -1, 0, 1, 2])) # => [-2,2]


#Multiple pointers is optimal if array is sorted
#N
def sumZero2(nums):
    left = 0
    right = len(nums) -1
    while left < right:
        if (nums[left] + nums[right]) == 0:
            return (nums[left], nums[right])
        elif (nums[left] + nums[right] > 0):
            right -= 1
        else:
            left += 1
    return -1


print(sumZero2([-30, -21, -10, -5, -4, -3, -2, -1, 0, 3, 6, 99])) # => [-3,3]
print(sumZero2([-30, -21, -10, -5, -4, -3, -2, -1, 0, 6, 99])) # => -1