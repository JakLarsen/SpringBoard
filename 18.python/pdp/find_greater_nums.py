def find_greater_nums(nums):
	counter = 0
	for i in range(len(nums)):
		print(f'i: {i}')
		for j in range(i, len(nums)-1):
			print(f'j: {j}')
			if nums[j] < nums [j+1]:
				counter += 1
				print(f'i: {i}, j: {j}, counter: {counter}')
	return counter

print(f'function call: {find_greater_nums([1, 2, 3])}')