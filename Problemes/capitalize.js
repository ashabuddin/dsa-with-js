function  capitalize(str) {
const arrOfWords = str.split(" ")
const  arrOfWordsCased = []

for (let i = 0; i < arrOfWords.length; i++) {
    const word = arrOfWords[i];
    arrOfWordsCased.push(word[0].toUpperCase() + word.slice(1).toLowerCase())
    
}
 return arrOfWordsCased.join(" ")
}
console.log(capitalize("Hoe are you"));