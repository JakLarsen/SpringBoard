




class NaryNode:
    def __init__(self, val, children=[]):
        self.val = val
        self.children = children

#Alternatively, you can add all nodes and children to a queue then pop and add
def sumValues(node):

    our_sum = 0

    #EDGE CASE: EMPTY TREE
    if node is None:
        return 0

    #Add our node to sum
    our_sum += node.val

    #BASE CASE: node has no children
    if not node.children:
        return node.val

    #Iterate over remaining children
    for child in node.children:
       our_sum += sumValues(child)
    
    return our_sum

def countEvens(node):

    evens = 0

    #EDGE CASE: EMPTY TREE

    #if our node is even, add to count
    if node.val % 2 == 0 and node.val != 0:
        evens += 1
    
    #BASE CASE: node has no children
    if not node.children:
        return evens
    
    #Iterate over remaining children
    for child in node.children:
        evens += countEvens(child)

    return evens

def nextLargerElementUtil(node, val):
    
    global res

    #BASE CATCH = EMPTY TREE
    if (node == None):
        return
    
    #FIRST TOUCH HERE IS AT NODE.VAL == 4
    # Which updates res to the node(4)
    #AT NODE.VAL == 5
    # res.val == 4 < node.val == 5, so doesn't run
    if (node.val > val):
        if ((res == None or (res).val > node.val)):
            res = node
            
    for child in node.children:
        nextLargerElementUtil(child, val)
    return
    
def nextLarger(node,val):
   
    global res
    res = None
     
    nextLargerElementUtil(node, val)
     
    return res.val


node_3_0_2 = NaryNode(9)
node_3_2_1 = NaryNode(8)
node_3_1_1 = NaryNode(7)
node_3_0_1 = NaryNode(6)
node_2_2_1 = NaryNode(5, [node_3_0_2])
node_2_1_1 = NaryNode(4, [node_3_0_1, node_3_1_1, node_3_2_1])
node_2_0_1 = NaryNode(3)
node_1_1_0 = NaryNode(2, [node_2_0_1, node_2_1_1, node_2_2_1])
node_1_0_0 = NaryNode(1)
root = NaryNode(0, [node_1_0_0, node_1_1_0])

print(sumValues(root)) #45
print(countEvens(root)) #4
print(nextLarger(root, 8)) # 9