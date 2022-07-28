function palindrome(str) {

    str = str.toLowerCase()

    const reversed = str
        .split("")
        .reverse()
        .join("")
    if (str === reversed) {
        return true
    } else {
        return false
    }

}
console.log(palindrome("madam"))