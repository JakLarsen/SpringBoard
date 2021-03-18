def list_check(myLi):
	""" Are all items in lst a list?

		>>> list_check([[1], [2, 3]])
		True

		>>> list_check([[1], "nope"])
		False
	"""
	for item in myLi:
		if type(item) != list:
			return False
	return True

print(list_check([[1], [2, 3]]))
print(list_check([[1], "nope"]))