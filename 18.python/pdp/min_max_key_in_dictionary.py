first_response = True


def min_max_keys(d):
    """Return tuple (min-keys, max-keys) in d.

        >>> min_max_keys({2: 'a', 7: 'b', 1: 'c', 10: 'd', 4: 'e'})
        (1, 10)

    Works with any kind of key that can be compared, like strings:

        >>> min_max_keys({"apple": "red", "cherry": "red", "berry": "blue"})
        ('apple', 'cherry')
    """



def show_questions():
	if first_response == True:
		first_reponse = False
		print('True', f'First_response is now: {first_reponse}')
	else:
		print('False')

show_questions()

