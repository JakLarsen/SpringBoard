import doctest
# Write a function called separatePositive 
# which accepts an array of non-zero integers. 
# Separate the positive integers to the left and the negative integers to the right. 
# The positive numbers and negative numbers need not be in sorted order. 
# The problem should be done in place (in other words, do not build a copy of the input array).

def separate_positive(our_list):
    """
    >>> separate_positive([2,-1,-3,6,-8,10])
    [2, 10, 6, -3, -8, -1]
    >>> separate_positive([5, 10, -15, 20, 25])
    [5, 10, 25, 20, -15]
    """
    neg_counter = 0
    i = 0

    our_mid = 0
    if len(our_list) % 2 != 0: 
        our_mid = len(our_list)//2 + 1
    else: 
        our_mid = len(our_list)//2


    while i < our_mid:
        if our_list[i] < 0:
            if our_list[-1-neg_counter] < 0:
                neg_counter += 1
            temp = our_list[-1-neg_counter]
            our_list[-1-neg_counter] = our_list[i]
            our_list[i] = temp
            neg_counter += 1
        i += 1
    return our_list
doctest.testmod()

#Initial thoughts:
#   Iterate, if negative, swap with last element in array that's non-neg
#      To do this we keep a counter of neg variavbles already placed and block off
#       Right side of array that many
#   If already a negative number in space to swap to, increment the amount of protected spaces
#
#Updated: We have to make a different mid-point for odd vs even numbered sets
#   With odd numbered sets, we have to check the middle number //2 + 1
#   With evne numbered sets, we only check through the mid left //2

