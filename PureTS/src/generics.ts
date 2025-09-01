const score: Array<number> = []
const names: Array<string> = []


function identity<Type>(val: Type): Type{
    return val
}

// shorter version
function identityTwo<T>(val: T): T {
    return val
}

interface Shoe {
    brand: string
    name: string
}

identity("3")
identityTwo<Shoe>({brand: 'Adidas', name: 'shoe'})

function getSearchProduct<T>(products: T[]):T {
    return products[2] 
}

const getMoreProducts = <T,>(products: T[]): T => {
    return products[2]
}

interface Database {
    connection: string
    username: string
}

// U must have at least Database properties (can have more)
function makeConnection<T, U extends Database>(valOne: T, valTwo: U){
    return "hehe"
}

makeConnection(3, {connection: "", username: ""})

interface Quiz {
    name:string
    type:string
}

interface Course{
    name:string
    author:string
    subject:string
}

class Sellable<T>{
    public cart:T[] = []


    addTwoCart(product: T){
        this.cart.push(product)
    }
}