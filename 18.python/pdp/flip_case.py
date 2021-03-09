def flip_case(phrase, to_swap):
    """Flip [to_swap] case each time it appears in phrase.

        >>> flip_case('Aaaahhh', 'a')
        'aAAAhhh'

        >>> flip_case('Aaaahhh', 'A')
        'aAAAhhh'

        >>> flip_case('Aaaahhh', 'h')
        'AaaaHHH'

    """

    swappedCaseString = ""
    for char in phrase:
    	if char.lower() == to_swap.lower():
    		swappedCaseString += char.swapcase()
    	else:
    		swappedCaseString += char;
    return swappedCaseString
    		
print(flip_case('Aaaahhh','a'))

# if __name__ == "__main__":
# 	import doctest
# 	doctest.testmod()