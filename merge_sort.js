/*
    PART 1 OF MERGE FUNC
    1. received 2 arrays as arguments
    2. create a new one called result
    3. create pointers to walk through the arrays
    4. different from binary search, pointers this time will walk same way
    5. both pointers must be less than arrays lengths
    6. if value in pos less than value in same pos on the other array, push into result
    7. walk with pointer on the array that had the minor value

    PART 2 OF MERGE FUNC
    1. if index is minor than array.lenth just push everything into result
    2. do step above for both arrays
    3. return result

    MERGESORT ITSELF
    1. if array length is equal or minor than 1 return the array itselt
    2. define middle of array in a variable
    3. define divide array in left and right from the middle
    4. recursively call mergeSort into the two pieces within merge func
*/

const mergeSort = (array) => {
    if (array.length <= 1) return array

    let middle = Math.floor(array.length / 2)
    let i = array.slice(0, middle)
    let j = array.slice(middle)

    return mergeArrays(mergeSort(i), mergeSort(j))
}

const mergeArrays = (array1, array2) => {
    let result = []
    let i = 0
    let j = 0

    while (i < array1.length && j < array2.length) {
        array1[i] < array2[j] ? (result.push(array1[i]), i++) : (result.push(array2[j]), j++)
    }

    // while (i < array1.length) {
    //     result.push(array1[i])
    //     i++
    // }
    
    // while (j < array2.length) {
    //     result.push(array2[j])
    //     j++
    // }

    return result.concat(array1.slice(i), array2.slice(j));
}

console.log(mergeSort([
    98, 34, 23, 71, 10, 45, 56, 89, 12, 67, 88, 30, 44, 76, 21, 65, 31, 9, 53, 14,
    50, 66, 77, 7, 39, 91, 20, 55, 80, 1, 72, 42, 68, 32, 5, 79, 61, 35, 64, 27, 11,
    87, 8, 38, 78, 18, 59, 46, 99, 22, 70, 33, 4, 85, 54, 19, 3, 57, 25, 49, 74, 13,
    2, 96, 47, 6, 84, 29, 48, 62, 26, 86, 69, 41, 81, 37, 16, 52, 15, 60, 75, 95, 43,
    66, 17, 63, 92, 28, 58, 94, 40, 82, 51, 73, 36, 90, 70
]));