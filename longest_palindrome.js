/*
    LEETCODE:

    Given a string s, find the longest palindromic substring in s
    
    longestPalindrome("cbbd") --> "bb"
    longestPalindrome("abba") --> "abba"
    longestPalindrome("a") --> "a"
*/

const longestPalindrome = (s) => {
  let startIndex = 0;
  let maxLength = 1;

  const expandFromMiddle = (leftPointer, rightPointer) => {
    while (leftPointer >= 0 && rightPointer < s.length && s[leftPointer] === s[rightPointer]) {
      
      const currentPalindromeLength = rightPointer - leftPointer + 1;

      if(currentPalindromeLength > maxLength) {
        maxLength = currentPalindromeLength;
        startIndex = leftPointer;
      }

      leftPointer --;
      rightPointer ++;
    }
  }

  for (let i = 0; i < s.length; i++) {
    expandFromMiddle(i - 1, i + 1);
    expandFromMiddle(i, i + 1);
  }

  return s.slice(startIndex, startIndex + maxLength);
}