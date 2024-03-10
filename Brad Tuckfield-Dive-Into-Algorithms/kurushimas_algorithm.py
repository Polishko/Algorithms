# Generating magic squares with odd size

from math import floor


# generate matrix with size n
def generate_square(a):
    matrix = [[float('nan') for i in range(a)] for j in range(a)]
    return matrix


# pretty printing function
def print_square(matrix):
    labels = ['['+str(x)+']' for x in range(n)]
    format_row = "{:6}" * (len(labels) + 1)
    print(format_row.format("", *labels))
    for label, row in zip(labels, square):
        print(format_row.format(label, *row))


# populate center according to Kurushima's formula
def populate_center(matrix, a):
    center_i = floor(a / 2)
    center_j = floor(a / 2)
    matrix[center_i][center_j] = int((a**2 + 1) / 2)
    matrix[center_i][center_j + 1] = a**2 + 1 - a
    matrix[center_i - 1][center_j] = a**2
    matrix[center_i + 1][center_j] = 1


# TODO

n = 0
while n % 2 != 1:
    n = int(input('Enter size that is an odd number: '))

square = generate_square(n)
populate_center(square, n)
print_square(square)
