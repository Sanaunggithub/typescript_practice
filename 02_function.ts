function addTwo(num: number):number {
    return num + 2
}

let myval = addTwo(5)
console.log(myval);

// function getValue (myval: number) {
//     if (myval > 5) {
//         return true 
//     }
//     return "200 OK"
// }

const getHello = (s: string): string => {
    return "hello"
}


const heros = ['thor', 'superman' , 'batman']

heros.map((hero): string => {
    return `hero is ${hero}`
})


function consoleError(msg: string): void{
    console.log(msg);
}

function handleError(errmsg: string): never{
    throw new Error(errmsg)
}

export {}