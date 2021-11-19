

class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class BinarySearchTree:
    def __init__(self, root):
        self.root = root

    def traverse(self, node = None):

        if node:
            current_node = node
        else:
            current_node = self.root

        print(current_node.val)

        if current_node.left:
            self.traverse(current_node.left)
        if current_node.right:
            self.traverse(current_node.right)

    def insertRecursively(self, root = None, node = None):

        if self.root == None:
            self.root == node
            root = node
        else:
            if root.val < node.val:
                if root.right is None:
                    root.right = node
                else:
                    self.insertRecursively(root.right, node)
            else:
                if root.left is None:
                    root.left = node
                else:
                    self.insertRecursively(root.left, node)
    
    def insertIteratively(self, node = None):

        if self.root == None:
            self.root == node
            return self.root

        current_node = self.root

        while current_node:
            if current_node.val < node.val:
                if current_node.right:
                    current_node = current_node.right
                else:
                    current_node.right = node
                    break
            if current_node.val > node.val:
                if current_node.left:
                    current_node = current_node.left
                else:
                    current_node.left = node
                    break

        return self.root


    def find(self, val):

        current_node = self.root

        while current_node:
            if current_node.val == val:
                return current_node
            elif current_node.val < val:
                current_node = current_node.right
            else:
                current_node = current_node.left
        return "Not Found"

    # def findRecursively(self, val):






node_A = Node('A')
node_B = Node('B')
node_C = Node('C')
node_D = Node('D')
node_E = Node('E')
node_F = Node('F')
node_G = Node('G')

node_H = Node('H')

node_P = Node('P')
node_Z = Node('Z')

node_E.left = node_B
node_E.right = node_G
node_B.left = node_A
node_B.right = node_D
node_G.left = node_F

our_tree = BinarySearchTree(node_E)
print(our_tree.find('B')) #NODE
print(our_tree.find('C')) #Not Found
print('Traversing')
our_tree.traverse()
our_tree.insertRecursively(node_E, node_C)
print('Traversing')
our_tree.traverse()
our_tree.insertRecursively(node_E, node_H)
print('Traversing')
our_tree.traverse()
our_tree.insertIteratively(node_P)
print('Traversing')
our_tree.traverse()