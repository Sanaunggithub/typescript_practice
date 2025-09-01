type User = {
    name: string;
    email: string;
    isActive: boolean;
}

// renaming string
type Mystring = string

function createUser(user: User):User {
    console.log(user.email);
    console.log(user.name);
       
    return {name:"", email:"", isActive: true}
}

createUser({name:"", email:"", isActive: true})

export {}