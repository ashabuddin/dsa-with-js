function stringPatternSearch (text, pattern) {
    let count = 0
    for (let i = 0; i < text.length; i++) {
        for (let j = 0; j < pattern.length; j++) {
            const patternChar =pattern[j];
            if (patternChar !== text[i + j]) {
                break
            }
            if (j === pattern.length - 1) {
                count++
            }
        }
        
    }
    return count
    
}
console.log(stringPatternSearch("loooooolool", "o"));