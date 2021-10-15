import doctest





#Write a function that accepts two strings: (message, letters)
#The function should return true if the message can be built with the letters you are given

#Inital thoughts: 
    #Iterate over message, for each letter, if it's in letters, remove from letters
    #If it's not in letters, return False

#SUBOPTIMAL - N**3 BADDDD
# def construct_note(message, letters):
#     our_letters = [i for i in letters]

#     #O(N)
#     for char in message:
#         #O(N)
#         if char in our_letters:
#             #(O(N))
#             our_letters.remove(char)
#         else:
#             return False
#     return True

# print(construct_note('aa','abc') == False)
# print(construct_note('abc','abcd') == True)
# print(construct_note('aabbccdd','abcdabcdff') == True)

#Second appraoch:
    #Create a frequency map of the letters in message and letters you have
    #For each letter in message map, make sure you have at least that many of that letter in letters map


#We're looking for O(M) + O(N) if M is length of message and N letters in string
#We're hitting O(M) + 2O(N) which equated in Big O
#Successful Solution
def construct_note(message, letters):
    """
    >>> construct_note('abcd', '')
    False
    >>> construct_note('','abcd')
    True
    >>> construct_note("skbjjjvnnd", "fdjlkjfeburevjvnfnsjckjncjdnchbechbadhsd")
    True
    >>> construct_note("abc", "abcd")
    True
    """
    our_message_map = {}
    our_letters_map = {}

    #O(N)
    for char in message:
        if char in our_message_map:
            our_message_map[char] += 1
        else:
            our_message_map[char] = 1
    # + O(N)
    for char in letters:
        if char in our_letters_map:
            our_letters_map[char] += 1
        else:
            our_letters_map[char] = 1
    # + O(N)
    for letter in our_message_map: 
        if letter not in our_letters_map:
            return False
        elif our_message_map[letter] > our_letters_map[letter]:
            # print('our message contains more of that letter than our string')
            return False

    return True

# print(construct_note('aa','abc') == False)
# print(construct_note('abc','abcd') == True)
# print(construct_note('aabbccdd','abcdabcdff') == True)

doctest.testmod()