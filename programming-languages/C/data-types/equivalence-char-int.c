#include <stdio.h>

int main() {
    char c = 'A';
    int i = c;

    printf("Character: %c\n", c);
    printf("Integer equivalent: %d\n\n", i);

    for (char ch = 'A'; ch <= 'Z'; ch++) {
        printf("Character: %c, Integer: %d\n", ch, ch);
    }

    return 0;
}