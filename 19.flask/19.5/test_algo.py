import algo
from unittest import TestCase

class AlgoTestCase(TestCase):
    """Unittests"""

    def test_reverse(self):
        self.assertEqual(algo.reverse_string('hello'), 'olleh')
        self.assertEqual(algo.reverse_string('Hello'), 'olleH')
    
    def test_is_palindrome(self):
        self.assertEqual(algo.is_palindrome('racecar'), True)
        self.assertTrue(algo.is_palindrome('racecar'))
        self.assertTrue(algo.is_palindrome('Racecar'))
        self.assertFalse(algo.is_palindrome('taco'))

    def test_factorial_1(self):
        self.assertEqual(algo.factorial(0),1)
        self.assertEqual(algo.factorial(1),1)
        self.assertEqual(algo.factorial(2),2)
        self.assertEqual(algo.factorial(3),6)
        self.assertEqual(algo.factorial(4),24)
        self.assertRaises(ValueError, algo.factorial, -5)
        self.assertRaises(ValueError, algo.factorial, 4.3)

