#include <stdio.h>

int main()
{
	/* your code */
	int number = 255;
	int H = (number & 0xf0) >> 4;
	int L = number & 0x0f;
	printf("%d %d", H, L);
	return 0;
}