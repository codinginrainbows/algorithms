function bubble_sort(arr) {
  for (let i = 0; i <= arr.length - 1; i++) {
    for (let j = 0; j <= arr.length - 1; j++) {
      if (arr[j] > arr[j+1]) {
        let temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
      }
    }
  }

  return arr
}

let arr = [3,1,4,16,50,21,100,2];

console.log(bubble_sort(arr))
