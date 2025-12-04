

// async function  getDATA(){
//     return "hello world";
// }
//const result  = getDATA();

//console.log(result)


const great = new Promise((resolve,reject)=>{
    resolve("promise resolved")
})


async function getDATA(){

    return great;

}


const result2  = getDATA();

result2.then((res)=> {
    console.log(res)
})

console.log ("result2", result2)