// tuple is an array
let user:[string, number, boolean]

user = ["hc", 12, true] // order matters in tuple

let rgb: [number, number, number] = [12, 232, 322]

type User = [number, string] 

// const newUser: User = [1212, 'hehe@gmail.com', true] this will throw error
const newUser: User = [1212, 'hehe@gmail.com']

newUser[1] = 'haha@gmail.com' 


export {}