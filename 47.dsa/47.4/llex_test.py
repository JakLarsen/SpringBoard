from llex import LinkedList, Node
from unittest import TestCase

class LinkedListTestCase(TestCase):

    """ Unit Tests for Linked List and Doubly Linked List Functionality """

    def test_push(self):
        """ Appends a Node, Increments Length, Updates Indices """

        testLL = LinkedList()

        testLL.push(5)
        self.assertEqual(testLL.length, 1)
        self.assertEqual(testLL.head.val, 5)
        self.assertEqual(testLL.tail.val, 5)
        self.assertEqual(testLL.tail.idx, 0)

        testLL.push(7)
        self.assertEqual(testLL.length, 2)
        self.assertEqual(testLL.head.val, 5)
        self.assertEqual(testLL.tail.val, 7)
        self.assertEqual(testLL.tail.idx, 1)

        testLL.push(-4)
        self.assertEqual(testLL.length, 3)
        self.assertEqual(testLL.head.val, 5)
        self.assertEqual(testLL.tail.val, -4)
        self.assertEqual(testLL.tail.idx, 2)

    def test_update_length(self):
        """ Updates the length of the LinkedList Object """

        testLL = LinkedList()

        self.assertEqual(testLL.length, 0)
        testLL.push(0)
        self.assertEqual(testLL.length, 1)
        testLL.push(3)
        testLL.push(4)
        self.assertEqual(testLL.length, 3)
    
    def test_update_indices(self):
        """ Tests all functions for proper index updating """

        testLL = LinkedList()

        testLL.push(1)
        self.assertEqual(testLL.head.idx, 0)
        self.assertEqual(testLL.head.val, 1)

        testLL.push(2)
        self.assertEqual(testLL.head.idx, 0)
        self.assertEqual(testLL.head.val, 1)
        self.assertEqual(testLL.tail.idx, 1)
        self.assertEqual(testLL.tail.val, 2)

        testLL.addToHead(0)
        self.assertEqual(testLL.head.idx, 0)
        self.assertEqual(testLL.head.val, 0)
        self.assertEqual(testLL.tail.idx, 2)
        self.assertEqual(testLL.tail.val, 2)

        testLL.push(3)
        self.assertEqual(testLL.head.idx, 0)
        self.assertEqual(testLL.head.val, 0)
        self.assertEqual(testLL.head.next.idx, 1)
        self.assertEqual(testLL.head.next.val, 1)
        self.assertEqual(testLL.head.next.next.idx, 2)
        self.assertEqual(testLL.head.next.next.val, 2)
        self.assertEqual(testLL.head.next.next.next.idx, 3)
        self.assertEqual(testLL.head.next.next.next.val, 3)
        self.assertEqual(testLL.tail.idx, 3)
        self.assertEqual(testLL.tail.val, 3)

        testLL.popTail()
        self.assertEqual(testLL.head.idx, 0)
        self.assertEqual(testLL.head.val, 0)
        self.assertEqual(testLL.head.next.idx, 1)
        self.assertEqual(testLL.head.next.val, 1)
        self.assertEqual(testLL.head.next.next.idx, 2)
        self.assertEqual(testLL.head.next.next.val, 2)
        self.assertEqual(testLL.tail.idx, 2)
        self.assertEqual(testLL.tail.val, 2)

        testLL.popHead()
        self.assertEqual(testLL.head.idx, 0)
        self.assertEqual(testLL.head.val, 1)
        self.assertEqual(testLL.head.next.idx, 1)
        self.assertEqual(testLL.head.next.val, 2)
        self.assertEqual(testLL.tail.idx, 1)
        self.assertEqual(testLL.tail.val, 2)


        


