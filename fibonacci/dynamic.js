

function fib(n) {
    if(n==1 || n==2) return 1;
    let sum = 2;
    let prev = 1;
    let current = 1;
    for(let i = 3; i < n; i++) {
        prev = current;
        current = sum
        sum = prev + current
    }
    return sum
}

console.log(fib(process.argv[2]))