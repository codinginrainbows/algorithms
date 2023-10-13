/*
    BINARY SEARCH 
*/

const binarySearch = (array, target) => {
    let left = 0
    let right = array.length - 1

    while (left <= right) {
        let middle = Math.floor((left + right) / 2)

        if (array[middle] == target) return middle
        
        target < array[middle] ? right = middle - 1 : left = middle + 1
    }
}

console.log(binarySearch([2, 4, 5, 7, 10, 12, 15, 24, 30], 10)), // should return index 4
console.log(binarySearch([2, 4, 5, 7, 10, 12, 15, 24, 30], 24)), // should return index 7
console.log(binarySearch([2, 4, 5, 7, 10, 12, 15, 24, 30], 40)), // should return undefined
console.log(binarySearch([1, 3, 5, 14, 18, 43, 99, 130], 5)), // should return index 2
console.log(binarySearch([1, 3, 5, 14, 18, 43, 99, 130], 99)) // should return index 6
console.log(binarySearch([1, 3, 5, 14, 18, 43, 99, 130], 500)) // should return undefined
console.log(binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99], 99)) // should return index 99