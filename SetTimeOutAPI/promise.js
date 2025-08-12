//object creating of class promise that is already exist in js
let pranjulPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("I am Pranjul Promise and resolving now");
  }, 5000);
});

//promise chaining
function xyz(ID)
{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(ID===4)
            {
                reject("An Error Occured")
            }
            else{
                console.log("The Data is" + ID)
                resolve("Success")
            }
        },5000)
    })
}
xyz(1)
.then((res)=>{
    console.log(res);
    return xyz(2);
})
.then((res)=> xyz(3))
.then((res)=> {
    console.log(res) 
    return xyz(4)
})
.then((res)=> xyz(5))
.then((res)=> xyz(6)).catch((rej)=> console.log("Error 500"))


// async--promise state acccept, await--give output either reject and resolve
async function xy(ID)
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(ID===3)
            {
                reject("An Error");
            }
            else{
                console.log("The Data is"+ ID)
                resolve("Success")
            }
        },5000); 
    })
}
await xy(1);
await xy(2);
await xy(3);
await xy(4);
await xy(5);
await xy(6);
