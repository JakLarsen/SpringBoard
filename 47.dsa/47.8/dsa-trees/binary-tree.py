
import sys



class BinaryTreeNode:
    def __init__(self , val):
        self.val = val
        self.left = None
        self.right = None
 
def minDepth(node):
    # EDGE CASE - ROOT DOESN'T EXIST
    if node is None:
        return 0
     
    # BASE CASE: Hit end of path/leaf node
    if node.left is None and node.right is None:
        return 1
     
    # IF NO LEFT PATH, RECURSE OVER RIGHT PATH
    if node.left is None:
        return minDepth(node.right) + 1
     
    # IF NO RIGHT PATH, RECURSE OVER LEFT PATH
    if node.right is None:
        return minDepth(node.left) + 1
     
    return min(minDepth(node.left), minDepth(node.right)) + 1

def maxDepth(node):
    #EDGE CASE - ROOT DOESN'T EXIST
    if node is None:
        return 0

    # BASE CASE: Hit end of path/leaf node
    if node.left is None and node.right is None:
        return 1
     
    # IF NO LEFT PATH, RECURSE OVER RIGHT PATH
    if node.left is None:
        return maxDepth(node.right) + 1
     
    # IF NO RIGHT PATH, RECURSE OVER LEFT PATH
    if node.right is None:
        return maxDepth(node.left) + 1
     
    return max(minDepth(node.left), maxDepth(node.right)) + 1

def maxSum(node, result=-sys.maxsize):
 
    # base case: empty tree
    if node is None:
        return 0, result
 
    # find maximum path sum "starting" from the left child
    left, result = maxSum(node.left, result)
 
    # find maximum path sum "starting" from the right child
    right, result = maxSum(node.right, result)
 
    # Try all possible combinations to get the optimal result
    result = max(result, node.val)
    result = max(result, node.val + left)
    result = max(result, node.val + right)
    result = max(result, node.val + left + right)
 
    # return the maximum path sum "starting" from the given node
    return max(node.val, node.val + max(left, right)), result


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
            
    if node.left:
        nextLargerElementUtil(node.left, val)
    if node.right:
        nextLargerElementUtil(node.right, val)
    return
    
def nextLarger(node,val):
   
    global res
    res = None
     
    nextLargerElementUtil(node, val)
     
    return res.val



our_tree = BinaryTreeNode(1)
our_tree.left = BinaryTreeNode(2)
our_tree.right = BinaryTreeNode(3)
our_tree.left.left = BinaryTreeNode(4)
our_tree.left.right = BinaryTreeNode(5)
print(minDepth(our_tree)) #2
print(maxDepth(our_tree)) #3
print(maxSum(our_tree)) #(8, 11)
print(nextLarger(our_tree, 3)) # 4












#   /** nextLarger(lowerBound): return the smallest value in the tree
#    * which is larger than lowerBound. Return null if no such value exists. */

#   nextLarger(lowerBound) {

