function maxChert(str) {
  let  charCountObg = {}
  let maxCher = ""
  let maxCount = 0

  for (let i = 0; i < str.length; i++) {
      const cher = str[i];

      charCountObg[cher] = charCountObg[cher] + 1 || 1

      if (charCountObg[cher] > maxCount) {
          maxCher = cher
         maxCount = charCountObg[cher]
      }
  }   
  return maxCher
}

// function maxChert(str) {
//   let  charCountObg = {}
//   let maxCher = ""
//   let maxCount = 0

//   for (const char of str) {
//     charCountObg[char] = charCountObg[char] + 1 || 1
//   }

//   for (const char in charCountObg) {
//       if (charCountObg[char] > maxCount) {
//         maxCher = char
//         maxCount = charCountObg[char]
//       }
//   }
  
//   return maxCher
// }

console.log(maxChert("I loveeee nodlos"));