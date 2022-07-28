function Factorial(n) {
    let fac = 1
    for(i=2; i <= n; i++){
        fac = fac * i
    }
    return fac
}
console.log(Factorial(5));
//BigO(n)