// class User {
//     public email:string // #email is the same
//     name: string
//     private city:string = "Bangkok"
//     constructor(email:string, name: string){
//         this.email = email
//         this.name = name
//     }
// }

class User {
    
    protected _courseCount:number = 1
    private city:string = "Bangkok"
    constructor(
        public email:string, 
        public name: string){      
    }

    get getEmail(): string{
        return `apple@${this.email}.com`
    }

    get courseCount(): number {
        return this._courseCount
    }

    private deleteToken(){
        console.log('token deleted');       
    }

    // don't put return type in setter.
    set courseCount(courseNumber:number){
        if (courseNumber <= 1) {
            throw new Error('course count should be greater than 1')
        }

        this._courseCount = courseNumber
    }
}

class SubUser extends User {
    isFamily:boolean = true
    changeCourseCount(){
        this._courseCount = 4
    }
}

const user = new User('s@.com','san')
