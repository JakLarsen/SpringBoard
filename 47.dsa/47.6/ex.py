import unittest



def product(aLi, i=0):
    if i == len(aLi): return 1
    return aLi[i] * product(aLi, i+1)

def longest(aLi, i = 0, longest_word = 0):
    if i == len(aLi): return longest_word
    if len(aLi[i]) > longest_word:
        longest_word = len(aLi[i])
    return longest(aLi, i+1, longest_word)

def every_other (aStr, i=0, word = ""):
    #EDGE CASE
    if len(aStr) == 0 or len(aStr) == 1: return aStr
    word += aStr[i]
    #BASE CASE EVEN
    if len(aStr) % 2 == 0 and i >= len(aStr)-2: return word
    #BASE CASE ODD
    elif i > len(aStr)-2: return word
    return (every_other(aStr, i+2, word))

def isPalindrome(aStr, i=0):
    #Compare outer letters
    isTrue = (aStr[i] == aStr[len(aStr)-i-1])
    #if outer letters aren't the same, return immediately
    if isTrue == False: return False
    #If i is middle or one before for odds (doesn't change last letter's symmetry)
    if i == (len(aStr)//2): return isTrue
    return isPalindrome(aStr, i + 1)

def findIndex(aLi, val, i = 0):
    #BASE CASE: NOT FOUND
    if i == len(aLi): return -1
    #BASE CASE: FOUND
    if aLi[i] == val: return i
    return findIndex(aLi, val, i+1)

def revStr(aStr, i=0):
    i = len(aStr)-1
    #BASE CASE STR IS EMPTY
    if i == -1: return ""
    return aStr[i] + revStr(aStr[0:i], i-1)

def gatherStrings(nested_object, our_string_list = []):
    for key, value in nested_object.items():
        if isinstance(value, str):
            our_string_list.append(value)
        elif type(value) is dict:
            gatherStrings(value, our_string_list)
    return our_string_list



