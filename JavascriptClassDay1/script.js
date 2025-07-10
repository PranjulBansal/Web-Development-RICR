let a = 5;
let b = 8;
// console.log(c)c is not defined;
console.log(a + b);

var x = 20;
var x = 30;
console.log(x);

for (var i = 0; i < 5; i++) {
  console.log(i);
}
for (var i = 0; i < 5; i++) {
  console.log(i);
}
for (var i = 0; i < 5; i++) {
  for (var i = 0; i < 5; i++) {
    console.log("inner", i);
  }
  console.log("outer", i);
}

// for(let i=0;i<5;i++)
// {
//     console.log(i)
// }
// for(let i=0;i<5;i++)
// {
//     console.log(i)
// }
var x = 10;
var y = 20;
console.log(x + y);
console.log(typeof (x + y));

var x = "ABC";
var y = "DEF";
console.log(x + y);

var x = 1.2;
var y = 2.2;
console.log((x + y).toFixed(2));
console.log(typeof (x + y).toFixed(2));

var x = 1.2;
var y = 2.2;
console.log(x + y);
console.log(typeof (x + y));

var x = "A";
var y = "B";
console.log(typeof (x + y));

var x = "pranjul";
var y = 20;
console.log(typeof (x + y));
console.log(x + y); //Concatenate
console.log(x * y); //NAN

let q = 30;
q = 31;
console.log(q);
const p = 10;
//p=20;//cannot update the value
console.log(p);

let e=true;
console.log(typeof(e));
console.log(e);

var ij=null;
console.log(ij);

let fruits=[1,2,2];
console.log(fruits[1]);
console.log(typeof(fruits));

var x=5;
var y="5";
console.log(x=y);
console.log(typeof(x));
console.log(x==y);
x=5;
console.log(x===y);
console.log(x!=y)//value check;
console.log(x!==y)//Datatype Check;

let variable1=10;
function demo()
{
  let variable2=20;
  console.log("variable",variable1);
}
demo()

