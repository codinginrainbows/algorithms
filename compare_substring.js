/*
    BEECROWD_1237
    
    Compare Substring:

    Find the longest common substring between the two informed Strings. The substring can be any part of the String, including the entire String. If there is no common substring, return 0.
*/

const compareSubstring = (a, b) => {
    a = a.toUpperCase()
    b = b.toUpperCase()
    let string = ''

    for (let i in a) {
        for (let j in b) {
            a[i] == b[j] && !string.includes(a[i]) && (string += a[i])
        }   
    }

    return string.length;
}

console.log(compareSubstring('abcdef', 'cdofhij')) // should return 3
console.log(compareSubstring('TWO', 'FOUR')) // should return 1
console.log(compareSubstring('abracadabra', 'open')) // should return 0
console.log(compareSubstring('Hey This java is hot', 'Java is a new paradigm')) // should return 7
console.log(compareSubstring('Hey, this is a sentence.', 'Hello, world')) // should return 4
console.log(compareSubstring('I love coding in JavaScript', 'Python is also a great language')) // should return 12
console.log(compareSubstring('The quick brown fox jumps', 'over the lazy dog')) // should return 6
console.log(compareSubstring('Apples are delicious', 'Oranges are a citrus fruit')) // should return 9