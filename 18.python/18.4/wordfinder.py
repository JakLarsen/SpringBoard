from random import randrange


class WordFinder():
	"""

	A class used to read in a list of words from a file and return a random word

	Atrritbutes:
	----------
	file_path = file path; text document with line separated words

	Doctests:
	----------
	>>> words = WordFinder('words.txt')

    >>> words.readFile()
    ['cat', 'dog', 'porcupine']

    >>> words.random() in ['cat', 'dog', 'porcupine']
    True

	"""

	def __init__(self, file_path):
		"""Instantiate a new WordFinder instance with a specified file"""
		self.file_path = file_path
		self.file_contents = []

	def __repr__(self):
		"""Update representation of the class"""
		return f"WordFinder Class({self.file_path})."

	def __str__(self):
		"""Update printable output of the class"""
		return f"This is a WordFinder class that is using the file at {self.file_path}."

	def readFile(self):
		"""Opens the file given on instantiation and returns an array of the words found"""
		f = open(self.file_path, "r")
		self.file_contents = f.read().split("\n")
		f.close()
		return self.file_contents

	def random(self):
		"""Returns a random word from the words found in the file"""
		return self.file_contents[randrange(len(self.file_contents))]


words = WordFinder('words.txt')



class SpecialWordFinder(WordFinder):

	"""

	A Subclass of WordFinder class used to read in a list of words from a file and return a random word
	-Accounts for empty word strings and comment characters ('#')

	Atrritbutes:
	----------
	file_path = file path; text document with line separated words

	Doctests:
	----------
	>>> special = SpecialWordFinder('special_words.txt')

    >>> special.readFile()
    ['#Veggies', '', 'kale', 'parsnips', '', '#Fruits', '', 'apple', 'mango']

    >>> special.sortSpecials()

    >>> special.random() in ['kale', 'parsnips', 'apple', 'mango']
    True

	"""

	def __init__(self, file_path):
		"""
		-Instantiate a new SpecialWordFinder instance with a specified file
		-Parent Class: WordFinder
		"""
		super().__init__(file_path)
		self.file_contents = []

	def __repr__(self):
		"""Update representation of the class"""
		return f"SpecialWordFinder(file_path = {self.file_path})."

	def __str__(self):
		"""Update printable output of the class"""
		return f"This is a Special WordFinder class to sort out line returns and comment characters('#')."

	def sortSpecials(self):
		"""
		-Sorts out empty words "" from linebreaks and commented out words that start with "#"
		-Unique to SpecialWordFinder
		-Returns the new list of words
		"""
		return self.file_contents = [word for word in self.file_contents if word != "" and not word.startswith("#")]

special = SpecialWordFinder('special_words.txt')