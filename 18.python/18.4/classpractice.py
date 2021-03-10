from math import sqrt
from random import randint



class Triangle:
	"""
	A class used to represent a right triangel

	Attributes
	---------
	a: int length of side a
	b: int length of side b
	"""
	def __init__(self, a, b):
		self.a = a
		self.b = b

	#any information necessary to recreate object
	def __repr__(self):
		return f"Triangle(a = {self.a}, b = {self.b})"
	
	#human readable version of the class
	def __str__(self):
		return self.describe()

	def __eq__(self, other):
		return ((self.a == other.a and self.b == other.b) or (self.a == other.b and self.b == other.a))

	@classmethod
	def random(cls):
		"""Class method which returns Triangle with random sides"""
		return cls(randint(1,20),randint(1,20))



	def get_hypotenuse(self):
		"""Calculates hypotenuse of Triangle"""
		return sqrt(self.a ** 2 + self.b ** 2)

	def get_area(self):
		return ((self.a*self.b)/2)

	def describe(self):
		return f"I am a triangle with sides: {self.a} and {self.b}"

t = Triangle(3,4)
f = Triangle(3,4)
r = Triangle(4,3)
e = Triangle.random()
print(t.get_hypotenuse())
print(t.get_area())
# help(Triangle)


