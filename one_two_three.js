/*
    BEECROWD_1332:

    Your little brother has just learnt to write one, two and three, in English. He has written a lot of those words in a paper, your task is to recognize them. Note that your little brother is only a child, so he may make small mistakes: for each word, there might be at most one wrong letter. The word length is always correct. It is guaranteed that each letter he wrote is in lower-case, and each word he wrote has a unique interpretation.

    Input
    The first line contains the number of words that your little brother has written. Each of the following lines contains a single word with all letters in lower-case. The words satisfy the constraints above: at most one letter might be wrong, but the word length is always correct. There will be at most 1000 words in the input.

    Output
    For each test case, print the numerical value of the word.
*/

// todo: apply the humming distance algorithm.

const oneTwoThree = (a) => {
    const word = a.split('') 
    let isOne = false
    let isTwo = false
    let isThree = false
    
    if (a.length === 5) {
        let threeCounter = 0
        
        word.forEach((letter, index) => {
            (index === 0 && letter.includes('t')) && threeCounter++
            (index === 1 && letter.includes('h')) && threeCounter++
            (index === 2 && letter.includes('r')) && threeCounter++
            (index === 3 && letter.includes('e')) && threeCounter++
            (index === 4 && letter.includes('e')) && threeCounter++
        })
        
        threeCounter >= 4 && (isThree = true)
    }
    
    if (a.length === 3) {
        let oneCounter = 0
        let twoCounter = 0
        
        word.forEach((letter, index) => {
            (index === 0 && letter.includes('o')) && oneCounter++ || (index === 0 && letter.includes('t')) && twoCounter++
            (index === 1 && letter.includes('n')) && oneCounter++ || (index === 1 && letter.includes('w')) && twoCounter++
            (index === 2 && letter.includes('e')) && oneCounter++ || (index === 2 && letter.includes('o')) && twoCounter++
        })
        
        oneCounter >= 2 && (isOne = true)
        twoCounter >= 2 && (isTwo = true)
    }

    return isOne ? console.log('1') : (isTwo ? console.log('2') : (isThree ? console.log('3') : console.log('none')))
}

oneTwoThree('one') //should return the number 1
oneTwoThree('two') //should return the number 2
oneTwoThree('three') //should return the number 3

oneTwoThree('owe') //should return the number 1
oneTwoThree('too') //should return the number 2
oneTwoThree('theee') //should return the number 3

oneTwoThree('noe') //should return none
oneTwoThree('wot') //should return none
oneTwoThree('ehtee') //should return none

oneTwoThree('gabriel') //should return none
oneTwoThree('nine') //should return none
oneTwoThree('elephant') //should return none