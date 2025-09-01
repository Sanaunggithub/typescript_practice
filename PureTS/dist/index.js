"use strict";
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
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "Bangkok";
    }
    get getEmail() {
        return `apple@${this.email}.com`;
    }
    get courseCount() {
        return this._courseCount;
    }
    deleteToken() {
        console.log('token deleted');
    }
    // don't put return type in setter.
    set courseCount(courseNumber) {
        if (courseNumber <= 1) {
            throw new Error('course count should be greater than 1');
        }
        this._courseCount = courseNumber;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const user = new User('s@.com', 'san');
