


data_set3 = [1,2,3,4,5,6,7,8,9,10]
data_set2 = [10,9,8,7,6,5,4,3,2,1]
data_set1 = [5,4,1,7,8,9,10,2,6,3]
small_list1 = [5,9,20]
small_list2 = [4,7,22]
small_list3 = [1,14,20]
small_list4 = [1,14,20, 21, 47]

#Bubble sort can do OK if it's nearly sorted due to the swap check, otherwise not so great
# - swap neighbors until you move larger values to top
#O(N**2)
#Nearly sorted optimized (O(N))
def bubble_sort_op(our_list):
    count = 0
    for i in range(len(our_list), -1, -1):
        swapped = False
        for j in range(i - 1):
            if our_list[j] > our_list[j+1]:
                count += 1
                our_list[j], our_list[j+1] = our_list[j+1], our_list[j]
                swapped = True
            if not swapped:
                break
    return our_list, count

#Selection Sort (O(N**2))
# - select smallest value and put at front or largest and put at back
# def selection_sort(our_list):

#Insertion Sort (O(N**2))
# - insert into correct spot of already-sorted section of array
# def insertion_sort(our_list):

#O(n+m)
def merge_two_lists(l1,l2):
    merged_list = []
    i = 0
    j = 0
    while i < len(l1) and j < len(l2):
        if l1[i] < l2[j]:
            merged_list.append(l1[i])
            i += 1
        else:
            merged_list.append(l2[j])
            j += 1
    while i < len(l1):
        merge_list.append(l1[i])
        i += 1
    while j < len(l2):
        merged_list.append(l2[j])
        j += 1
    return merged_list

#O(nlogn)
def merge_sort(our_list):
    #BASE CASE
    if len(our_list) <= 1:
        return our_list

    mid = len(our_list)//2
    left = merge_sort(our_list[0:mid])
    right = merge_sort(our_list[mid:])

    #NORMAL CASE
    return merge_two_lists(left, right)



print('bubble', bubble_sort_op(data_set3))
print('bubble', bubble_sort_op(data_set2)) 
print('bubble', bubble_sort_op(data_set1)) #Without swap check = 20, with = 9


print('merge_lists', merge_two_lists(small_list1, small_list2)) 
print('merge_lists', merge_two_lists(small_list1, small_list4)) 
print('merge_sort', merge_sort(data_set1)) 
print('merge_sort', merge_sort(data_set2)) 