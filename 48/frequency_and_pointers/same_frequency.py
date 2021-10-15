import doctest
#Write a function called sameFrequency. 
# Given two positive integers, 
# find out if the two numbers have the same frequency of digits.

#sameFrequency(182,281) // true
# sameFrequency(34,14) // false
# sameFrequency(3589578, 5879385) // true
# sameFrequency(22,222) // false

#Initial thoughts:
    #I'm going make separate frequency maps for each
    #For each key in the first map, I'm going to see if it has the same freq
    #As its matching key in the second map
    #Initial check for same length is important so one map cant contain the other + extra data

def same_frequency(num1, num2):
    """
    >>> same_frequency(182,281)
    True
    >>> same_frequency(34,14)
    False
    >>> same_frequency(3589578, 5879385)
    True
    >>> same_frequency(22,222)
    False
    """
    num1 = str(num1)
    num2 = str(num2)
    num1_map = {}
    num2_map = {}

    if len(num1) != len(num2):
        return False

    #(O(N))
    for digit in num1:
        if digit in num1_map:
            num1_map[digit] += 1
        else:
            num1_map[digit] = 1
    #+ (O(N))
    for digit in num2:
        if digit in num2_map:
            num2_map[digit] += 1
        else:
            num2_map[digit] = 1

    #+ (O(N))
    for key in num1_map:
        if key not in num2_map:
            return False
        elif num1_map[key] != num2_map[key]:
            return False
    
    return True

doctest.testmod()


