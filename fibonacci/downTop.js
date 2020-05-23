function fib(n) {
    if(n==1 || n==2) return 1;
    const memo = [0, 1, 1];
    for(let i = 3; i<= n; i++) {
        memo[i] = memo[i-1] + memo[i-2];
    }
    return memo[n]
}

console.log(fib(process.argv[2]))