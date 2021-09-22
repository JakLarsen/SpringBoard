import unittest
from ex import product, longest, every_other, isPalindrome, \
    findIndex, revStr, gatherStrings

class TestRecursiveMethods(unittest.TestCase):

    def test_product(self):
        self.assertEqual(product([2,3,4]), 24)
    
    def test_longest(self):
        self.assertEqual(longest(['hello','hi','hola']), 5)
    
    def test_every_other(self):
        self.assertEqual(every_other('hello'), 'hlo')

    def test_isPalindrome(self):
        self.assertEqual(isPalindrome('tacocat'), True)
    
    def test_findIndex(self):
        self.assertEqual(findIndex(["duck", "cat", "pony"], 'cat'), 1)
    
    def test_revStr(self):
        self.assertEqual(revStr('porcupine'), 'enipucrop')

    def test_gatherStrings(self):
        self.assertEqual(gatherStrings({'first_name': 'Jake','number': 11,'more_data': {'last_name': 'Larsen'},'funFacts': {'moreStuff': {'numberPsyche!': 100,'deeplyNestedNonsense': {'almostThere': {'success': 'You made it!'}}},'favoriteWord': 'Coolbeans!'}}), ['Jake', 'Larsen', 'You made it!', 'Coolbeans!'])