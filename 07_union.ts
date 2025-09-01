let score: number | string = 33

score = "55"

type User = {
    name: string
    id: number
}

type Admin = {
    username: string
    id: number
}

let san: User | Admin = {name: 'san', id: 123}

function getDbId(id: number | string){
    if (typeof id === "string") {
        id.toUpperCase()
    } 
}

getDbId(2)
getDbId("2")


const data: string[] | number[] = [1 ,2 , 3] // [1, 2, "3"] will throw error. Either it is all string or number.
const data2: (string| number | boolean) [] = ["1", 2, 3, true]

let pi:3.14 = 3.14
// pi = 3.145 // this will throw error


let seatAllotment: 'aisle' | 'middle' | 'window'

// seatAllotment = 'crew' // this will throw error