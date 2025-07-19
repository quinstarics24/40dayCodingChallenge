#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main() {
    int dice;

    //  the random number generator
    srand(time(0));

    printf("Rolling the dice...\n");

    // Generate random number between 1 and 6
    dice = (rand() % 6) + 1;

    printf("You rolled a %d\n", dice);

    return 0;
}
