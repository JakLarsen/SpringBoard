import doctest


#Write a function called twoArrayObject which accepts two arrays of varying lengths.
# The first array consists of keys and 
# the second one consists of values. 
# Your function should return an object created from the keys and values. 
# If there are not enough values, the rest of keys should have a value of null. 
# If there not enough keys, just ignore the rest of values.

# twoArrayObject(['a', 'b', 'c', 'd'], [1, 2, 3]) // {'a': 1, 'b': 2, 'c': 3, 'd': null}
# twoArrayObject(['a', 'b', 'c'], [1, 2, 3, 4]) // {'a': 1, 'b': 2, 'c': 3}
# twoArrayObject(['x', 'y', 'z'], [1, 2]) // {'x': 1, 'y': 2, 'z': null}

#Initial thoughts:
#we iterate an idx of the array, updating a dict with our k,v
#How do you catch out of index to put in null instead?
#If idx >= len(second_arr)
    #We just add null instead of checking idx to avoid

def two_array_object(keys_list, value_list):
    """
    >>> two_array_object(['a', 'b', 'c', 'd'], [1, 2, 3])
    {'a': 1, 'b': 2, 'c': 3, 'd': None}
    >>> two_array_object(['a', 'b', 'c'], [1, 2, 3, 4])
    {'a': 1, 'b': 2, 'c': 3}
    >>> two_array_object(['x', 'y', 'z'], [1, 2])
    {'x': 1, 'y': 2, 'z': None}
    """
    our_dict = {}

    for i in range(len(keys_list)):
        our_key = keys_list[i]
        if i >= len(value_list):
            our_value = None
        else:
            our_value = value_list[i]
        our_dict[our_key] = our_value
    return our_dict

doctest.testmod()