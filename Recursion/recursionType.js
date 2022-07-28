//Indirect Recursion

let money = 100;
let totalApple = 0;

function buyApple(x) {
//   console.log(x);
  if (x > 0) {
      console.warn("I have", x, "TK", totalApple);
      buyMore(x);
  } else {
    console.warn("I don't have more money", totalApple);
  }
}

function buyMore(x) {
    totalApple++
    buyApple(x - 10)
//   console.log(x);
}

buyApple(money);



function test(x) {
   console.log(x);
   //output:5,4,3,2,1,0

   if (x>0) {
     test(x-1)
   }
   console.log(x);
   //output:0,1,2,3,4,5
}
test(5)
