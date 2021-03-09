nums = [1,2,3,4,5,6,7,8,9,10]
evens = [num for num in nums if num % 2 == 0]
print(evens)
doubled_evens = [num * 2 for num in nums if num % 2 == 0]
print(doubled_evens)

[[0 for y in range(3)] for row in range(3)]



def gen_board(size, intial_val = None):
    return [[intial_val for y in range(size)] for row in range(size)]

print(gen_board(5, 0))

