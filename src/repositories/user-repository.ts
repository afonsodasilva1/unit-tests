import { User, UserProps } from '../entities/user';

export class UserRepository {
    public users: User[]

    constructor(users: User[]) {
        this.users = users
    }

    create(userPros: UserProps){
        const user = new User({
            ...userPros,
            id: this.users.length + 1
        })

        this.users.push(user)
    }

    index(){
        return this.users
    }

    findById(id: number){
        const user = this.users.find((user) => user.id === id)

        return user
    }
}