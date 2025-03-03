#include <stdio.h>

int main() {
    float x = 3.0;
    int y = 10;
    int a = 3;
    float result1 = y / x; // if there is any value of type float, the other values will be converted to float
    float result2 = y / a; // both values are integers, so the result will be an integer
    // type cast operator
    float result3 = (float) y / (float) a; // the value of a is casted to float, so the result of the division is a float

    // the result of the division is a float
    printf("result1 = %f\n", result1);
    printf("result2 = %f\n", result2);
    printf("result3 = %f\n", result3);
    return 0;
}