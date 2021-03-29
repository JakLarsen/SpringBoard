



def reverse_string(s):
    """
    Returns reverse of input string (s)
    """

    return s[::-1]

def is_palindrome(s):
    """
    Check if the string is a palindrome (reverse = forward seq of string)
    """
    return s.lower() == s[::-1].lower()

def factorial(n):
    """
    Calculates factorial
    """  
    if not (isinstance(n,int) and n >= 0):
        raise ValueError("'n' must be a non-negative integer!")
    if n == 0 or n == 1:
        return 1
    sumNum = 1
    for i in range(2, n+1):
        sumNum *= i
    return sumNum

def add(x,y):
    """
        Adds two numbers together.


        Functionality Examples:

        >>>add(1,1)
        2
        >>>add(-1,1)
        0
    
    """
    return x + y