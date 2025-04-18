type UserProps = {
    id?: string
    name: string
    email: string
    password: string
}

export class User{
    private id?: string
    public name: string
    public email: string
    public password: string

    constructor( props: UserProps){
        this.id = props.id
        this.name = props.name
        this.email = props.email
        this.password = props.password
    }
}