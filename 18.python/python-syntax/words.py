




def print_upper_words(wordLi, start_letter):
	'''Takes a list of strings and prints them in ALL uppercase letters'''

	upper_wordLi = []
	for word in wordLi:
		if word[0] == start_letter:
			capi_word = "".join([char.capitalize() for char in word])
			print(capi_word)
			upper_wordLi.append(capi_word)

	return (" ".join(upper_wordLi))

upper_words_str = print_upper_words(["hello", "hey","goodbye","yo",'yes'], 'h')
print(upper_words_str)
