



#Take in a string and return a frequency map of the count of each char


def charCount(str):
    char_frequencies = {}
    #For each character, if we don't have it in our map, add it as key with val 1
    #If it is in there, increment value by 1
    for char in str:
        if char in char_frequencies:
            char_frequencies[char] += 1
        else:
            char_frequencies[char] = 1
    return char_frequencies


freq_map = charCount('hello')
print(freq_map)
# {
#   'h': 1,
#   'e': 1,
#   'l': 2,
#   'o': 1
# }