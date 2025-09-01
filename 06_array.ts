// const superHeros = [] // Typescript infers it as never[]. No values of any type are allowed to be pushed in.

const superHeros: string[] = [] 
const heroPower: Array<number> = []

type User = {
    name: string
    isActive: boolean
}

const allUsers: User[] = [] 

const MLModels: number[][] = [
    [1, 2, 3],
    [2, 4, 6]
]
superHeros.push('superman')

allUsers.push({name:'san',isActive: true})

export {}