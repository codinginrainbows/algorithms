/*
    LEETCODE_125:

    A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers. Given a string s, return true if it is a palindrome, or false otherwise.

    EXAMPLE 1:
    Input: s = "A man, a plan, a canal: Panama"
    Output: true
    Explanation: "amanaplanacanalpanama" is a palindrome.
    -----------------------------------------------------
    EXAMPLE 2:
    Input: s = "race a car"
    Output: false
    Explanation: "raceacar" is not a palindrome.
    -----------------------------------------------------
    EXAMPLE 3:
    Input: s = " "
    Output: true
    Explanation: s is an empty string "" after removing non-alphanumeric characters.
    Since an empty string reads the same forward and backward, it is a palindrome.  
*/

const validPalindrome = (string) => {
    const word = string.toLowerCase().trim().split('')
    let left = 0
    let right = string.length - 1

    while (left <= right) {
        if (word[left] !== word[right]) return false;

        left++
        right--
    }

    return true
}

console.log(validPalindrome('renner'))