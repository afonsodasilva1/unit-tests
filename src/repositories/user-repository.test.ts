import { beforeEach, describe, expect, it } from "vitest";
import { UsersRepository } from "./user-repository";

describe("User Repository", () => {
    let usersRepositry: UsersRepository

    beforeEach( () => {
        usersRepositry = new UsersRepository([
            {
                id: 1,
                name: 'Lucas',
                email: 'lucas@ex.com',
                password: '123456'
            },
            {
                id: 2,
                name: 'Pedro', 
                email: 'pedro@ex.com',
                password: '123456'
            }
        ])
    })

    it("should be able to create a new user", () => {
        const createdUser = usersRepositry.create(
            {
                name: 'João',
                email: 'joao@gmail.com',
                password: '12345678'
            }
        )

        expect(createdUser).toHaveProperty('id')
    })

    it("should be able to return all users", () => {
        const users = usersRepositry.index()

        expect(users).toHaveLength(2)
    })

    it('Should be able to return a user by id', () =>{
        const user = usersRepositry.findById(2)

        expect(user).toHaveProperty('id')
        expect(user.name).toEqual('Lucas')
        expect(user.id).toEqual(2)
    })
})