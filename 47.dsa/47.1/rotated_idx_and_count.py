




def findRotatedPivotIdx(arr, left, right):
    mid = (left + right)//2

    if left <= right:
    
        if arr[0] <= arr[-1]:
            return -1
        elif arr[mid] > arr[mid+1]:
            return mid
        elif arr[left] <= arr[mid]:
            return findRotatedPivotIdx(arr, mid+1, right)
        elif arr[left] > arr[mid]:
            return findRotatedPivotIdx(arr, left, mid-1)
    return -1

def BSearch(arr, left, right, num):
    mid = (left+right)//2

    if left <= right:
        if num == arr[mid]:
            return mid
        elif num > arr[mid]:
            return BSearch(arr, mid + 1, right, num)
        elif num < arr[mid]:
            return BSearch(arr, left, mid-1, num)
   
    return -1


def findRotatedIndex(arr, num):
    rotated_pivot_idx = findRotatedPivotIdx(arr, 0, len(arr)-1)
    
    if num < arr[0]:
        result = BSearch(arr, rotated_pivot_idx + 1, len(arr) - 1, num)
    elif  num >= arr[0]:
        result = BSearch(arr, 0, rotated_pivot_idx, num)

    return result

def findRotationCount(arr):
    rotated_pivot_idx = findRotatedPivotIdx(arr, 0, len(arr)-1)

    return rotated_pivot_idx + 1




# Assuming no duplicates...
# Assuming every idx is rotated by at least 1 position...

print(findRotatedIndex([3,4,1,2],4)) #1
print(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4],8)) #2
print(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4],3)) #6
print(findRotatedIndex([37,44,66,102,10,22],14)) #-1
print(findRotatedIndex([6, 7, 8, 9, 1, 2, 3],4)) #-1

print(findRotationCount([15,18,2,3,6,12])) #2
print(findRotationCount([15,2,3,6,12])) #1
print(findRotationCount([7,9,11,12,5])) #4
print(findRotationCount([7,9,11,12,15])) #0