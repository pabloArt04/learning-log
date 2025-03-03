#include <stdio.h>

// | Modifier   | Description                                                        |
// |------------|--------------------------------------------------------------------|
// | short      | Reduces the size of the data type (used with int).                 |
// | long       | Increases the size of the data type (used with int and double).    |
// | signed     | Allows storage of positive and negative numbers (default for int). |
// | unsigned   | Only allows positive values, extending the positive range.         |


int main() {
    short int counter;
    // short counter; // Equivalent to short int counter;

    // some compilers may not be able to distinguish int and long. they may be the same size.
    // if you want to use a long int, you can use long long int.
    long long int bigNumber;
    // long logn bigNumber; // Equivalent to long long int bigNumber;

    //if the value will never be negative, you can use unsigned int.
    unsigned int positiveNumber;
    // unsigned positiveNumber; // Equivalent to unsigned int positiveNumber;

    // is allowed mix modifiers
    unsigned long long int hugePositiveNumber;
    unsigned short int smallPositiveNumber;
    return 0;
}