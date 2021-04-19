



class Node():
    #constructor
    def __init__(self, val, next = None, prev = None):
        print('new Node()')

        self.val = val
        self.next = next
        self.prev = prev
        self.idx = None

class DLL():
    #constructor
    def __init__(self, head = None, tail = None):
        print('new DLL()')

        self.head = head
        self.tail = tail
        self.length = 0

    def updateLength(self, adjust):
        print('updateLength()')

        self.length += adjust

    def updateIdx(self):
        print('updateIdx()')

        current = self.head
        counter = 0
        while current:
            current.idx = counter
            current = current.next
            counter += 1

    def push(self, val):
        print('push()')

        #if no nodes in DLL yet:
        if self.length == 0:
            self.addToHead(val)
        else:
            self.addToTail(val)
            
    
    def addToHead(self, val):
        print('addToHead()')

        newNode = Node(val)

        if self.length == 0:
            self.head = newNode
            self.tail = newNode
        else:
            newNode.next = self.head
            self.head = newNode

        self.updateIdx()
        self.updateLength(1)
    
    def addToTail(self, val):
        print('addToTail()')

        newNode = Node(val)
        current = self.head
        while current.next:
            current = current.next
        current.next = newNode
        newNode.prev = current

        self.updateIdx()
        self.updateLength(1)
    
    def printDLLPlus(self):
        print('\n')
        print('***** Our DLL Data *****')
        print('\n')

        print(f'Head IDX: {self.head.idx}')
        print(f'Head: {self.head}')
        print(f'Tail IDX: {self.tail.idx}')
        print(f'Tail: {self.tail}')
        print(f'Length: {self.length}')

        print('\n')

        current = self.head
        while current:
            print(f'IDX: {current.idx}, Value: {current.val}')
            print(f'prev: {current.prev}, next: {current.next}')
            current = current.next





        

    
def driver():
    print('\n')
    print('VROOM VROOM')
    print('\n')

    ourDLL = DLL()
    ourDLL.push(1)
    ourDLL.addToHead(0)
    ourDLL.addToTail(2)
    ourDLL.push(3)
    ourDLL.printDLLPlus()


driver()