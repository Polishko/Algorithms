# finding the greatest common divisor

def find_greatest_common_divisor(x, y):
    larger, smaller = max(x, y), min(x, y)
    remainder = larger % smaller

    if remainder == 0:
        return smaller

    return find_greatest_common_divisor(smaller, remainder)


a = int(input('Enter first number: '))
b = int(input('Enter second number: '))
print(find_greatest_common_divisor(a, b))
