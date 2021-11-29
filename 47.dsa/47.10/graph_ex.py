class Node():

    def __init__(self, val):
        self.val = val
        self.adjacent = set()
    
class Graph():
     
    def __init__(self):
        self.nodes = set()

    def addVertex(self, vertex):
        self.nodes.add(vertex)
    
    def addVerticies(self, verticies_list):
        for vertex in verticies_list:
            self.nodes.add(vertex)

    def addEdge(self, v1, v2):
        v1.adjacent.add(v2)
        v2.adjacent.add(v1)

    def removeEdge(self, v1, v2):
        if v2 in v1.adjacent:
            v1.adjacent.remove(v2)
            v2.adjacent.remove(v1)
    
    def removeVertext(self, vertex):
        for node in self.nodes:
            if vertex in node.adjacent:
                node.adjacent.remove(vertex)
        self.nodes.remove(vertex)

    def traverseEdges(self):
        print('TRAVERSAL')
        for vertex in self.nodes:
            print(vertex.val, 'is adjacent to: ')
            for neighbor in vertex.adjacent:
                print(neighbor.val)

    #BFS
    def BFS(self, v1, v2):
        to_visit_queue = [v1]
        seen = set(to_visit_queue)
        while len(to_visit_queue):
            curr_person = to_visit_queue.pop(0)
            print('Checking ', curr_person.val)
            if curr_person == v2:
                return True
            else:
                for neighbor in curr_person.adjacent:
                    if not neighbor in seen:
                        to_visit_queue.append(neighbor)
                        seen.add(neighbor)
        return False

    #DFS
    def DFS(self, v1, v2):
        to_visit_stack = [v1]
        seen = set(to_visit_stack)
        while len(to_visit_stack):
            curr_person = to_visit_stack.pop()
            print('Checking ', curr_person.val)
            if curr_person == v2:
                return True
            else:
                for neighbor in curr_person.adjacent:
                    if not neighbor in seen:
                        to_visit_stack.append(neighbor)
                        seen.add(neighbor)
        return False



a = Node('A')
b = Node('B')
c = Node('C')
d = Node('D')

e = Node('E')
f = Node('F')

print(a)

letters = Graph()
print(letters)

letters.addVertex(a)
print(letters.nodes)

letters.addVerticies([b,c,d,e,f])
print(letters.nodes)

letters.addEdge(a,b)
letters.addEdge(a,c)
letters.addEdge(b,d)

letters.addEdge(e,f)

letters.traverseEdges()
# for vertex in letters.nodes:
#     print(vertex.val, 'is adjacent to: ')
#     for neighbor in vertex.adjacent:
#         print(neighbor.val)

letters.removeEdge(e,f)
letters.traverseEdges()

letters.removeVertext(c)
letters.traverseEdges()


print(letters.BFS(a,b)) #True
print(letters.BFS(a,d)) #True
print(letters.BFS(a,e)) #False
print(letters.DFS(a,b)) #True
print(letters.DFS(a,d)) #True
print(letters.DFS(a,e)) #False

