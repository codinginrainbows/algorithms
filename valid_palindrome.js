/*
    LEETCODE_125:

    A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers. Given a string s, return true if it is a palindrome, or false otherwise.
*/

const validPalindrome = (string) => {
    string.toLowerCase().trim()
    let left = 0
    let right = string.length - 1

    while (left <= right) {
        if (string[left] !== string[right]) return false;

        left++
        right--
    }

    return true
}

console.log(validPalindrome('abcba')) // should return true
console.log(validPalindrome('renner')) // should return true
console.log(validPalindrome('gabriel')) // should return false