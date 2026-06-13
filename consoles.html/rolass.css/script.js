/*let name="gowri shankar";
var age=22;
const pi=3.14;  
console.log(name);
console.log(age);
console.log(pi);
document.write("name");;
document.write(age+ pi);
const height=5.11;
console.log(height);
console.log(age-3);
console.log(age*2);
console.log(age/2);
console.log(age);   
let x=10;
console.log(x);
console.log(x>age);
*
let food1 ="briyani";
let break_fast="idly";
let food2="dosa";
let food3="pongal";
let food4="chapathi";
let food5="vada";
if(food=="briyani")
{    console.log("break fast isbriyani");
}else if(food=="idly")
{    console.log("break fast is idly");
}   
if (food1=="briyani")
for(let i=1;i<30;i++)
{
    console.log("day"+i+"of 30 days of javascript");
}
*
let i=1;
while(i<=10)
{
    console.log("day"+i+"of 30 days of javascript");
}
*
function cook()
{
    console.log("cook is cooking");
    console.log("cook is done");
    console.log("cook is cleaning");

}
for(let i=1;i<=10;i++)
{
    cook();
}
*
function add(a,b)
{
    return a+b;
}let sum=add(10,20);
console.log(sum);
*
function guessnumber(n)

{
    if(n>7){
        return;

    }
    console.log(n);
    n+=1;
    guessnumber(n);

}
num+1;
*/
function guess(n) {
    let userGuess = Number(prompt("Enter a number:"));

    if (userGuess == n) {
        console.log("Congratulations! You guessed the number.");
    } else if (userGuess < n) {
        console.log("Too low! Try again.");
        guess(n);
    } else {
        console.log("Too high! Try again.");
        guess(n);
    }
}

let number = Math.floor(Math.random() * 100) + 1;
guess(number);
