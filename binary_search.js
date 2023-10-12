/*
    BINARY SEARCH
*/

function binarySearch(array, target) {
    let left = 0
    let right = array.length - 1

    while (left <= right) {
        const middle = Math.floor((left + right) / 2)

        if (array[middle] == target) return middle

        target < array[middle] ? right = middle - 1 : left = middle + 1
    }

    return -1
}

console.log(binarySearch([2, 4, 5, 7, 10, 12, 15, 24, 30], 10)), // should return index 4
console.log(binarySearch([2, 4, 5, 7, 10, 12, 15, 24, 30], 24)), // should return index 7
console.log(binarySearch([1, 3, 5, 14, 18, 43, 99, 130], 5)), // should return index 2
console.log(binarySearch([1, 3, 5, 14, 18, 43, 99, 130], 99)) // should return index 6