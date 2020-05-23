const memo = [0, 1, 1];
function fib(n) {
    if(n==1 || n==2) return 1;
    if(memo[n]) return memo[n];
    memo[n] = fib(n-1) + fib(n-2);
    return memo[n]
}

console.log(fib(process.argv[2]))