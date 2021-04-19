#Would creating an index to update 


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
        headRemoved = False

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

    def setAt(self, idx, val):
        if self.head == None or idx == 0:
            self.addToHead(val)

        current = self.head
        while current:
            if current.idx == idx:
                current.val = val
            else:
                current = current.next
        raise TypeError('Invalid index. Does not exist.')

    def insertAt(self, idx, val):
        #inserting at the head is the same as addToHead
        if self.head == None or idx == 0:
            self.addToHead(val)
        #inserting after the tail
        elif idx == self.length:
            self.push(val)
        else:
            #inserting within the LL
            #Have to update tail
            current = self.head
            while current.next.idx != idx:
                current = current.next
            
            #update new node's pointer to current's next then current's to it
            newNode = Node(val)
            newNode.idx = idx
            newNode.next = current.next
            current.next = newNode
            self.updateIndices(idx)

            self.updateLength(1)
    
    def removeAt(self, idx):
        if self.head == None:
            raise TypeError('There are no Nodes in the Linked List yet.')
        elif idx == 0:
            self.popHead()
        elif idx == self.length - 1:
            self.popTail()
        elif idx < self.length:
            current = self.head
            #iterate to node before the one to be removed
            while current.next.idx != idx:
                current = current.next
            #save destination
            tempNext = current.next.next
            #delete removed Node
            del current.next
            #update current's next to be the proper Node
            current.next = tempNext
            #Either one of these works to fix missing index problem
            # current.next.idx = idx
            self.updateIndices(idx - 1)
            self.updateLength(-1)
        else:
            raise TypeError('Invalid index. Does not exist.') 
        
            

    def push(self, val):
        print(f'Push: {val}')

        newNode = Node(val)
        if not self.head:
            self.head = newNode
            self.tail = newNode


            newNode.idx = self.length
            print(f'newNode.idx: {newNode.idx}')
            self.updateIndices(newNode.idx)
            self.updateLength(1)

        else:
            self.tail.next = newNode
            self.tail = newNode

            newNode.idx = self.length
            print(f'newNode.idx: {newNode.idx}')
            self.updateIndices(newNode.idx)
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
        self.tail = second_tail

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
        #Need to revist this to see if Boolean can take care of this nonsensical structuring
        self.updateIndices(1, True)
        return oldHead
    
    def getAverage(self):
        if self.head == None:
            raise TypeError('There are no nodes to average.')
        current = self.head
        ourSum = 0
        while current:
            ourSum+= current.val
            current = current.next
        return ourSum/self.length


    def printLL(self):
        current = self.head
        print('Our LinkedList: ')
        while(current):
            print(f'current.idx: {current.idx} ')
            print(f'Node: {current.val}')
            current = current.next
    
    def printLLPlus(self):
        current = self.head
        print('\n')
        print('*****Our LL extra data*****')
        print('\n')
        print(f'Length: {self.length}')
        print(f'head: {self.head}')
        print(f'head.next: {self.head.next}')
        print(f'tail: {self.tail}')
        print(f'tail.next: {self.tail.next}')
        while current:
            print(f'current.idx: {current.idx} ')
            print(f'Node: {current.val}')
            print(f'current.next: {current.next}')
            current = current.next

def driver():
    ourLL = LinkedList()
    # oldHead = ourLL.popHead() //should raise error
    # oldTail = ourLL.popTail() //should raise error 
    # ourVal = ourLL.getAt(1) //should raise error
    ourLL.push(3)
    ourLL.push(5)
    ourLL.insertAt(2, 11)
    ourLL.insertAt(2, 4)
    ourLL.push(7)
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
    ourVal = ourLL.getAt(2)
    print(ourVal)
    ourLL.removeAt(2)
    ourLL.push(9)
    ourLL.printLLPlus()
    avg = ourLL.getAverage()
    print(f'average: {avg}')

driver()


