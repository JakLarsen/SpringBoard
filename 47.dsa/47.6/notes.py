#Loops and recursion can be interchanged depending on efficiency, etc.

# #ITERATIVE
# def count():
#     n = 1
#     while n <= 3:
#         print(n)
#         n+=1
# count()

# #RECURSION
def countRec(n=1):
    #BASE CASE - WE STOP RECURSING TO RETURN
    if n > 3: return
    print(n)
    countRec(n+1)
countRec()

ourLi = [1,2,3,5,7,9] #sum = 27
def sumLi(aLi, i = 0):
    #BASE CASE
    if i == len(aLi): return 0
    return aLi[i] + sumLi(aLi, i+1)
print(sumLi(ourLi))
#BIG O RUNTIMES - recreating smaller array each time On operation n times n^2 BAD
#Making tons of arrays - LOTS OF SPACE COMPLEXITY as well On^2

#So we use index instead for On runtime and space

our_list_to_flatten = [0,1,2,[2,4,6], 4, 3]
ourDoubledLi = []
def doubler(aLi):
    for n in aLi:
        if isinstance(n, list):
            doubler(n)
        else:
            ourDoubledLi.append(n*2)
    return ourDoubledLi
print(doubler(our_list_to_flatten))
