# finding multiplication of two numbers using the russian peasant multiplication method
from math import floor
import pandas as pd


n1 = int(input('Please enter first number: '))
n2 = int(input('Please enter second number: '))

(halving, doubling) = ([n1], [n2]) if n1 < n2 else ([n2], [n1])  # faster when smaller num is halving

while min(halving) > 1:
    halving.append(floor(min(halving) / 2))

while len(doubling) < len(halving):
    doubling.append(max(doubling) * 2)

# table with two columns
half_double = pd.DataFrame(zip(halving, doubling))
# filter odd values in rows and take all cols (using loc method to select .loc[row, col])
half_double = half_double.loc[half_double[0] % 2 == 1, :]
# sum all rows in col 1
answer = sum(half_double.loc[:, 1])
print(answer)



