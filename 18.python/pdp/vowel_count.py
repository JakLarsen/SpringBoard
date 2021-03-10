def vowel_count(phrase):
    """Return frequency map of vowels, case-insensitive.

        >>> vowel_count('rithm school')
        {'i': 1, 'o': 2}
        
        >>> vowel_count('HOW ARE YOU? i am great!') 
        {'o': 2, 'a': 3, 'e': 2, 'u': 1, 'i': 1}
    """
    vowels = {'a','e','i','o','u'}
    ourMap = {}
    for letter in phrase.lower():
    	if letter in vowels:
            #going to be redundant checking previous vowels
            #could just check to see if vowel in ourMap to prevent this
    		ourMap[letter] = phrase.lower().count(letter)
    return ourMap

print(vowel_count('rithm school'))
print(vowel_count('HOW ARE YOU? i am great!'))

