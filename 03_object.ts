const User = {
    name: 'San',
    email: 'hehe@gmail.com'
}

function createUser({name: string, isPaid: boolean}){}

createUser({name: 'San', isPaid: false})

// bad behavior
let newUser = {
    name: 'San', isPaid: false, email:'h@h.com',
}

createUser(newUser)
createUser({name: 'San', isPaid: false, email:'h@h.com',})

// function
function createFullCourse():{} {
    return {}
}

function createCourse():{name: string, price: number} {
    return {name: 'api', price: 12.2}
}

export {}