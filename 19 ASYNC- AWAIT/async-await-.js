

const greeting =new Promise((resolve,reject)=> {
   setTimeout(()=>{
    resolve("Hello World")
   },5000)

})

const greeting2 =new Promise((resolve,reject)=> {
    setTimeout(()=> {
        resolve ( " hello good morning")
    }, 10000);

})

const getMessage = () => {
    const msg = greeting 

    console.log ("msg",  msg);


    console.log ( "this will execute before promise program " )
}



async function getMsg(){

    const msg  = await greeting 
    console.log("msg1:", msg)

    const msg2 = await greeting2

    console .log("msg2:", msg2)

    console.log ("this will execute after await program")

}

getMsg()