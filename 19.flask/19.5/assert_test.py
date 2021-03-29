def adder(x,y):
    print(x+y)
    return x+y

assert adder(2,5) == 7
assert adder(2,7) == 10, "expected 2+7 to = 10"
#never runs because code execution is stopped at second assert
#makes assert not really a great way to test
#also do not get a lot of information
#not that useful or common
#You use it to potentially detect a bug that you might expect and you want to stop code immediately
# - probably another option for that as well
assert adder(2,4) == 10, "expected 2+4 to = 10" 