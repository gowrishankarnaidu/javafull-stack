let n = 5;
let gift = 10;

for (let i = 1; i <= gift; i++) {
    console.log("Allocating gift #" + i + " of " + gift);
    n += 2;
    console.log("n is " + n);
}

console.log("Final total gifts: " + gift);
