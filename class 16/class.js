function parimpar (n) {
    if (n % 2 == 0) {
        return 'PAR'
    } else {
        return 'ÍMPAR'
    }
}
console.log(parimpar(328))

function soma(n1=0, n2=0) {
    return n1 + n2
}
console.log(soma(2, 5))