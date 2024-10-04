function consecutive_sequence(arr) {
  for (let i = 0; i < arr.length; i ++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j+1]) {
        let temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
      }
    }
  }

  let counter = 0

  for (let i = 1; i < arr.length; i++) {
    if (arr[i-1]+ 1 === arr[i]) {
      counter++
    }
  }

  return counter+1
}

let arr = [0,3,7,2,5,8,4,6,1] //Output: 9
//let arr = [100,4,200,1,3,2] //Output: 4
//let arr = [50,1,17,15,2,90,3,98,777,4,190,5,88,999,222,444,6] //Output: 6

console.log(consecutive_sequence(arr))
