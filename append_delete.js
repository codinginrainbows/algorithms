const apprendAndDelete = (s, t, k) => {
    let counter = 0

    for (let i in s) {
        if (s[i] == t[i]) {
            counter++
        } else break
    }

    let del = s.length - counter
    let append = t.length - counter

    return k >= del+append ? true : false
}

console.log(apprendAndDelete('hackerhappy', 'hackerrank', 9));
console.log(apprendAndDelete('ashley', 'ash', 2));