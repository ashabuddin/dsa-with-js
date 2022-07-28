

function strReverse(str){
    return str
    .split("")
    .reverse()
    .join("")
}

console.log(strReverse("hello"))

function strReverse(str){
   let res =""
   for (let i = 0; i < str.length; i++) {
       const chr = str[i];
       res = chr + res
   }
   return res
}
function strReverse(str){
    return str.split("").reduce((acu, cher) =>{

      acu = cher + acu

      return acu

    },"")
  }

  console.log(strReverse("hello"))


