// console.log("1")
// console.log("2")
// console.log("3")
// console.log("4")
// setTimeout(()=>{console.log("hello function")},5000) 
// console.log("5")
// console.log("6")
// console.log("7")
// console.log("8")

function sum(a,b)
{
    console.log("doing sum")
    return a+b;
}
function calculate(x,y,abc)
{
let p=x+1
let q=y-1;
console.log("started");
return abc(p,q)
}
console.log(calculate(5,5,sum))