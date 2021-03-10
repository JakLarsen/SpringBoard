from math import sqrt
from random import randint



class Triangle:
	def __init__(self, a, b):
		self.a = a
		self.b = b


	@classmethod
	def random(cls):
		return cls(randint(1,20),randint(1,20))

	def get_hypotenuse(self):
		return sqrt(self.a ** 2 + self.b ** 2)\

	def get_area(self):
		return ((self.a*self.b)/2)

t = Triangle(3,4)
e = Triangle.random()
print(t.get_hypotenuse())
print(t.get_area())