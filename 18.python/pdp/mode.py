def mode(nums):
    """Return most-common number in list.

    For this function, there will always be a single-most-common value;
    you do not need to worry about handling cases where more than one item
    occurs the same number of times.

    >>> mode([1, 2, 1])
    1

    >>> mode([2, 2, 3, 3, 2])
    2
    """
    ourDic = {}
    
    for num in nums:
        if num in ourDic:
            ourDic[num] += 1
        else:
            ourDic[num] = 1

    ourMode = next(iter(ourDic.items()))

    for key, value in ourDic.items():
        if value >= ourMode[1]:
            ourMode = (key, value)

    return ourMode[0]

print(mode([1,2,1,2,1,3,1,3]))
print(mode([0,0,0,2,1,3,1,3]))
print(mode([2,2,1]))
