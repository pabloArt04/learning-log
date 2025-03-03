#include <stdio.h>

int main() {
    int Int;
    char Char;
    short Short;
    float Float;

    Int = Short + Char + Float;

    // promotions go first
    // resulting in the following expression:
    // Int = (int) Short + (int) Char + Float;

    // next
    // the sum of Short and Char is promoted to float
    // resulting in the following expression:
    // Int = (float)((int) Short + (int) Char) + Float;

    // finally
    // the sum is calculated as a float but assigned to an int
    // resulting in the following expression:
    // Int = (int)((float)((int) Short + (int) Char) + Float);

    return 0;
}