def sum_in_list(our_list, target):

    dif_set = set()
    count_pairs = 0
    for i in range(len(our_list)):
        difference = target - our_list[i]
        if difference in dif_set:
            count_pairs += 1
        dif_set.add(our_list[i])
    return count_pairs

print(sum_in_list([0,2], 2) == 1)
print(sum_in_list([0,3], 2) == 0)
print(sum_in_list([0,1,2,2,3], 4) == 2)
print(sum_in_list([-2,-4,0,1,2,3], 6) == 0)