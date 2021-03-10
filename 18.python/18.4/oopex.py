



class SerialGenerator():
	"""
	A class used to represet a serial number generator

	Atrritbutes:
	----------
	start: int; intial starting value
	"""

	def __init__(self, start):
		self.start = start
		self.currVal = start

	def __repr__(self):
		"""Update representation of the class"""
		return f"SerialGenerator(start = {self.start})"

	def __str__(self):
		"""Update printable output of the class"""
		return f"I am a SerialGenerator class instance with the start of {self.start}."

	def generate(self):
		"""Increase serial generator by 1 to create next serial number"""
		self.currVal += 1
		return self.currVal

	def reset(self):
		"""Reset the serial generator back to its original starting value"""
		self.currVal = self.start

serial = SerialGenerator(100)