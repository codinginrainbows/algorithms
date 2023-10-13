/*
    BEECROWD_1332:

    Your little brother has just learnt to write one, two and three, in English. He has written a lot of those words in a paper, your task is to recognize them. Note that your little brother is only a child, so he may make small mistakes: for each word, there might be at most one wrong letter. The word length is always correct. It is guaranteed that each letter he wrote is in lower-case, and each word he wrote has a unique interpretation.

    Input
    The first line contains the number of words that your little brother has written. Each of the following lines contains a single word with all letters in lower-case. The words satisfy the constraints above: at most one letter might be wrong, but the word length is always correct. There will be at most 1000 words in the input.

    Output
    For each test case, print the numerical value of the word.
*/

const oneTwoThree = (a) => {
    let isOne = 0
    let isTwo = 0
    let isThree = 0

    for (let i in a) {
        a[i] == 'one'[i] && isOne++
        a[i] == 'two'[i] && isTwo++
        a[i] == 'three'[i] && isThree++
    }

    if (isOne >= 2) return 1
    if (isTwo >= 2) return 2
    if (isThree >= 4) return 3

    return 0
}

console.log(oneTwoThree('one')) //should return the number 1
console.log(oneTwoThree('two')) //should return the number 2
console.log(oneTwoThree('three')) //should return the number 3

console.log(oneTwoThree('owe')) //should return the number 1
console.log(oneTwoThree('too')) //should return the number 2
console.log(oneTwoThree('theee')) //should return the number 3

console.log(oneTwoThree('noe')) //should return 0
console.log(oneTwoThree('wot')) //should return 0
console.log(oneTwoThree('ehtee')) //should return 0

console.log(oneTwoThree('gabriel')) //should return 0
console.log(oneTwoThree('nine')) //should return 0
console.log(oneTwoThree('elephant')) //should return 0