


class Node:

    def __init__(self, val, children=[]):
        self.val = val
        self.children = children


    #DEPTH FIRST SEARCH - UTILIZES A STACK

    def findDFS(self, val):
        #(2): We create our stack (just a list in this example)
        #   This starts as ['html', children...]
        #   Second iteration has [['head', children...], ['body', children...]]
        #   Third iteration has [['title', []],['meta', []], ['body', children...] ]
        #   Fourth iteration has [['meta', []], ['body', children...] ]
        #   Fifth iteration has [['body', children...] ]
        #   Sixth iteration has [['div1', []]], ['div2', []] and RETURNS the node where 'div1' is contained
        toVisitStack = [self]

        #Is anything in the stack to visit? Yes
        while(len(toVisitStack)):

            #We pop the current Node off the stack to check through
            #   This is our root node, 'html'
            #   Second iteration pops ['head', children]
            current = toVisitStack.pop()
            #This shows us that we're visiting each thing backwards actually
            #   This is ideal for this structure because popping only cost O(1) from the end.
            print('Visiting: ', current.val)
            #Is the current node's val == 'div1'? no so we go to append loop
            if current.val == val:
                return current

            #For each child of this node, 'html' ['head', children...], ['body', children...]
            #   We append it to the stack to check
            #   Second iteration appends ['title', []],['meta', []] to our toVisitStack
            for child in current.children:
                toVisitStack.append(child)
        
        return None

    #BREDTH FIRST SEARCH - USE A QUEUE

    def findBFS(self, val):

        toVisitQueue = [self]
        while(len(toVisitQueue)):

            current = toVisitQueue.pop(0)
            print('Visiting: ', current.val)

            if current.val == val:
                return current

            for child in current.children:
                toVisitQueue.append(child)
    
    def findLowestRankBFS(self,val):

        toVisitQueue = [self]

        total_node_touches = 1
        lowestRankMatch = None
        lowestRankNodeTouches = None

        while(len(toVisitQueue)):

            current = toVisitQueue.pop(0)
            print('Visiting: ', current.val)

            if current.val == val:
                lowestRankMatch = current
                lowestRankNodeTouches = total_node_touches

            for child in current.children:
                toVisitQueue.append(child)

            total_node_touches += 1

        return (lowestRankMatch, lowestRankNodeTouches)




bob = Node('bob')
barb = Node('barb')
barry = Node('barry')
amy = Node('amy', [bob, barb, barry])
print(amy.children)
bob_node = amy.children[0]
bob_val = bob_node.val
[print(bob_val)]

htmlEl = Node('html', 
    [
        Node('head',
            [Node('title'), Node('meta')]
        ),
        Node('body',
            [Node('div1'), Node('div2'), Node('head')]
        )
    ])
print(htmlEl)

#(1): We start by calling our class method to see if the value 'div1' is in any of the nodes
our_div1 = htmlEl.findDFS('div1')
our_div3 = htmlEl.findDFS('div3')
print(our_div1.val)
print(our_div1)
print(our_div3)

our_highest_head = htmlEl.findBFS('head')
print(our_highest_head.val)
print(our_highest_head)

our_lowest_head, our_lowest_rank_node_touches = htmlEl.findLowestRankBFS('head')
print(our_highest_head.val)
print(our_highest_head, our_lowest_rank_node_touches)



    
