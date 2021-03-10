def two_oldest_ages(ages):
    """Return two distinct oldest ages as tuple (second-oldest, oldest)..

        >>> two_oldest_ages([1, 2, 10, 8])
        (8, 10)

        >>> two_oldest_ages([6, 1, 9, 10, 4])
        (9, 10)

    Even if more than one person has the same oldest age, this should return
    two *distinct* oldest ages:

        >>> two_oldest_ages([1, 5, 5, 2])
        (2, 5)
    """

    # NOTE: don't worry about an optimized runtime here; it's fine if
    # you have a runtime worse than O(n)

    # NOTE: you can sort lists with lst.sort(), which works in place (mutates);
    # you may find it helpful to research the `sorted(iter)` function, which
    # can take *any* type of list-like-thing, and returns a new, sorted list
    # from it.

    #O(nlogn) to sort
    sorted_ages = sorted(ages)
    found_two = False

    #O(n) - worst case n-1 calls with 1 single check within and 1 update
    i = len(ages) - 1
    while not found_two and i >= 1:
        #from back to front, find the first item that doesn't == the last item
        if sorted_ages[-1] != sorted_ages[i-1]:
            return (sorted_ages[i-1], sorted_ages[-1])
        i -= 1
    return (sorted_ages[-1])


#RUNTIME = O(nlogn) + O(n) = O(n)


print(two_oldest_ages([1, 2, 10, 8]))
print(two_oldest_ages([6, 1, 9, 10, 4]))
print(two_oldest_ages([1, 5, 5, 2]))
print(two_oldest_ages([2,2]))
