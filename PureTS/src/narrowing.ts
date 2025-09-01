// in
interface User{
    name: string
    email: string
}

interface Admin {
    name: string
    email: string
    isAdmin : boolean
}

function isAdminAccount(account: User | Admin){
    if("isAdmin" in account){
        return account.isAdmin
    }
}

// isinstance : can be used data type with new
function logValue(x: Date | string){
    if (x instanceof Date) {
        console.log(x.toUTCString());
    } else {
        console.log(x.toUpperCase());      
    }
}

// type predicate
type Fish = {
    swim: () => void
}

type Bird = {
    fly: () => void
}

// pet is Fish is type predicate
function isFish(pet: Fish | Bird): pet is Fish{
    return (pet as Fish).swim != undefined
}


function getFood(pet: Fish | Bird){
    if (isFish(pet)) {
        pet
        return 'fish food'
    } else {
        pet
        return 'bird food'
    }
}

interface Circle {
    kind: 'circle'
    radius: number
}

interface Square {
    kind: 'square'
    side: number
}


interface Rectangle {
    kind: 'rectangle'
    width: number
    length: number
}

type Shape = Circle | Square | Rectangle


function getArea(shape: Shape){
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2

        case "square":
            return shape.side * shape.side 

        case 'rectangle':
            return shape.length * shape.width
        default:
            const _defaultShape:never = shape // default case should return nothing
            return _defaultShape
    }
}








