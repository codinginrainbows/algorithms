/*
    BEECROWD_1241:

    Joe have again in your hands another problem. Now the teacher asked him to make a new program to verify from two big numbers A and B, if B corresponds to the last digit of A.

    Input
    The input consists of several test cases. The first line of input contains an integer N that indicates the number of test cases. Each test case consists of two numbers A and B greather than zero, with up to 1000 digits each.

    Output
    For each test case, print a message informing if the second number fit ("encaixa" in portughese) or didn't fit ("nao encaixa") in the first number. 
*/

function FitOrDontFit(a, b) {
    let doesItFit = false

    let lastDigitOfA = a.toString().split('')[a.toString().length-1]
    let lastDigitOfB = b.toString().split('')[b.toString().length-1]

    lastDigitOfA === lastDigitOfB && (doesItFit = true)

    return doesItFit ? 'it fits' : 'it does not fit'
}

FitOrDontFit(543455213, 543)
FitOrDontFit(28378, 34341)
FitOrDontFit(187, 20970)
FitOrDontFit(7, 1234567)