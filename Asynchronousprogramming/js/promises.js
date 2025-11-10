//asynchronous programming 
//promises
//3 states : pending , fullfilled , rejected

/* let p = new Promise((resolve , reject) => {
    let error = false;
    if(!error){
        resolve("yes,resolved the promise");
    }
    else{
        reject("No,rejected the promise");
    }
})

console.log(p);

//p.then((value)=>{
    //console.log(value);
    //return value + " learn consistently";
//})
//.then((newValue) => console.log(newValue)).catch((err) => console.log(err));

let newp = new Promise((resolve , reject) => {
    setTimeout(function(){
       resolve("the nextpromise resolved")
    },3000);
});

newp.then((value) => console.log(value));

p.then(value => console.log(value)); */



const user = fetch('https://jsonplaceholder.typicode.com/users');
console.log(user);