import { UserRolerEnum } from "../../shared/enums/userRolesEnum.js";
import type { UserSchema } from "./userSchema.js";

export class User { // user has behavior, knows more stuff, userSchema is about connecting to prisma TODO move that to readme
    private id?: number;
    private email!: string; // TODO change to specific email class??
    private password!: string;
    private role!: UserRolerEnum;

    constructor(email: string, password: string, role: UserRolerEnum = UserRolerEnum.COMMON) {
        this.email = email;
        this.password = password;
        this.role = role;
    }

   static ofDbUser (dbUser: UserSchema): User {
        const user =  new User(dbUser.getEmail(), dbUser.getPassword(), dbUser.getRole())
        user.setId(dbUser.getId());
        return user;
    }

    checkBalance () : number {
        // implements logic with no link to prisma representation
        return 10;
    }

    setId (id: number) {
        this.id = id;
    }
}