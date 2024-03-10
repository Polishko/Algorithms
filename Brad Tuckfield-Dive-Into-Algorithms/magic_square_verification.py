# to use in order to verify whether a square is magic (sums of all rows, columns and diagonals are equal)


def verify_square(square):
    size = len(square)
    sums = []
    row_sums = [sum(square[i]) for i in range(0, size)]
    sums.extend(row_sums)
    column_sums = [sum([row[i] for row in square]) for i in range(0, size)]
    sums.extend(column_sums)
    main_diag = sum([square[i][i] for i in range(0, size)])
    sums.append(main_diag)
    anti_diag = sum([square[i][size - 1 - i] for i in range(0, size)])
    sums.append(anti_diag)

    return len(set(sums)) == 1


luo_shu_square = [[4, 9, 2], [3, 5, 7], [8, 1, 6]]
print(verify_square(luo_shu_square))
