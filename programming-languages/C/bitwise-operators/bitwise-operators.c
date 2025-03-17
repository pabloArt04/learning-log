#include <stdio.h>

int main()
{
    int a = 5; // Binary: 0101
    int b = 3; // Binary: 0011

    // Bitwise AND: Only 1 when both bits are 1
    int and_result = a & b; // 0101 & 0011 = 0001 (1 in decimal)
    printf("AND: %d\n", and_result);

    // Bitwise OR: 1 when at least one bit is 1
    int or_result = a | b; // 0101 | 0011 = 0111 (7 in decimal)
    printf("OR: %d\n", or_result);

    // Bitwise XOR: 1 when bits are different
    int xor_result = a ^ b; // 0101 ^ 0011 = 0110 (6 in decimal)
    printf("XOR: %d\n", xor_result);

    // Bitwise NOT: Inverts all bits
    int not_result = ~a; // ~0101 = 1010 (in two's complement: -6 in decimal)
    printf("NOT: %d\n", not_result);

    // Left shift: Moves bits to the left, filling with 0s
    int left_shift_result = a << 1; // 0101 << 1 = 1010 (10 in decimal)
    printf("Left Shift: %d\n", left_shift_result);

    // Right shift: Moves bits to the right, discarding rightmost bits
    int right_shift_result = a >> 1; // 0101 >> 1 = 0010 (2 in decimal)
    printf("Right Shift: %d\n", right_shift_result);

    return 0;
}
