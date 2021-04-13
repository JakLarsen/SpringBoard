def searchForFloor(arr, left, right, num):   
    if num > arr[-1]:
        return arr[-1]
    elif num < arr[0]:
        return -1
    
    mid = (left+right)//2

    if left <= right:
        if arr[mid] == num:
            return arr[mid]
        elif mid > 0 and arr[mid-1] <= num and num < arr[mid]:
            return arr[mid-1]
        elif num < arr[mid]:
            return searchForFloor(arr, left, mid-1, num)
        elif num > arr[mid]:
            return searchForFloor(arr, mid+1, right, num)
    return -1
    
    
def findFloor(arr, num):
    return searchForFloor(arr, 0, len(arr)-1, num)




# print(isDuplicate([1,2,8,10,10,12,19],10,3))
# print(isDuplicate([1,2,8,10,10,12,19],10,4))
# print(isDuplicate([1,2,8,10,10,12,19],8,2))

print(findFloor([1,2,8,10,10,12,19],9)) #8
print(findFloor([1,2,8,10,10,12,19],20)) #19
print(findFloor([1,2,8,10,10,12,19],0)) #-1
print(findFloor([1,2,8,10,10,12,19],10)) #10