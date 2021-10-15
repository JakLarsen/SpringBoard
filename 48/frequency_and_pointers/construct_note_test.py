import unittest
from construct_note import construct_note

class TestFactorial(unittest.TestCase):

    def test_construct_note(self):
        """
        Test if construct_note works

        -Should return False for an empty letter-string
        -Should return True for any empty message
        """

        res = construct_note('abcd', '')
        self.assertEqual(res, False)

        res = construct_note('','abcd')
        self.assertEqual(res, True)

if __name__ == '__main__':
    unittest.main()



#   it("should return true for empty message", function() {
#     expect(constructNote("", "abc")).toBe(true);
#   });

#   it("should account for duplicates", function() {
#     expect(constructNote("aa", "abcd")).toBe(false);
#   });

#   it("should handle large cases", function() {
#     expect(
#       constructNote("skbjjjvnnd", "fdjlkjfeburevjvnfnsjckjncjdnchbechbadhsd")
#     ).toBe(true);
#   });

#   it("should return true if all letters contained", function() {
#     expect(constructNote("abc", "abcd")).toBe(true);
#   });
# });