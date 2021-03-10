from classpractice import Triangle
from math import sqrt
from random import randint

class ColoredTriangle(Triangle):

	def __init__(self, a, b, color):
		super().__init__(a,b)
		self.color = color

	@classmethod
	def random(cls, color):
		return cls(randint(1,20),randint(1,20),color)

	def describe(self):
		msg = super().describe()
		return msg + f". I am {self.color}"