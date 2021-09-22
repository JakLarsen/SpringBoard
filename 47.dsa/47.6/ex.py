

#product([2, 3, 4])   // 24
ourLi = [2,3,4]
def product(aLi, i=0):
    if i == len(aLi): return 1
    return aLi[i] * product(aLi, i+1)
print(product(ourLi)) #24

#longest(["hello", "hi", "hola"])  // 5
def longest(aLi, i = 0, longest_word = 0):
    if i == len(aLi): return longest_word
    if len(aLi[i]) > longest_word:
        longest_word = len(aLi[i])
    return longest(aLi, i+1, longest_word)
print(longest(['hello','hi','hola']))

#everyOther("hello")  // "hlo"
def every_other (aStr, i=0, word = ""):
    #EDGE CASE
    if len(aStr) == 0 or len(aStr) == 1: return aStr
    word += aStr[i]
    #BASE CASE EVEN
    if len(aStr) % 2 == 0 and i >= len(aStr)-2: return word
    #BASE CASE ODD
    elif i > len(aStr)-2: return word
    return (every_other(aStr, i+2, word))
print(every_other("hello"))
print(every_other("hell"))
print(every_other(""))
print(every_other("I"))

def isPalindrome(aStr, i=0):
    #Compare outer letters
    isTrue = (aStr[i] == aStr[len(aStr)-i-1])
    #if outer letters aren't the same, return immediately
    if isTrue == False: return False
    #If i is middle or one before for odds (doesn't change last letter's symmetry)
    if i == (len(aStr)//2): return isTrue
    return isPalindrome(aStr, i + 1)
print(isPalindrome("tacocat"))  #// true
print(isPalindrome("tacodog"))  #// false


# /let animals = ["duck", "cat", "pony"];
# findIndex(animals, "cat");  // 1
# findIndex(animals, "porcupine");   // -1

# revString("porcupine") // 'enipucrop'


#  let nestedObj = {
#   firstName: "Lester",
#   favoriteNumber: 22,
#   moreData: {
#     lastName: "Testowitz"
#   },
#   funFacts: {
#     moreStuff: {
#       anotherNumber: 100,
#       deeplyNestedString: {
#         almostThere: {
#           success: "you made it!"
#         }
#       }
#     },
#     favoriteString: "nice!"
#   }
# };
# gatherStrings(nestedObj) // ["Lester", "Testowitz", "you made it!", "nice!"];    
