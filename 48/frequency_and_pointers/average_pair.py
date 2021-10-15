import doctest


#Write a function called averagePair. 
# Given a sorted array of integers and a target average, 
# determine if there is a pair of values in the array where the average of the pair 
# equals the target average. There may be more than one pair that matches the average target.


#Initial thoughts:
    #We iterate through the list while creating a set of items to check against our val
    #Speedbump: How do you check if y is in the set when you have (idx + y)/2 = target
    #2*target - idx val
    #SO: we check if 2*target - idx val is already in our set, if yes, we return True

#Implementation:

def check_average_pair(our_list, target_avg):
    """
    >>> check_average_pair([1, 2, 3], 2.5)
    True
    >>> check_average_pair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)
    True
    >>> check_average_pair([-1, 0, 3, 4, 5, 6], 4.1)
    False
    >>> check_average_pair([], 4)
    False
    """

    list_to_check = set()

    for ele in our_list:
        #Or our idx's match has been added already
        if 2*target_avg - ele in list_to_check:
            return True 
        #Or our idx's match doesn't exist 
        else:
            list_to_check.add(ele)
    return False


doctest.testmod()


        