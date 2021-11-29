



class Node():

    def __init__(self, val):
        self.val = val
        self.adjacent = set()
    
class FriendGraph():
     
    def __init__(self):
        self.nodes = set()

    #add vertex
    def add_person(self, node):
        self.nodes.add(node)

    #add vertices
    def add_people(self, people_list):
        for node in people_list:
            self.add_person(node)

    #edges
    def set_friends(self, person1, person2):
        person1.adjacent.add(person2)
        person2.adjacent.add(person1)

    #BFS
    def are_connectedBFS(self, person1, person2):
        to_visit_queue = [person1]
        seen = set(to_visit_queue)
        while len(to_visit_queue):
            curr_person = to_visit_queue.pop(0)
            print('Checking ', curr_person.val)
            if curr_person == person2:
                return True
            else:
                for neighbor in curr_person.adjacent:
                    if not neighbor in seen:
                        to_visit_queue.append(neighbor)
                        seen.add(neighbor)
        return False

    #DFS
    def are_connectedDFS(self, person1, person2):
        to_visit_stack = [person1]
        seen = set(to_visit_stack)
        while len(to_visit_stack):
            curr_person = to_visit_stack.pop()
            print('Checking ', curr_person.val)
            if curr_person == person2:
                return True
            else:
                for neighbor in curr_person.adjacent:
                    if not neighbor in seen:
                        to_visit_stack.append(neighbor)
                        seen.add(neighbor)
        return False

    #DFS
    def are_connected_recursiveDFS(self, person1, person2, seen):
        if person1 == person2:
            return True
        for neighbor in person1.adjacent:
            if not neighbor in seen:
                seen.add(neighbor)
                if(self.are_connected_recursiveDFS(self, neighbor, person2, seen)):
                    return True
        return False


homer = Node('Homer')
marge = Node('Marge')
maggie = Node('Maggie')
lisa = Node('Lisa')
granpa = Node('Granpa')

moe = Node('Moe')
barney = Node('Barney')
lenny = Node('Lenny')

friends = FriendGraph()
friends.add_people([homer, marge, maggie, lisa, granpa, moe, barney, lenny])

friends.set_friends(homer, marge)
friends.set_friends(homer, maggie)
friends.set_friends(homer, lisa)
friends.set_friends(marge, maggie)
friends.set_friends(maggie, lisa)
friends.set_friends(lisa, granpa)

friends.set_friends(moe, barney)
friends.set_friends(lenny, barney)

print(friends.are_connectedDFS(marge, moe)) #False
print(friends.are_connectedBFS(marge, moe)) #False
print(friends.are_connectedDFS(marge, granpa)) #True
print(friends.are_connectedBFS(marge, granpa)) #True
# print(friends.are_connected_recursiveDFS(marge, moe, set(marge))) #False
# print(friends.are_connected_recursiveDFS(marge, granpa, set(marge))) #True

print(friends)
print(friends.nodes)
for person in friends.nodes:
    print('--------')
    print(person.val)
    print('--------')
    print('is friends with')
    for friend in person.adjacent:
        print(friend.val)






