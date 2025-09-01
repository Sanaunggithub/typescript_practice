type cardNumber = {
    cardNumber: number
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}

type User = {
    readonly _id:string
    name: string
    email: string
    isActive: boolean
    creditCard?: cardDetails // ? means optional
}

let myUser: User = {
    _id: "123",
    name: 'san',
    email: 'san@.com',
    isActive: false,
    creditCard: {
        cardNumber: 123456789,
        cardDate: "12/25",
        cvv: 123
    }
}



myUser.email = 'san@.dev'
// myUser._id = "2324" this will throw error

console.log(myUser.creditCard);
