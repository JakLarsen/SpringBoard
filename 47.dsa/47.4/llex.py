



class Node:
    #constructor
    def __init__(self, val, next = None):
        self.val = val
        self.next = next
        self.idx = None

class LinkedList:
    #constructor
    def __init__(self, head = None, tail = None):
        self.head = head
        self.tail = tail
        self.length = 0

    def updateLength(self, adjust):
        self.length += adjust
        print(f'Length: {self.length}')

    def updateIndices(self, startIndex, headRemoved = False):
        print(f'In updateIndices()')

        current = self.head
        while current.idx != startIndex:
            current = current.next
        
        current.idx = startIndex
        if headRemoved:
            counter = 0
        else:
            counter = startIndex
        while current:
            current.idx = counter
            current = current.next
            counter += 1

    def getAt(self, idx):
        if self.head == None: 
           raise TypeError('There are no Nodes in the Linked List yet.')
        current = self.head
        while current:
            if current.idx == idx:
                return current.val
            else:
                current = current.next
        raise TypeError('Invalid index. Does not exist.')

    def push(self, val):
        print(f'Push: {val}')

        newNode = Node(val)
        if not self.head:
            self.head = newNode
            self.tail = newNode


            newNode.idx = self.length
            print(f'newNode.idx: {newNode.idx}')
            self.updateIndices(self.length)
            self.updateLength(1)

        else:
            self.tail.next = newNode
            self.tail = newNode

            newNode.idx = self.length
            print(f'newNode.idx: {newNode.idx}')
            self.updateIndices(self.length)
            self.updateLength(1)

        return None

    def addToHead(self, val):
        print(f'Adding To Head: {val}')

        newNode = Node(val)
        newNode.next = self.head
        self.head = newNode
        newNode.idx = 0

        self.updateIndices(0)
        self.updateLength(1)

        return None
    
    def popTail(self):
        print(f'popTail')

        if self.head == None: 
           raise TypeError('There are no nodes to remove.')
        if self.head.next == None:
            old_tail = self.head.val
            self.head = None

            self.updateLength(-1)
            return old_tail

        second_tail = self.head
        while(second_tail.next.next):
            second_tail = second_tail.next
        old_tail = second_tail.next.val
        second_tail.next = None

        self.updateLength(-1)
        return old_tail
    
    def popHead(self):
        print(f'popHead')
        if self.head == None:
            raise TypeError('There are no nodes to remove.')
        oldHead = self.head.val
        self.head = self.head.next

        self.updateLength(-1)
        #We start at index 1 because the node with idx 0 doesn't exist right now
        self.updateIndices(1, True)
        return oldHead

    def printLL(self):
        current = self.head
        print('Our LinkedList: ')
        while(current):
            print(f'current.idx: {current.idx} ')
            print(f'Node: {current.val}')
            current = current.next


ourLL = LinkedList()
# oldHead = ourLL.popHead() //should raise error
# oldTail = ourLL.popTail() //should raise error 
# ourVal = ourLL.getAt(1) //should raise error
ourLL.push(3)
ourLL.push(5)
ourLL.addToHead(1)
ourLL.push(4)
ourLL.printLL()
oldTail = ourLL.popTail()
print(f'old tail: {oldTail}')
oldHead = ourLL.popHead()
print(f'old head: {oldHead}')
ourLL.printLL()
ourVal = ourLL.getAt(0)
print(ourVal)
ourVal = ourLL.getAt(1)
print(ourVal)
# ourVal = ourLL.getAt(4) //should raise error


