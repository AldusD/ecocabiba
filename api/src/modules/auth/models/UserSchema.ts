import { UserRolerEnum } from "../../shared/enums/userRolesEnum.js";

export class UserSchema { // user has behavior, knows more stuff, userSchema is about connecting to prisma TODO move that to readme
    private id!: number
    private email!: string;
    private password!: string;
    private role!: UserRolerEnum

    constructor(id: number, email: string, password: string, role: UserRolerEnum = UserRolerEnum.COMMON) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.role = role;
    }

    getId () { return this.id }
    getEmail () { return this.email }
    getPassword () { return this.password }
    getRole () { return this.role }
}