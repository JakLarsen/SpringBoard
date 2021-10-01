


#naive
#n^3 - BAD
def sq (nums1, nums2):
    for i in range(len(nums1)):
        found_idx = ""
        if nums1[i]**2 in nums2:
            nums2.remove(nums1[i]**2)
        else:
            return "No Frequency Match - sq"
    return "Frequencies Matched - sq"
    
# match1 = sq([1,2,3], [1,4,9])
# match2 = sq([1,2,3], [1,4,8])
# print(match1)
# print(match2)

#n^2 - doesn't work because of overlapping
def sq2(nums1, nums2):
    #give us a list that should match nums2 - N
    nums1_sq = [i**2 for i in nums1]
    
    for num in nums1_sq:
        if num not in nums2:
            return "No Frequencies Matched - sq2"
    return "Frequencies Matched - sq2"

# match1 =  sq2([1,2,3], [1,4,9])
# match2 = sq2([1,2,3], [1,4,8])
# match3 = sq2([1,2,1], [1,4,4]) #Should be NO
# print(match1)
# print(match2)
# print(match3)


#optimal Phew
def make_freq_counter(nums):
    freq_counter = {}
    
    #N
    for num in nums:
        if num not in freq_counter:
            freq_counter[num] = 1
        else:
            freq_counter[num] += 1
    return freq_counter

def sq3(nums1, nums2):
    #N
    freq_counter = make_freq_counter(nums1)
    freq_counter2 = make_freq_counter(nums2)
    #N
    for k,v in freq_counter.items():
        if not freq_counter2[k**2]:
            return False
        elif freq_counter[k] != freq_counter2[k**2]:
            return False
    return True

match1 = sq3([1,2,3], [1,4,9])
match2 = sq3([1,2,4], [1,4,9])
match3 = sq3([1,2,3], [1,4,5])
print(match1)
print(match2)
print(match3)

#

