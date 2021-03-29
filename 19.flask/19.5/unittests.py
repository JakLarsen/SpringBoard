import algo
from unittest import TestCase

class AdditionTestCase(TestCase):
    """Unit Tests"""

    def test_add_1(self):
        assert maths.add(2,3) == 5
        
    def test_add_2(self):
        #for better output use assertEqual methods
        self.assertEqual(maths.add(2,2),4)
        self.assertEqual(maths.add(40,50),90)
        self.assertEqual(maths.add(-2,-4),-6)