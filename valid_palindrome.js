/*
    LEETCODE_125:

    A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers. Given a string s, return true if it is a palindrome, or false otherwise.
    -----------------------------------------------------
    EXAMPLE 1:
    Input: s = "race a car"
    Output: false
    Explanation: "raceacar" is not a palindrome.
    -----------------------------------------------------
    EXAMPLE 2:
    Input: s = "renner"
    Output: true
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

console.log(validPalindrome('abcba'))