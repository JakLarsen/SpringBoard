from collections import Counter
from datetime import date

# help(Counter)

my_counter = Counter("OOMPA LOOMPA")

print(type(my_counter))
print(isinstance(my_counter, Counter))
print(my_counter.most_common())

my_date = date(2021, 2, 14)
print(my_date)
print(my_date.weekday())