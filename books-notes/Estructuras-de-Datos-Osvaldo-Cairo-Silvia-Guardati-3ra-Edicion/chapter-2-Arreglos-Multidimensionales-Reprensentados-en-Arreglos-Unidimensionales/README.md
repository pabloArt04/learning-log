# Row Major Order and Column Major Order

## Row Major Order

In Row Major Order storage, the elements of a multidimensional array are stored in memory row by row. This means that all elements of the first row are stored consecutively, followed by the elements of the second row, and so on. This method is commonly used in programming languages like C and C++.

For example, for a 2x3 matrix:

```
A = [
      [a[0,0], a[0,1], a[0,2],
      [a[1,0], a[1,1], a[1,2],
    ]
```

The memory storage would be:

```
[ [a[0,0], a[0,1], a[0,2], a[1,0], a[1,1], a[1,2] ]
```

## Column Major Order

In Column Major Order storage, the elements of a multidimensional array are stored in memory column by column. This means that all elements of the first column are stored consecutively, followed by the elements of the second column, and so on. This method is commonly used in programming languages like Fortran and MATLAB.

For example, for a 2x3 matrix:

```
A = [
      [a[0,0], a[0,1], a[0,2],
      [a[1,0], a[1,1], a[1,2],
    ]
```

The memory storage would be:

```
[ [a[0,0], a[1,0], a[0,1], a[1,1], a[0,2], a[1,2] ]
```
