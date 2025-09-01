interface User {
    email: string,
    userId: number,
    isActive?: boolean,
    readonly dbId: number
    // trail: () => string
    trail(): string
    getCoupon(couponName: string, value: number): number 
}

// reopening Interface 
interface User {
    githubToken: string
}

// inheritance
interface Admin extends User {
    role: 'admin' |'ta' | 'learner'
}

const user: Admin = {    
                        email: 'san@.com', 
                        userId: 1, 
                        dbId:12,
                        role: 'admin',
                        githubToken: 'github',
                        trail: () => {
                            return "trail has started"
                        },
                        getCoupon: (name: 'san', value: 23) => {
                            return 2
                        }
                    }

