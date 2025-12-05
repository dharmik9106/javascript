
// using PROMISE
const userDATA = ()=>{

    const res = fetch("https://jsonplaceholder.typicode.com/users").then((res)=>res.json()).then((user)=>console.log(user.map((user)=> user.name)))

    console.log (res);

}

userDATA();


async function fetchDATA(){
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users")

        const data = await res.json();

        console.log(data)

        if(!data.ok){
            throw new Error("Failed to fetch data")
        }
    }catch (Error){
        console.log(Error)
    }
}

fetchDATA();
