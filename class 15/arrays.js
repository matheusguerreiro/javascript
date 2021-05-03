let num = [2, 5, 7, 9, 6]
num.push(11)
num.length
for (let pos = 0; pos < num.length; pos++) {
    console.log(num[pos])
}
for (let pos in num) {
    console.log(num[pos])
}
