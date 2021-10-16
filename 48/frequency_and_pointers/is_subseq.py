import doctest

#Write a function called isSubsequence which takes in two strings
#  and checks whether the characters in the first string form a subsequence
#  of the characters in the second string. 
# In other words, the function should check 
# whether the characters in the first string appear somewhere in the second string, 
# without their order changing.

# isSubsequence('hello', 'hello world'); // true
# isSubsequence('sing', 'sting'); // true
# isSubsequence('abc', 'abracadabra'); // true
# isSubsequence('abc', 'acb'); // false (order matters)

#Is each char of our string found in order in the longer_seq?
# O(N+M)

#Initial thoughts:
#We iterate ourstring
#If our current letter is found before the last idx of the next letter
#We are still safe and can then check the next letter in the same way
#We use a dict somehow?

#CLOSE SOLUTION FOR O(N**2), but still not
def is_subseq(our_string, longer_seq):
    """
    >>> is_subseq('hello', 'hello world')
    True
    >>> is_subseq('sing', 'sting')
    True
    >>> is_subseq('abc', 'abracadabra')
    True
    >>> is_subseq('abc', 'acb')
    False
    >>> is_subseq('hello', 'heelo')
    False
    >>> is_subseq('llll', 'leeeeel')
    False
    >>> is_subseq('eell', 'elel')
    False
    """

    #Make them sets, so you can delete from them
    our_string_list = [char for char in our_string]
    longer_seq_list = [char for char in longer_seq]

    our_char_map = {}
    our_longer_map = {}
    for char in our_string:
        if char in our_char_map:
            our_char_map[char] += 1
        else:
            our_char_map[char] = 1
    for char in longer_seq:
        if char in our_longer_map:
            our_longer_map[char] += 1
        else:
            our_longer_map[char] = 1


    #Check for our_string being too short
    if len(longer_seq) < len(our_string): 
        return False
    for i in range(len(our_string)-1):
        #If we have fewer entries of that letter in our longer string
        if our_char_map[our_string[i]] > our_longer_map[our_string[i]]:
            return False

        curr_char = our_string[i]
        next_char = our_string[i+1]
        curr_char_next_idx = longer_seq.index(curr_char)
        next_char_last_idx = longer_seq.rindex(next_char)

        if curr_char_next_idx >= next_char_last_idx:
            return False
 
    return True


#Second thoughts:
    #Ok, we need to make some sort of data structure that we can delete from
    #We are checking our values against an updated data_structure that
    #   will remove our curr_char's value from the updated list and all values before it
    # i.e. 'helloh' and 'aaahaealalaoaha
    #   h is found finds h at position 3
    # is h at position 3 before e's last position? (5) yes
    # remove h and all left of it
    # is e in 'aealalaoaha'? yes, is it before l's last position?




doctest.testmod()