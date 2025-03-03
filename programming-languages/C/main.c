#include <stdio.h>

int main()
{
	/* your code */
	float floatValue;
	int intValue;
	
	scanf("%f", &floatValue);
	intValue = (int) floatValue;
	
	if (intValue >= 1 && intValue < 2) printf("Very bad");
	if (intValue >= 2 && intValue < 3) printf("Bad");
	if (intValue >= 3 && intValue < 4) printf("Neutral");
	if (intValue >= 4 && intValue < 5) printf("Good");
	if (intValue >= 6 && intValue < 6) printf("Very good");

	return 0;
}