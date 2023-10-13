// HAMMING DISTANCE

const hammingDistance = (a, b) => {
    let counter = 0

    for (let i in a) {
        a[i] !== b[i] && counter++
    }
    
    return counter
}

console.log(hammingDistance('gabriel', 'gabriel'))