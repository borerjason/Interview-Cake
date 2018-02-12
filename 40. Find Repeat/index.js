const findRepeat = (ints) => {


};


// integers are in range 1..n
// array length is n + 1;
// constraints: at least one integer appears at least once but can have multiple duplicates

// Returns on of the integers that appears more than once, if multiple appear more than once only need to present one

// Optimize for space


[1, 2, 3 ,2, 3, 5]  // n =  5, length = 6  output 2 or 3
[1, 2, 1, 1, 4] // n = 4, length = 5  output 1
[1, 1, 2 ]  // output 1


// Strategy: check number at each index. check the sign for a number at index of number - 1. If its negative return that number value. If not   switch the sign for the number at index of number - 1;  

/*
sum = 10   

[4, 1, 1, 3, 1]; possible options = 4
n = 4

1, 1, 1




*/