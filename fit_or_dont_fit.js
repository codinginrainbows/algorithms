/*
    BEECROWD_1241:

    Joe have again in your hands another problem. Now the teacher asked him to make a new program to verify from two big numbers A and B, if B corresponds to the last digit of A.

    Input
    The input consists of several test cases. The first line of input contains an integer N that indicates the number of test cases. Each test case consists of two numbers A and B greather than zero, with up to 1000 digits each.

    Output
    For each test case, print a message informing if the second number fit ("encaixa" in portughese) or didn't fit ("nao encaixa") in the first number. 
*/

const FitOrDontFit = (a, b) => {
    a = a.toString();
    b = b.toString();

    if (a[a.length-1] == b[b.length-1]) return true

    return false
}

console.log(FitOrDontFit(543455213, 543)) // should return true
console.log(FitOrDontFit(28378, 34341)) // should return false
console.log(FitOrDontFit(187, 20970)) // should return false
console.log(FitOrDontFit(7, 1234567)) // should return true
console.log(FitOrDontFit(26, 873746)) // should return true
console.log(FitOrDontFit(12, 789)) // should return false